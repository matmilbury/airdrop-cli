//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GasliteDrop
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x09350F89e2D7B6e96bA730783c2d76137B045FEF)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x09350F89e2D7B6e96bA730783c2d76137B045FEF)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xf6c3555139aeA30f4a2be73EBC46ba64BAB8ac12)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x09350F89e2D7B6e96bA730783c2d76137B045FEF)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x09350F89e2D7B6e96bA730783c2d76137B045FEF)
 * - [__View Contract on Ape Chain Apescan__](https://apescan.io/address/0x54b5cd30582ddc305d814c95138a5bce04419249)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x09350F89e2D7B6e96bA730783c2d76137B045FEF)
 * - [__View Contract on Blast Blastscan__](https://blastscan.io/address/0x2EA391c57bDE02019EFbBEb0C05f104877c975C4)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x09350F89e2D7B6e96bA730783c2d76137B045FEF)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x09350F89e2D7B6e96bA730783c2d76137B045FEF)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xf6c3555139aeA30f4a2be73EBC46ba64BAB8ac12)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x09350F89e2D7B6e96bA730783c2d76137B045FEF)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x09350F89e2D7B6e96bA730783c2d76137B045FEF)
 * - [__View Contract on Ape Chain Apescan__](https://apescan.io/address/0x54b5cd30582ddc305d814c95138a5bce04419249)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x09350F89e2D7B6e96bA730783c2d76137B045FEF)
 * - [__View Contract on Blast Blastscan__](https://blastscan.io/address/0x2EA391c57bDE02019EFbBEb0C05f104877c975C4)
 */
export const gasliteDropAddress = {
  1: '0x09350F89e2D7B6e96bA730783c2d76137B045FEF',
  10: '0x09350F89e2D7B6e96bA730783c2d76137B045FEF',
  56: '0xf6c3555139aeA30f4a2be73EBC46ba64BAB8ac12',
  137: '0x09350F89e2D7B6e96bA730783c2d76137B045FEF',
  8453: '0x09350F89e2D7B6e96bA730783c2d76137B045FEF',
  33139: '0x54B5CD30582DDC305d814c95138A5bcE04419249',
  42161: '0x09350F89e2D7B6e96bA730783c2d76137B045FEF',
  81457: '0x2EA391c57bDE02019EFbBEb0C05f104877c975C4',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x09350F89e2D7B6e96bA730783c2d76137B045FEF)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x09350F89e2D7B6e96bA730783c2d76137B045FEF)
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xf6c3555139aeA30f4a2be73EBC46ba64BAB8ac12)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x09350F89e2D7B6e96bA730783c2d76137B045FEF)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x09350F89e2D7B6e96bA730783c2d76137B045FEF)
 * - [__View Contract on Ape Chain Apescan__](https://apescan.io/address/0x54b5cd30582ddc305d814c95138a5bce04419249)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x09350F89e2D7B6e96bA730783c2d76137B045FEF)
 * - [__View Contract on Blast Blastscan__](https://blastscan.io/address/0x2EA391c57bDE02019EFbBEb0C05f104877c975C4)
 */
export const gasliteDropConfig = {
  address: gasliteDropAddress,
  abi: gasliteDropAbi,
} as const
