import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("visibility",function(){
   let visibility:any;
   beforeEach(async function(){
    visibility = await ethers.deployContract("Visibility");
   })

   it("should deploy with initial names",async function(){
    expect(await visibility.name1()).to.equal("Name 1");
    // expect(await visibility.name2()).to.equal("Name 2");
    expect(await visibility.name3()).to.equal("Name 3");
    // expect(await visibility.name4()).to.equal("Name 4");
   })
   
   it("shoud get public names",async function(){
    await visibility.getPublicNames();
   })
   
   it("shoud get internal name",async function(){
    await visibility.getInternalName();
   })
   
   it("shoud get private name",async function(){
    await visibility.getPrivateName();
   })
});   