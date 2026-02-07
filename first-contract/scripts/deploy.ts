import { network } from "hardhat";

const { ethers } = await network.connect();

async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.waitForDeployment();
  
  console.log("Counter deployed to:", counter.target);
}

main().catch(console.error);