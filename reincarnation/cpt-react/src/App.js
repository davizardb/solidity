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
    message: '',
    value: '',
    balance: '',
    liberada: ''
  }
    
  async componentDidMount(){ 
    await ethereum.enable()
    const supply = await davocoin.methods.totalSupply().call()
    const decimals = await davocoin.methods.decimals().call()
    const simbol = await davocoin.methods.symbol().call()
    const version = await davocoin.methods.standard().call()
    const name = await davocoin.methods.name().call()
    const accounts = await web3.eth.getAccounts()
    
    console.log(accounts)

          // await davocoin.methods.transfer('0x332672feC44bBF853986886748bf96436ce3cC84', 100).send({
          //   from:'0xf3CAD43c77EdD04A1a18F6d6769EF8723405dD7f'
          // })

    // const balance = await davocoin.methods.balanceOf('0x332672feC44bBF853986886748bf96436ce3cC84').call()

    await this.setState({name, accounts, version, simbol, decimals, supply})

}   
  // onClick = async ()=>{

  // }

    // onInputChange = async (value) =>{
    //   this.setState({message: 'Esperando a comunicação com o contrato'})

    //   await this.setState({value})

    //   const balance = await davocoin.methods.balanceOf(this.state.value).call()
    //   await console.log(balance) 

    //   this.setState({message: 'Sucesso!'})  
    // }

  onSubmitBalance = async (event) =>{
    event.preventDefault()

    this.setState({message: 'Esperando a comunicação com o contrato...'})
    
    const balance = await davocoin.methods.balanceOf(
        this.state.value
      ).call()
    this.setState({balance: balance})

    this.setState({message: 'Sucesso!'})
  }

  onSubmitTransfer = async (event) =>{
    event.preventDefault()

    this.setState({message: 'Esperando a comunicação com o contrato...'})

    
    await davocoin.methods.transfer(
          this.state.tvalue,
          parseInt(this.state.valor)
      ).send({
          from:'0xf3CAD43c77EdD04A1a18F6d6769EF8723405dD7f'
      })

    this.setState({message: 'Sucesso!'})
  }

  onSubmitLiberar = async (event) =>{
    event.preventDefault()

    this.setState({message: 'Esperando a comunicação com o contrato...'})
    
    await davocoin.methods.approve(
        this.state.lvalue, 
        parseInt(this.state.lvalor)
    ).send({
        from:'0xf3CAD43c77EdD04A1a18F6d6769EF8723405dD7f'
    })

    this.setState({message: 'Sucesso!'})
  }

  onSubmitQntLiberada = async (event) =>{
    event.preventDefault()

    this.setState({message: 'Esperando a comunicação com o contrato...'})
    
    const liberada = await davocoin.methods.allowance(
                      this.state.admvalue, 
                      this.state.donvalor
    ).call()
    this.setState({liberada: liberada})

    this.setState({message: 'Sucesso!'})
  }

  onSubmitNewAdmin = async (event) =>{
    event.preventDefault()

    this.setState({message: 'Esperando a comunicação com o contrato...'})
    
    await davocoin.methods.transferAdmin(
          this.state.newadmin
      ).send({
          from:'0xf3CAD43c77EdD04A1a18F6d6769EF8723405dD7f'
      })

    this.setState({message: 'Sucesso!'})
  }

  onSubmitTransferFrom = async (event) =>{
    event.preventDefault()

    this.setState({message: 'Esperando a comunicação com o contrato...'})
    
    await davocoin.methods.transferFrom(
        this.state.fromvalue,
        this.state.tovalue, 
        parseInt(this.state.tvalue)
    ).send({
      from: '0xf3CAD43c77EdD04A1a18F6d6769EF8723405dD7f'
    })

    this.setState({message: 'Sucesso!'})
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
        <h5>{this.state.message}</h5>    
         
        <hr/>
      
        <div>
            <form onSubmit={this.onSubmitTransfer}>
          <h4> Doar DavoCoins : </h4>
          <div>
            <label>Endereço da carteira: </label>
              <input 
                placeholder='0x0000...'
                tvalue = {this.state.value}
                onChange = {event => this.setState({tvalue: event.target.value})}
                />
            <label>Quantidade : </label>
              <input
                placeholder='0'
                valor ={this.state.value}
                onChange = {event => this.setState({valor: event.target.value})}/>
            <button>Executar</button>
          </div>
            </form>
        </div>  
  
      <div>
        <form onSubmit={this.onSubmitBalance} >
          <h4> Saldo de DavoCoins : {this.state.balance}</h4>
          <div>
            <label>Endereço da carteira: </label>
            <input 
              placeholder='0x0000...'
              value = {this.state.value}
              onChange={event=> this.setState({value: event.target.value})}
              />
            <button>Executar</button>
          </div>
        </form>
      </div>
      <div>
        <form onSubmit={this.onSubmitLiberar}>
        <h4> Liberar Transferência : </h4>
        <div>
          <label>Endereço a ser liberado : </label>
          <input 
              placeholder='0x0000...'
              lvalue = {this.state.value}
              onChange={event=>this.setState({lvalue: event.target.value})}/>
            <div>
              <label> Quantia: </label>
              <input 
                  placeholder='0'
                  lvalor = {this.state.value}
                  onChange = {event=>this.setState({lvalor: event.target.value})}/>
               <button>Executar</button>
            </div>
        </div>
        </form>
      </div>
      <div>
        <form onSubmit={this.onSubmitQntLiberada}>  
        <h4> Quantia liberada para transferência : {this.state.liberada}</h4>
        <div>
          <label>Endereço do Administrador: </label>
          <input 
              placeholder='0x0000...'
              admvalue = {this.state.value}
              onChange={event=>this.setState({admvalue: event.target.value})}/>
        <div>
              <label> Endereço liberado: </label>
          <input 
              placeholder='0x0000...'
              donvalor = {this.state.value}
              onChange={event=>this.setState({donvalor: event.target.value})}/>
               <button>Executar</button>
        </div>
        </div>
        </form>
      </div>
      <div>
        <form onSubmit={this.onSubmitTransferFrom}>
        <h4> Transferir DavoCoins : </h4>
        <div>
          <label>Endereço do doador : </label>
          <input 
              placeholder='0x0000...'
              fromvalue = {this.state.value}
              onChange={event=>this.setState({fromvalue: event.target.value})}/>
          <label>Endereço do receptor : </label>
          <input 
              placeholder='0x0000...'
              tovalue = {this.state.value}
              onChange={event=>this.setState({tovalue: event.target.value})}/>
        </div>
          <div>
              <label> Quantia: </label>
              <input 
                  placeholder='0'
                  tvalue = {this.state.value}
                  onChange = {event=>this.setState({tvalue: event.target.value})}/>
               <button>Executar</button>
          </div>
          </form>
      </div>
      <div>
        <form onSubmit={this.onSubmitNewAdmin}>
        <h4> Transferir Admin : </h4>
        <div>
          <label>Endereço da carteira: </label>
          <input 
              placeholder='0x0000...'
              newadmin = {this.state.value}
              onChange={event=>this.setState({newadmin: event.target.value})}/>
          <button>Executar</button>
        </div>
        </form>
      </div>
      </div>
  )
}
}