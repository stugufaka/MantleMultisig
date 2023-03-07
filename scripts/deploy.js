const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  let txHash, txReceipt;

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();

  await nft.deployed();

  txHash = nft.deployTransaction.hash;
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let nftaddress = txReceipt.contractAddress;

  console.log("nft contract address", nftaddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
