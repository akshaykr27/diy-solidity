// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

contract HelloWorld {
  
  function greeting(string memory _name) public pure returns(string memory) {
      return _name;
  }
}