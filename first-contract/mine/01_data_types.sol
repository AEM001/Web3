//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract DataTypes {
    // Basic data types
    string public myString = "My string";
    bool public boolean1 = true;
    uint public myUnit = 1;
    int public myInt = 1;
    address public myAddress = 0x5FbDB2315678afecb367f032d93F642f64180aa3;
    
    // Private variable (not accessible from outside)
    string private name = "dussy";
    
    // Function to demonstrate reading/writing
    function setString(string memory _newString) public {
        myString = _newString;
    }
    
    function setBool(bool _newBool) public {
        boolean1 = _newBool;
    }
    
    function getPrivateName() public view returns (string memory) {
        return name;
    }
}
