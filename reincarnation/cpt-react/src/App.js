import React, { Component } from 'react';
import {ethereum, web3} from './web3'
import davocoin from './davocoin'

export default class App extends Component{ 

  state = {
    name: '',
    accounts: [],
    version: '',
    simbol: '',
    decimals: '',
    balance: ''
  }
    
  async componentDidMount(){ 
    await ethereum.enable()
    const supply = await davocoin.methods.totalSupply().call()
    const decimals = await davocoin.methods.decimals().call()
    const simbol = await davocoin.methods.symbol().call()
    const version = await davocoin.methods.standard().call()
    const name = await davocoin.methods.name().call()
    const accounts = await web3.eth.getAccounts()
    const balance = await davocoin.methods.balanceOf(davocoin.options.address).call()
    console.log(accounts)

    await this.setState({name, accounts, version, simbol, decimals, supply, balance})

}   

 
  render() {    
    return (
      <div>
        <h1>Bem vindo a minha CriptoMoeda</h1>
        <p>Nome: {this.state.name}</p>
        <p>Versão: {this.state.version}</p>
        <p>Simbolo: {this.state.simbol}</p>
        <p>Casas Decimais: {this.state.decimals}</p>
        <p>Total de Tokens: {this.state.supply}</p>        
        <p> Balance : {this.state.balance}</p> 
        <hr/>
          
      </div>

  )
}
}