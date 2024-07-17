// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaymentContract {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

     function pay(address payable recipient) public payable {
         require(msg.value > 0, "Send some Ether");
         recipient.transfer(msg.value);
     }
}
