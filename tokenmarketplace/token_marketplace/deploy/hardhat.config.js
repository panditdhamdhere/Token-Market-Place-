// require("@nomicfoundation/hardhat-toolbox");
// require('dotenv').config();

// /** @type import('hardhat/config').HardhatUserConfig */

// const NEXT_PUBLIC_CORE_BLOCKCHAIN_TESTNET = "https://rpc.test.btcs.network/";
// const NEXT_PUBLIC_PRIVATE_KEY = process.env.PRIVATE_KEY;
// module.exports = {
//   solidity: "0.8.20",
//   defaultNetwork: 'testnet',
//   networks: {
//     hardhat: {},
//     core_testnet: {
//       url: NEXT_PUBLIC_CORE_BLOCKCHAIN_TESTNET,
//       accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
//     },
//   },
// };

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const NEXT_PUBLIC_PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: 'testnet',

  networks: {
    hardhat: {
    },
    testnet: {
      url: 'https://rpc.test.btcs.network',
      accounts: [NEXT_PUBLIC_PRIVATE_KEY],
      chainId: 1115,
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.8.20',
        settings: {
          evmVersion: 'paris',
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  // paths: {
  //   sources: './contracts',
  //   cache: './cache',
  //   artifacts: './artifacts',
  // },
  // mocha: {
  //   timeout: 20000,
  // },
};
