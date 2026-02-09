import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("modifiers",function(){
   let modifiers:any;
   let owner:any;
   let other:any;
   beforeEach(async function(){
    [owner, other] = await ethers.getSigners();//the first signer is used as the contract deployer
    modifiers = await ethers.deployContract("Modifiers", [], owner);
   })

   it("should deploy with initial balance",async function(){
    expect(await modifiers.balance()).to.equal(0);
   })

   it("should set the deployer as owner", async function () {
      expect(await modifiers.owner()).to.equal(owner.address);
   });

   it("should allow anyone to deposit", async function () {
      await modifiers.connect(other).deposit({ value: 100 });
      expect(await modifiers.balance()).to.equal(100);
   });

   it("should allow owner to withdraw", async function () {
      await modifiers.connect(other).deposit({ value: 200 });
      await modifiers.connect(owner).withdraw(100);
      expect(await modifiers.balance()).to.equal(100);
   });

//    it("should revert when non-owner tries to withdraw", async function () {
//       await modifiers.connect(other).deposit({ value: 100 });
//       await expect(
//          modifiers.connect(other).withdraw(50)
//       ).to.be.revertedWith("caller must be owner");
//    });

   it("isOwner should return true only for owner", async function () {
      expect(await modifiers.connect(owner).isOwner()).to.equal(true);
      expect(await modifiers.connect(other).isOwner()).to.equal(false);
   });
   
})