// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Greeting {
  string public message;
  address public owner;
  uint public changeCount;

  event MessageChanged(string newMessage, address changedBy);

  constructor(string memory initialMessage) {
    message = initialMessage;
    owner = msg.sender;
    changeCount = 0;
  }

  function setMessage(string memory newMessage) public {
    message = newMessage;
    changeCount++;
    emit MessageChanged(newMessage, msg.sender);
  }

  function getMessage() public view returns (string memory) {
    return message;
  }

  function isOwner() public view returns (bool) {
    return msg.sender == owner;
  }
}
