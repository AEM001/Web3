//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;
contract MyContract{
    function add(uint a,uint b)external pure returns(uint){
        return a+b;
    }
    function subtract(uint a, uint b) external pure returns (uint) {
        require(a >= b, "Subtraction underflow");
        return a - b;
    }

    function multiply(uint a, uint b) external pure returns (uint) {
        return a * b;
    }

    function divide(uint a, uint b) external pure returns (uint) {
        require(b > 0, "Division by zero");
        return a / b;
    }
    function bitwiseAnd(uint a, uint b) external pure returns (uint) {
        return a & b;
    }

    function bitwiseOr(uint a, uint b) external pure returns (uint) {
        return a | b;
    }

    function bitwiseXor(uint a, uint b) external pure returns (uint) {
        return a ^ b;
    }

    function bitwiseNot(uint a) external pure returns (uint) {
        return ~a;
    }

    function leftShift(uint a, uint b) external pure returns (uint) {
        return a << b;
    }

    function rightShift(uint a, uint b) external pure returns (uint) {
        return a >> b;
    }

    function modulo(uint a, uint b) external pure returns (uint) {
        require(b > 0, "Modulo by zero");
        return a % b;
    }

    function power(uint base, uint exponent) external pure returns (uint) {
        return base ** exponent;
    }

    function addressToUint160(address addr) external pure returns (uint160) {
        return uint160(addr);
    }
    
}