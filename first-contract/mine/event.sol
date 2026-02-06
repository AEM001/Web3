//SPDX-License-Identifier:Unlicense
pragma solidity ^0.8.28;
contract MyContract{
	string public message ="Hello Bitcoin";
	
	event MessageUpdated(
	    //do a filter
		address indexed _user,
	    string _message
	);
	
	function updateMessage(string memory _message)public{
		message=_message;
		emit MessageUpdated(msg.sender,_message);
	}
}
