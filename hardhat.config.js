require("@nomiclabs/hardhat-waffle");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const INFURA_API_KEY = "https://rinkeby.infura.io/v3/ba7297c239304dbba0e654a17405c263";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const PRIVATE_KEY = "d55878384be5aacc497db207aec296a35d29457d6bb49c7dfbb2dfee054a3243";

module.exports = {
  solidity: "0.8.7",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/ba7297c239304dbba0e654a17405c263`,
      accounts: [`${PRIVATE_KEY}`]
    }
  }
};