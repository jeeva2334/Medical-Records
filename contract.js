// import web3 from'./node_modules/web3/dist'

let Web3 = require('web3');

let web3 = new Web3( new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

let contract = new web3.eth.Contract([
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Patientid",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_Name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_Gender",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_height",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_weight",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_phoneno",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_emailid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			}
		],
		"name": "setPatientinfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Patientid",
				"type": "uint256"
			}
		],
		"name": "GetPatientinfo",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
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
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
],"0x05fe34b903EE7FB9993cE67e577cDE75660fC7F1");

contract.methords.setPatientinfo(01,'Sanju',19,'m',165,65,9087654321,'errr','dg@g.c','safe').send({from:"0x7cdd19BF15a6155Cc50e2Bbe4D69c43fEa67F77a"});