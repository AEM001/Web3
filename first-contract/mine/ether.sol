//SPDX-License-Identifier:Unlicense
pragma solidity ^0.8.28;

contract MyContract{
    uint public count=0;
    fallback() external payable{
        count++;
    }

    function checkBalance() public view returns (uint){
        return address(this).balance;
    }
    function transfer(address payable _to) public payable{
        msg.sender;
        (bool sent,)=_to.call{value:msg.value}("");
        require(sent,"Failed!");
    }
}