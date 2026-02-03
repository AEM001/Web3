import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("Counter", function () {
  it("Should emit the Increment event when calling the inc() function", async function () {
    const counter = await ethers.deployContract("Counter");

    await expect(counter.inc()).to.emit(counter, "Increment").withArgs(1n);
  });

  it("The sum of the Increment events should match the current value", async function () {
    const counter = await ethers.deployContract("Counter");
    const deploymentBlockNumber = await ethers.provider.getBlockNumber();

    // run a series of increments
    for (let i = 1; i <= 10; i++) {
      await counter.incBy(i);
    }

    const events = await counter.queryFilter(
      counter.filters.Increment(),
      deploymentBlockNumber,
      "latest",
    );

    // check that the aggregated events match the current value
    let total = 0n;
    for (const event of events) {
      total += event.args.by;
    }

    expect(await counter.x()).to.equal(total);
  });

  it("Should decrement the counter", async function () {
    const counter = await ethers.deployContract("Counter");
    
    // Increment first
    await counter.inc();
    await counter.inc();
    expect(await counter.x()).to.equal(2n);
    
    // Then decrement
    await counter.dec();
    expect(await counter.x()).to.equal(1n);
  });

  it("Should not allow decrementing below zero", async function () {
    const counter = await ethers.deployContract("Counter");
    
    // Try to decrement when counter is 0
    await expect(counter.dec()).to.be.revertedWith("Counter is already zero");
  });

  it("Should reset the counter to zero", async function () {
    const counter = await ethers.deployContract("Counter");
    
    await counter.incBy(100);
    expect(await counter.x()).to.equal(100n);
    
    await counter.reset();
    expect(await counter.x()).to.equal(0n);
  });
});
