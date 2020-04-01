import React from 'react';
import axios from 'axios'
import User from './User'


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputName: "",
            inputEmail: ""
        }
    }
onChangeNome=(event)=>{this.setState({inputName: event.target.value})};
onChangeEmail=(event)=>{this.setState({inputEmail: event.target.value})}
createUser = () =>{
const body = {
    name: this.state.inputName,
    email: this.state.inputEmail
}
axios
.post(
    'https://us-central1-future-apis.cloudfunctions.net/api/users',
    body,
    {
        headers: {
            "api-token": "gabriela-hamilton"
        }
    }
).then(response=>{
        alert("Dados Salvos!")
    })
    .catch(error=>{
        alert("Algo nao deu certo")
    })
}
render(){
    return(
        <div>
            {this.props.children}
            <div>
                <label>Nome: </label>
                <input onChange={this.onChangeNome}></input><br/>
                <label>E-mail: </label>
                <input onChange={this.onChangeEmail}></input><br/><br/>
                <button onClick={this.createUser}>Salvar</button>
            </div>
        </div>
    )
}
}
export default Form;