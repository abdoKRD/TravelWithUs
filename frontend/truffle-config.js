module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './src/contracts/',
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
};
