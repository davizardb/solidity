import Web3 from 'web3'

const ethereum = window.ethereum
const web3 = new Web3(ethereum)

const address = '0x22f5abd356b8c744ebc811f88c3e2e29d3603887'

const abi = 
    [{
        "constant":true,
        "inputs":[],
        "name":"name",
        "outputs":[{"name":"","type":"string"}],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },{
        "constant":false,
        "inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],
        "name":"approve",
        "outputs":[{"name":"success","type":"bool"}],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    },{
        "constant":true,
        "inputs":[],
        "name":"totalSupply",
        "outputs":[{"name":"","type":"uint256"}],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },{
        "constant":false,
        "inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],
        "name":"transferFrom",
        "outputs":[{"name":"success","type":"bool"}],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    },{
        "constant":true,
        "inputs":[],
        "name":"decimals",
        "outputs":[{"name":"","type":"uint32"}],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },{
        "constant":true,
        "inputs":[],
        "name":"standard",
        "outputs":[{"name":"","type":"string"}],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },{
        "constant":true,
        "inputs":[{"name":"","type":"address"}],
        "name":"balanceOf",
        "outputs":[{"name":"","type":"uint256"}],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },{
        "constant":false,
        "inputs":[{"name":"newAdmin","type":"address"}],
        "name":"transferAdmin",
        "outputs":[],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    },{
        "constant":true,
        "inputs":[],
        "name":"symbol",
        "outputs":[{"name":"","type":"string"}],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },{
        "constant":false,
        "inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],
        "name":"transfer",
        "outputs":[{"name":"success","type":"bool"}],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"function"
    },{
        "constant":true,
        "inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],
        "name":"allowance",
        "outputs":[{"name":"","type":"uint256"}],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },{
        "inputs":[],
        "payable":false,
        "stateMutability":"nonpayable",
        "type":"constructor"
    },{
        "anonymous":false,
        "inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],
        "name":"Transfer",
        "type":"event"
    },{
        "anonymous":false,
        "inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],
        "name":"Approval",
        "type":"event"
    }]

    export default new web3.eth.Contract(abi, address);   
    