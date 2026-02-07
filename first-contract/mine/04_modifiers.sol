//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Modifiers {
    address public owner;
    uint public balance;
    
    // Constructor sets the owner
    constructor() {
        owner = msg.sender;
    }
    
    // Custom modifier - only allows owner to call function
    modifier onlyOwner {
        require(msg.sender == owner, "caller must be owner");
        _; // Placeholder for function body
    }
    
    // Function using modifier
    function withdraw(uint amount) public onlyOwner {
        require(balance >= amount, "insufficient balance");
        balance -= amount;
    }
    
    // Function without modifier (anyone can call)
    function deposit() public payable {
        balance += msg.value;
    }
    
    // Function to check if caller is owner
    function isOwner() public view returns (bool) {
        return msg.sender == owner;
    }
}
