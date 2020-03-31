import React from 'react';
import axios from 'axios';
import Form from '.Form';
import User from '.User';


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state ={
      qualTela: true
    }
  }


  muda = ()=> {
    this.ListeningStateChangedEvent({qualTela: !this.state.qualTela})
  }

  render (){
    return(

      <div className="App">
        {this.state.qualTela ?
        <Form><button onClick={this.mudaTela}>Ir pra lista</button></Form> :
        <User> <button onClick={this.mudaTela}>Pagina de registra</button></User>}

      </div>
        )
        } 
      }


export default App;
