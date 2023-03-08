const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  let txHash, txReceipt;

  const MantleMultisig = await hre.ethers.getContractFactory("MantleMultisig");
  const mantleMultisig = await MantleMultisig.deploy();

  await mantleMultisig.deployed();

  txHash = mantleMultisig.deployTransaction.hash;
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let mantleMultisigAddress = txReceipt.contractAddress;

  console.log("Mantle Multisig Contract Address", mantleMultisigAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
