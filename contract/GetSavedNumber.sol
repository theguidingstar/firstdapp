// SPDX-License-Identifier: MIT
 pragma solidity ^0.8.1;

 contract GetSavedNumber {
    string number;

    function setNumber(string memory _number) public {
        number = _number;
    }

    //create a function the reads the number from the smart contract
    function getNumber() public view returns(string memory){
        return number;
    }
 }