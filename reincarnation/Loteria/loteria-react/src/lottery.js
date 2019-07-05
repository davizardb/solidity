import Web3 from 'web3'

const ethereum = window.ethereum
const web3 = new Web3(ethereum)


const address = '0xBECa590584CcC7e64f81B828C9Ba0DaC436AaD4B'

const abi = 
    [{
        "constant":true,
        "inputs":[],
        "name":"manager",
        "outputs":[{"name":"","type":"address"}],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },{
        "constant":false,"inputs":[],
        "name":"pickWinner","outputs":[],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    },{
        "constant":true,
        "inputs":[],
        "name":"getPlayers",
        "outputs":[{"name":"","type":"address[]"}],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },{
        "constant":false,
        "inputs":[],
        "name":"enter",
        "outputs":[],
        "payable":true,
        "stateMutability":"payable",
        "type":"function"
    },{
        "constant":true,"inputs":[{"name":"","type":"uint256"}],
        "name":"players",
        "outputs":[{"name":"","type":"address"}],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },{
        "inputs":[],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"constructor"
    }];

export default new web3.eth.Contract(abi, address);    