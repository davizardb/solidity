import React, { Component } from 'react';
import './App.css';
import {ethereum, web3} from './web3'
import lottery from './lottery'

export default class App extends Component{  
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: ''    
  }   
  
  async componentDidMount(){ 
    await ethereum.enable()
    const manager = await lottery.methods.manager().call() 
    const players = await lottery.methods.getPlayers().call()  
    const balance = await web3.eth.getBalance(lottery.options.address)
  
    await this.setState({ manager, players, balance })
  }

  onCLick = async ()=>{
    const accounts = await web3.eth.getAccounts()

    this.setState({message: 'Esperando a transação ocorrer...'})

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    })

    this.setState({ message: 'Um vencedor foi escolhido!!' })
  }
  
  onSubmit = async (event) => {
    event.preventDefault()

    const accounts = await web3.eth.getAccounts()

    this.setState({message: 'Esperando a transação ocorrer...'})

    await lottery.methods.enter().send({
      from: accounts[0], 
      value: web3.utils.toWei(this.state.value, 'ether')
    })

    this.setState({message: 'Você entrou na loteria!!'})
  }

  render() {    
    return (
      <div>
        <h2>CONTRATO DA LOTERIA</h2>
          <p>Esse contrato é gerenciado pela chave: {this.state.manager}</p>
          <p>Existem {this.state.players.length} pessoas inclusas no sorteio!!</p>  
          <p>Boa sorte!! O vencedor ganhará {web3.utils.fromWei(this.state.balance, 'ether')} ethers!</p> 

        <hr/>
          <form onSubmit={this.onSubmit}>
            <h4>Quer tentar a sorte??</h4>
            <div>
              <label>Quantidade de ether para apostar -->></label>
              <input
                value={this.state.value}
                onChange={event=> this.setState({value: event.target.value})}/>
            </div>
            <button>Enter</button>
          </form>
          <hr/>
            <h4>Pronto para escolher um vencedor?</h4>
            <button onClick={this.onCLick}>ESCOLHA UM VENCEDOR!!</button>
          <hr/>

          <h1>{this.state.message}</h1>
       
      {/* <p>Check out the console....</p> */}
      {/* <p>Your account: {this.state.account}</p> */}
    </div>
  )}
}
//   window.addEventListener('load', async () => {
//     // Modern dapp browsers...
//     if (window.ethereum) {
//         window.web3 = new Web3(ethereum);
//         try {
//             // Request account access if needed
//             await ethereum.enable();
//             // Acccounts now exposed
//             web3.eth.getAccounts().then(console.log)
//         } catch (error) {
//             // User denied account access...
//         }
// } else if (window.web3) {
//         window.web3 = new Web3(web3.currentProvider);
//         // Acccounts always exposed
//         web3.eth.sendTransaction({/* ... */});
//     }
//     // Non-dapp browsers...
//     else {
//         console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
//     }
//   });