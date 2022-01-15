// https://eth-ropsten.alchemyapi.io/v2/NqFzbof8e7gBgVb6xRRe2g6MCWN8t-d9

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/NqFzbof8e7gBgVb6xRRe2g6MCWN8t-d9",
      accounts: [
        "403357a3cc8874c202739ab577e5f264baeb7e9fa4afa4dc48f0bb2a8ecaa889",
      ],
    },
  },
};
