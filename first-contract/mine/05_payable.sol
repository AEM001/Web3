//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Payable {
    uint public balance;
    uint public count;
    
    // Payable function - can receive Ether
    function pay() public payable {
        balance += msg.value;
        count++;
    }
    
    // Payable fallback function - called when function doesn't exist
    fallback() external payable {
        count++;
    }
    
    // Payable receive function - called when Ether sent with no data
    receive() external payable {
        count++;
    }
    
    // Function to check contract balance
    function checkBalance() public view returns (uint) {
        return address(this).balance;
    }
    
    // Function to transfer Ether to another address
    function transfer(address payable _to, uint _amount) public payable {
        require(address(this).balance >= _amount, "insufficient contract balance");
        (bool sent,) = _to.call{value: _amount}("");
        require(sent, "Failed to send Ether");
    }
    
    // Function to withdraw all Ether (only owner)
    function withdrawAll() public {
        payable(msg.sender).transfer(address(this).balance);
    }
}
