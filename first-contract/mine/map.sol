//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract MyContract{
    mapping(uint=>string)public myMapping;
    function get(uint _id)public view returns (string memory){
        return myMapping[_id];
    }
    function set(uint _id,string memory _value)public{
        myMapping[_id]=_value;
    }
    function remove(uint _id)public{
        delete myMapping[_id];
    }
}