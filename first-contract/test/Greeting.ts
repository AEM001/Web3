import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("Greeting", function () {
  it("Should set the initial message", async function () {
    const greeting = await ethers.deployContract("Greeting", ["Hello, World!"]);
    
    expect(await greeting.message()).to.equal("Hello, World!");
  });

  it("Should change the message", async function () {
    const greeting = await ethers.deployContract("Greeting", ["Hello"]);
    
    await greeting.setMessage("Goodbye");
    expect(await greeting.message()).to.equal("Goodbye");
  });

  it("Should track the number of changes", async function () {
    const greeting = await ethers.deployContract("Greeting", ["Initial"]);
    
    expect(await greeting.changeCount()).to.equal(0n);
    
    await greeting.setMessage("First change");
    expect(await greeting.changeCount()).to.equal(1n);
    
    await greeting.setMessage("Second change");
    expect(await greeting.changeCount()).to.equal(2n);
  });

  it("Should emit MessageChanged event", async function () {
    const greeting = await ethers.deployContract("Greeting", ["Hello"]);
    const [signer] = await ethers.getSigners();
    
    await expect(greeting.setMessage("New Message"))
      .to.emit(greeting, "MessageChanged")
      .withArgs("New Message", signer.address);
  });

  it("Should identify the owner correctly", async function () {
    const greeting = await ethers.deployContract("Greeting", ["Hello"]);
    
    expect(await greeting.isOwner()).to.equal(true);
  });

  it("Should return the message via getMessage()", async function () {
    const greeting = await ethers.deployContract("Greeting", ["Test Message"]);
    
    expect(await greeting.getMessage()).to.equal("Test Message");
  });
});
