import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("functions",function(){
   let functions:any;
   beforeEach(async function(){
    functions = await ethers.deployContract("Functions");
   })

   it("should set and get name",async function(){
    await functions.setName("dussy");
    expect(await functions.getName()).to.equal("dussy");
   });

   it("should reset name",async function(){
    await functions.setName("changed");//setName is internal function
    await functions.callResetName();//callResetName is public function
    expect(await functions.getName()).to.equal("example1");
   });

   it("should add numbers",async function(){
    const result = await functions.add(1,2);
    expect(result).to.equal(3);
   });

   it("should add external numbers",async function(){
    const result = await functions.externalAdd(1,2);
    expect(result).to.equal(3);
   });
})