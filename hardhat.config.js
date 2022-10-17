require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    hardhat: {
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000,
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.6.6'
      },
    ],
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  }
};