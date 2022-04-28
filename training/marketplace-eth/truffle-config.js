const HDWalletProvider = require("@truffle/hdwallet-provider")
const keys = require("./keys.json")

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
    ropsten: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: keys.MNEMONIC
          },
        providerOrUrl: `https://ropsten.infura.io/v3/${keys.INFURA_PROJECT_ID}`,
          addressIndex: 0
        }),
      network_id: '3',
      gas: 5500000,
      gasPrice: 20000000000, // Change in production
      confirmations: 2,
      timeoutBlocks: 200 // wait for 200 blocks before deployment timeiout
    }
  },
  compilers: {
    solc: {
      version: "0.8.4",
    }
  }
};

// Transaction hash of deployed contract
// 0xe3711fc29c102c3f804ced61492717bc7633fe737b9921834f1953c322c49f03

// Deployed contract hash
// 0x73e6208AF31AD37b9D0900b8aa5b507d446B3Dda

// Owner account
// 0xc7775b3390302CaA39CC648be7E4F24160DA4d1b


//NEXT_PUBLIC_TARGET_CHAIN_ID=1337
//NEXT_PUBLIC_NETWORK_ID=5777