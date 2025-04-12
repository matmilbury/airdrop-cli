//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GasliteDrop
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xf6c3555139aeA30f4a2be73EBC46ba64BAB8ac12)
 */
export const gasliteDropAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_token', internalType: 'address', type: 'address' },
      { name: '_addresses', internalType: 'address[]', type: 'address[]' },
      { name: '_amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_totalAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'airdropERC20',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_nft', internalType: 'address', type: 'address' },
      { name: '_addresses', internalType: 'address[]', type: 'address[]' },
      { name: '_tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'airdropERC721',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_addresses', internalType: 'address[]', type: 'address[]' },
      { name: '_amounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'airdropETH',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

/**
 * [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xf6c3555139aeA30f4a2be73EBC46ba64BAB8ac12)
 */
export const gasliteDropAddress = {
  56: '0xf6c3555139aeA30f4a2be73EBC46ba64BAB8ac12',
} as const

/**
 * [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xf6c3555139aeA30f4a2be73EBC46ba64BAB8ac12)
 */
export const gasliteDropConfig = {
  address: gasliteDropAddress,
  abi: gasliteDropAbi,
} as const
