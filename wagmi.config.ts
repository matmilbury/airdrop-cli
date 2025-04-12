import 'dotenv/config'
import { defineConfig } from '@wagmi/cli'
import { etherscan } from '@wagmi/cli/plugins'

console.log(process.env.ETHERSCAN_API_KEY)
export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
	  etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY,
      chainId: 56,
      contracts: [
        {
          name: 'GasliteDrop',
          address: '0xf6c3555139aeA30f4a2be73EBC46ba64BAB8ac12',
        },
      ],
    }),
  ],
})
