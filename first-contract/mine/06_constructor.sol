//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Constructor {
    string public name;
    address public owner;
    uint public createdAt;
    
    // Constructor with parameters
    constructor(string memory _initialName) {
        name = _initialName;
        owner = msg.sender;
        createdAt = block.timestamp;
    }
    
    // Function to update name (only owner)
    function setName(string memory _newName) public {
        require(msg.sender == owner, "only owner can change name");
        name = _newName;
    }
    
    // Function to get contract info
    function getContractInfo() public view returns (string memory, address, uint) {
        return (name, owner, createdAt);
    }
    
    // Function to check if caller is owner
    function isOwner() public view returns (bool) {
        return msg.sender == owner;
    }
}
