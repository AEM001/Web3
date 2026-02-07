//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Functions {
    string private name = "example1";
    
    // Public function - can be called from anywhere
    function setName(string memory _name) public {
        name = _name;
    }
    
    // View function - reads data, doesn't modify state
    function getName() public view returns (string memory) {
        return name;
    }
    
    // Internal function - only callable within this contract and inherited contracts
    function resetName() internal {
        name = "example1";
    }
    
    // Pure function - doesn't read or write state
    function add(uint a, uint b) public pure returns (uint) {
        return a + b;
    }
    
    // External function - only callable from outside contract (more gas efficient)
    function externalAdd(uint a, uint b) external pure returns (uint) {
        return a + b;
    }
    
    // Helper function to test internal function
    function callResetName() public {
        resetName();
    }
}
