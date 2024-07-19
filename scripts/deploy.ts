import { ethers } from "hardhat";

async function main() {
  const operator = "0x5F5EBa8133f68ea22D712b0926e2803E78D89221"; // Mainnet
  const GenesisHeroFactory = await ethers.getContractFactory("GenesisHero");
  const genesisHero = await GenesisHeroFactory.deploy(
      "Genesis Hero Gear",
      "GEAR",
      "https://eu-central-1.aws.data.mongodb-api.com/app/me-develop-vbexe/endpoint/nfts/herogear/metadata?tokenId=",
      "",
      operator,
      500   // 5% tax
  );
  console.log("GenesisHero Contract deployment in Progress:", genesisHero.target);
  await genesisHero.waitForDeployment();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
