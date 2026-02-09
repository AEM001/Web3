import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("payable",function(){
    let owner:any;
    let other:any;
    let contract:any;
    this.beforeEach(async function(){
        [owner,other] = await ethers.getSigners();
        contract = await ethers.deployContract("Payable", [], owner);
    })

    // it("should deploy with initial balance",async function(){
    //     expect(await contract.balance()).to.equal(0);
    
    // })
    // it("should get a payment",async function(){
    //     await contract.connect(other).pay({value:10});
    //     expect(await contract.balance()).to.equal(10);
    // })
    // it("should receive a payment",async function(){
    //     await owner.sendTransaction({
    //         to: contract.target,
    //         value: 100
    //     });
    //     expect(await contract.checkBalance()).to.equal(100);
    //     expect(await contract.count()).to.equal(1);
    // })
    it("should transfer a payment",async function(){
        // First, fund the contract
        await contract.connect(other).pay({value: 100});
        
        // Get receiver's initial balance
        const receiverInitialBalance = await ethers.provider.getBalance(other.address);
        
        // Transfer 50 wei from contract to other
        await contract.transfer(other.address, 50);
        
        // Check receiver got the money
        const receiverFinalBalance = await ethers.provider.getBalance(other.address);
        expect(receiverFinalBalance - receiverInitialBalance).to.equal(50n);
        
        // Check contract balance decreased
        expect(await contract.checkBalance()).to.equal(50);
    })
    
})