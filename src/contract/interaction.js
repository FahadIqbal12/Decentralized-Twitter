const { ethers } = require("ethers");
export const contractAddress = '0xa36fa721292d13d0d79a3a340343d0310307eb0b';
export const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/cd2a5d70f65a40338c50bc864f914b45`);
export const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tweetText",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tweetImg",
				"type": "string"
			}
		],
		"name": "addTweet",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "tweeter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "tweetText",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "tweetImg",
				"type": "string"
			}
		],
		"name": "tweetCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getTweet",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]