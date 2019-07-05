const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'sphere garden radar search air seed casino actress weapon absorb virtual subway',
    'https://rinkeby.infura.io/v3/cbb8ccb9428d42a0a47897be6bb31b29'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x' + bytecode })
        .send({ from: accounts[0] })

    console.log(interface);
    console.log('Contract deployed to', result.options.address);
};

deploy();