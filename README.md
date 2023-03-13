<div align="center">
  
  <h3 align="center">MantleMultisig</h3>

  <p align="center">
    An online NFT platform
    <br />
    <a href="https://github.com/stugufaka/MantleMultisig"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://mantlemultisig.netlify.app/">View App</a>
    
  </p>
</div>

<!-- ABOUT THE PROJECT -->

# What it does

MantleMultisig contract is a smart contract on the Ethereum blockchain that implements a multi-signature wallet with the following features:

Multiple owners: The wallet can have multiple owners, each of whom has the ability to submit and confirm transactions.
Required signatures: The number of required signatures can be set, which determines the minimum number of confirmations needed to execute a transaction.

Timelock: Transactions can be timelocked, which means they can only be executed after a certain amount of time has elapsed.

Authorized users: Each transaction can have a list of authorized users who have permission to execute the transaction.

Nonce: Each transaction is associated with a nonce, which is used to prevent replay attacks.

Events: The contract emits events for depositing funds, submitting transactions, confirming transactions, and executing transactions.

# Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [React.js](https://reactjs.org/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Solidity](https://docs.soliditylang.org/en/v0.8.13/)
- [IPFS](https://ipfs.io/)

# Getting started

The project consist of the backend and also the front end.

### Prerequisites

- nodejs installed
- npm
- Hardhat

```
npm install npm@latest -g
npm install -g hardhat
```

### Local setup

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```
git clone https://github.com/stugufaka/MantleMultisig

cd nftproject

# install using NPM or Yarn
npm install

# or

yarn
```

2. Start the local Hardhat node

```sh
npx hardhat node
```

3. With the network running, deploy the contracts to the local network in a separate terminal window

```sh
npx hardhat run scripts/deploy.js --network localhost
```

4. Start the app

```
npm run dev
```

### Configuration

The chain ID should be 80001. If you have a localhost rpc set up, you may need to overwrite it.

To deploy to Polygon test or main networks, update the configurations located in **hardhat.config.js** to use a private key and, optionally, deploy to a private RPC like Infura.

```javascript
/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle");
require("hardhat-contract-sizer");
const privateKey = "private key here";

const projectId = "xxx";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },

    mantel: {
      url: "https://rpc.testnet.mantle.xyz",
      allowUnlimitedContractSize: true,
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
};
```

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

# License

Distributed under the MIT License.

# Contact

- Mends Albert - https://twitter.com/mendalbert
