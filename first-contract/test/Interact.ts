import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("Interact", function () {
  it("should use counter functions", async function () {
    // Deploy fresh contract (don't use hardcoded address)
    const counter = await ethers.deployContract("Counter");
    
    console.log("Initial value:", await counter.x());
    
    await counter.inc();
    console.log("After inc():", await counter.x());
    
    await counter.incBy(10);
    console.log("After incBy(10):", await counter.x());
    
    await counter.dec();
    console.log("After dec():", await counter.x());
    
    await counter.reset();
    console.log("After reset():", await counter.x());
  });
});