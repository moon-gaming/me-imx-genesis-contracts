import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const PRIVATE_KEY = process.env.PK || "";
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY || "";
const RPC_URL = process.env.RPC_URL;

const config = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: RPC_URL,
      }
    },
    imx_mainnet: {
      url: RPC_URL,
      chainId: 13371,
      accounts: [PRIVATE_KEY],
      gasMultiplier: 1.25
    },
  },
  etherscan: {
    apiKey: { 
      // binance smart chain
      mainnet: ETHERSCAN_KEY,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  mocha: {
    timeout: 30000,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  }
};

export default config;
