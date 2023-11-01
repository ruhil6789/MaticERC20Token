require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.2",
// };
module.exports = {
  // defaultNetwork: "sepolia",
  // networks: {
  //   hardhat: {
  //   },
  //   sepolia: {
  //     url: "https://sepolia.infura.io/v3/<key>",
  //     accounts: [privateKey1, privateKey2, ...]
  //   }
  // },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  // paths: {
  //   sources: "./contracts",
  //   tests: "./test",
  //   cache: "./cache",
  //   artifacts: "./artifacts"
  // },
  mocha: {
    timeout: 40000
  }
}