import "dotenv/config";
import { defineConfig } from "@wagmi/cli";
import { etherscan } from "@wagmi/cli/plugins";
import {
  apeChain,
  arbitrum,
  base,
  blast,
  bsc,
  mainnet,
  optimism,
  polygon,
} from "viem/chains";
import z from "zod";

const etherscanApiKey = z.string().parse(process.env.ETHERSCAN_API_KEY);

export default defineConfig({
  out: "src/generated.ts",
  contracts: [],
  plugins: [
    etherscan({
      apiKey: etherscanApiKey,
      chainId: mainnet.id,
      contracts: [
        {
          name: "GasliteDrop",
          address: {
            [mainnet.id]: "0x09350F89e2D7B6e96bA730783c2d76137B045FEF",
            [arbitrum.id]: "0x09350F89e2D7B6e96bA730783c2d76137B045FEF",
            [optimism.id]: "0x09350F89e2D7B6e96bA730783c2d76137B045FEF",
            [polygon.id]: "0x09350F89e2D7B6e96bA730783c2d76137B045FEF",
            [base.id]: "0x09350F89e2D7B6e96bA730783c2d76137B045FEF",
            [bsc.id]: "0xf6c3555139aeA30f4a2be73EBC46ba64BAB8ac12",
            [blast.id]: "0x2EA391c57bDE02019EFbBEb0C05f104877c975C4",
            [apeChain.id]: "0x54b5cd30582ddc305d814c95138a5bce04419249",
          },
        },
      ],
    }),
  ],
});
