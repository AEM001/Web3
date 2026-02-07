import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("DataTypes", function () {
    let dataTypes: any;

    beforeEach(async function () {
        dataTypes = await ethers.deployContract("DataTypes");
    });

    // it("should deploy with initial values", async function () {
    //     expect(await dataTypes.myString()).to.equal("My string");
    //     expect(await dataTypes.boolean1()).to.equal(true);
    //     expect(await dataTypes.myUnit()).to.equal(1n);
    //     expect(await dataTypes.myInt()).to.equal(1n);
    // });

    it("should set and get string", async function () {
        await dataTypes.setString("New String");
        expect(await dataTypes.myString()).to.equal("New String");
    });

    it("should set new bool",async function (){
        await dataTypes.setBool(false);
        expect(await dataTypes.boolean1()).to.equal(false);
    })

    it("must get private name",async function (){
        expect(await dataTypes.getPrivateName()).to.equal("dussy");
    })

});