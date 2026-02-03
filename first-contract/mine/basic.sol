//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract MyContract{
    string public myString="My string";//variables
    bool public boolean1=true;//type
    uint public myUnit=1;
    int public myInt=1;
    
    address public myAddress=0x5FbDB2315678afecb367f032d93F642f64180aa3;
    string name="example1";

    //functions 
    function setName(string memory _name)public{
        name=_name;
    }
    function getName()public view returns(string memory){
        return name;
    }
    function resetName()internal{
        name="example1";
    }
    //visibility
    string name1="Name 1";
    string private name2="Name 2";
    string public name3="Name 3";
    string internal name4="Name 4";

    uint public count;
    function increment() public{
        count++;
    }

    uint public balance;
    function add(uint a,uint b)public pure returns(uint){
        return a+b;
    }
    
    function pay() public payable{
        balance=msg.value;
    }
    //custom modifier
    address public owner;
    
    modifier onlyOwner{
        require(msg.sender==owner,'caller must be owner');
        _;
    }

    function setNameOwner(string memory _name) onlyOwner public{
        name=_name;
    }

    //constructor
    constructor(string memory _name){
        name=_name;
        owner = msg.sender;
    }
}