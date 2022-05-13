---
sidebar_position: 1
---

# Introduction

A DTO is a telecom operator on the blockchain that allows you to get your own number or get a pool of numbers with a readable prefix.

Top-level prefixes such as "dto" belong to a smart contract called Registrar, which controls the creation of number ranges and obtaining a number in the right range with the right prefix, such as "eth". 

The number allows you to communicate and use it as a vcard, and will be a full alias wallet address in any supported network.

To get your unique number, you just need to specify the set of digits you like and make a payment in the amount set by the registrar of the prefix, for example 0.1 ETH for the prefix "dto" per year. The number can be any length from 1 to 10 digits.

Number is an NFT token, the ERC-721 standard on the Ethereum blockchain. Your NFT ID is your number with the prefix ID used in the Registrar smart contract.

The PublicStorage contract is used to store the data belonging to the number. It stores information about all specified wallets in other networks. We can also specify our real phone number, avatar and social networks.
