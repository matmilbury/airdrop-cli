import Papa from "papaparse";
import {
  getContract,
  createWalletClient,
  custom,
  type Address,
  parseUnits,
  formatUnits,
  maxUint256,
  publicActions,
} from "viem";
import * as chains from "viem/chains";
import { search } from "@inquirer/prompts";
import { gasliteDropAddress, gasliteDropConfig } from "./generated";
import provider from "eth-provider";
import Fuse from "fuse.js";
import invariant from "tiny-invariant";

function getSupportedChains(addressesPerChain: Record<number, string>) {
  return Object.values(chains).filter((chain) => {
    return Object.keys(addressesPerChain).includes(String(chain.id));
  });
}

type Chain = ReturnType<typeof getSupportedChains>[number];

async function getChain(): Promise<Chain> {
  const options = getSupportedChains(gasliteDropAddress).map((chain) => {
    return {
      name: chain.name,
      value: chain,
    };
  });
  const fuzzy = new Fuse(options, { keys: ["name"] });
  const chain = search({
    message: "Select network",
    source: (input) => {
      if (!input) return options;
      return fuzzy.search(input).map(({ item }) => item);
    },
  });
  invariant(chain, "Selecting a chain is required");
  return chain;
}

function assertValidChainId(
  chainId: Chain["id"],
): asserts chainId is keyof typeof gasliteDropAddress {
  invariant((+chainId) in gasliteDropAddress, `Invalid chain ID: ${chainId}`);
}

function getGasliteDropAddress(chain: Chain): Address {
  assertValidChainId(chain.id);
  return gasliteDropConfig.address[chain.id];
}

function getProvider(): ReturnType<typeof provider> {
  // NOTE origin is ignored, see https://github.com/floating/eth-provider/issues/80
  return provider(["frame"], { origin: "gaslite-drop-cli" });
}

function getClient({
  customProvider,
  chain,
}: {
  customProvider: ReturnType<typeof provider>;
  chain: Chain;
}) {
  return createWalletClient({
    chain,
    transport: custom(customProvider, { name: "gaslite-drop-cli" }),
  }).extend(publicActions);
}

type Client = ReturnType<typeof getClient>;

async function getTokenAddress(): Promise<Address> {
  // TODO select from a list of supported tokens or enter custom token address
  return "0x55d398326f99059fF775485246999027B3197955";
}

type TokenMetadata = Pick<Token, "symbol" | "decimals">;

async function getTokenMetadata(address: Address): Promise<TokenMetadata> {
  // TODO fetch real metadata
  return {
    symbol: "USDT",
    decimals: 18,
  };
}

async function getCsvPath(): Promise<string> {
  // TODO ask for a path to a csv file (provide a default)
  return "airdrop.csv";
}

type AirdropEntry = {
  address: Address;
  amount: bigint;
};

async function parseCsv(path: string) {
  const { data, errors } = Papa.parse(await Bun.file(path).text(), {
    header: true,
    skipEmptyLines: true,
  });
  // TODO parse errors and return invalid rows
  // TODO validate with zod
  return {
    data: (data as AirdropEntry[]).map((entry) => ({
      ...entry,
      amount: String(entry.amount),
    })),
    invalid: [],
  };
}

function calculateAirdropSum(entries: AirdropEntry[]): bigint {
  return entries.reduce((acc, entry) => acc + entry.amount, 0n);
}

function dryRun({
  chain,
  token,
  currentAllowance,
  data,
  sum,
}: {
  chain: Chain;
  token: { address: Address; symbol: string; decimals: number };
  currentAllowance: bigint;
  data: AirdropEntry[];
  sum: bigint;
}): void {
  // TODO render as tables
  const lines = [
    `Chain:\t${chain.name}`,
    `Token:\t${token.symbol}`,
    `Total amount:\t${formatUnits(sum, token.decimals)}`,
    // TODO format numbers, eg. 12000 -> 12,000
    `Your current allowance:\t${currentAllowance === maxUint256 ? "infinite" : formatUnits(currentAllowance, token.decimals)}`,
    `Transfers:`,
    data.map(
      ({ address, amount }) =>
        `${address}\t${formatUnits(amount, token.decimals)}`,
    ),
    `Next up:`,
    ...(sum > currentAllowance ? [` - Increase allowance`] : []),
    ` - Perform an airdrop`,
  ];
  // TODO use proper logging
  console.log(lines.join("\n"));
}

type Token = {
  address: Address;
  symbol: string;
  decimals: number;
};

async function fetchAllowance({
  token,
  gasliteDropAddress,
}: {
  token: Token;
  gasliteDropAddress: Address;
}): Promise<bigint> {
  // TODO fetch real allowance
  return maxUint256;
}

async function airdrop({
  data,
  token,
  client,
  userAddress,
  contractAddress,
  chain,
}: {
  data: AirdropEntry[];
  token: Token;
  client: Client;
  userAddress: Address;
  contractAddress: Address;
  chain: Chain;
}) {
  const gasliteDrop = getContract({
    abi: gasliteDropConfig.abi,
    address: contractAddress,
    client: { wallet: client },
  });

  const recipients = data.map(({ address }) => address);
  const amounts = data.map(({ amount }) => parseUnits(String(amount), 18));
  const total = data.reduce(
    (acc, { amount }) => acc + parseUnits(String(amount), 18),
    0n,
  );

  // TODO simulate the transaction first
  const txHash = await gasliteDrop.write.airdropERC20(
    [token.address, recipients, amounts, total],
    { account: userAddress, chain },
  );

  return client.waitForTransactionReceipt({ hash: txHash });
}

async function main() {
  const chain = await getChain();
  const contractAddress = getGasliteDropAddress(chain);
  const tokenAddress = await getTokenAddress();
  const tokenMetadata = await getTokenMetadata(tokenAddress);
  const token: Token = {
    address: tokenAddress,
    ...tokenMetadata,
  };
  const csvPath = await getCsvPath();
  const { data: rawCsvData, invalid } = await parseCsv(csvPath);
  // TODO if any invalid rows, log warnings and exit with an error code
  // TODO handle empty csv
  const data = rawCsvData.map((entry) => ({
    ...entry,
    amount: parseUnits(entry.amount, token.decimals),
  }));
  const airdropSum = calculateAirdropSum(data);
  const currentAllowance = await fetchAllowance({
    token,
    gasliteDropAddress: contractAddress,
  });
  dryRun({
    chain,
    currentAllowance,
    token,
    data,
    sum: airdropSum,
  });
  // TODO continue? Y/n
  const customProvider = getProvider();
  // TODO handle UserRejectedRequestError
  const client = getClient({ customProvider, chain });
  const [userAddress] = await client.getAddresses();
  invariant(userAddress, "Could not find a wallet address");

  await client.switchChain(chain);

  // TODO if not enough allowance, ask for it and display a loader
  const txReceipt = await airdrop({
    data,
    token,
    client,
    userAddress,
    contractAddress,
    chain,
  });

  if (chain.blockExplorers) {
    console.log(
      `${chain.blockExplorers.default.url}/tx/${txReceipt.transactionHash}`,
    );
  }

  customProvider.close();
}

await main();
