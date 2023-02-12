// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
/// @title ERC20 Contract
import "../utils/KYC.sol";

contract DataTypes is KYC {

   address burnAddress = 0x0000000000000000000000000000000000000000;
   // Keep track of account insertions
   address[] public accountIndex;
//    address[] public sponsorIndex;
//    address[] public agentIndex;
   uint public lastStakingUpdateTime = block.timestamp;

   struct accountRec {
       addressRec[] sponsors;
       addressRec[] agents;
       address parentAccount;
       rateRec[] rateEntries;
       uint index;
       uint insertionTime;
       bool inserted;
       KYC kyc ;
       bool verified;
    }
    struct rateRec {
       uint[] rate;
       uint insertionTime;
       uint lastUpdateTime;
       uint256 quantity;
    }
    struct addressRec {
       address[] child;
       address addr;
       rateRec next;
    }

    mapping(address => accountRec)  accounts;
}
