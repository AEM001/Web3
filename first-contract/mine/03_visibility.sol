//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Visibility {
    // Public - accessible from anywhere, creates getter
    string public name1 = "Name 1";
    
    // Private - only accessible within this contract
    string private name2 = "Name 2";
    
    // Public - accessible from anywhere, creates getter
    string public name3 = "Name 3";
    
    // Internal - accessible within this contract and inherited contracts
    string internal name4 = "Name 4";
    
    // Function to demonstrate access
    function getPublicNames() public view returns (string memory, string memory) {
        return (name1, name3); // Can access public variables
    }
    
    function getInternalName() public view returns (string memory) {
        return name4; // Can access internal variables
    }
    
    function getPrivateName() public view returns (string memory) {
        return name2; // Can access private variables
    }
}
