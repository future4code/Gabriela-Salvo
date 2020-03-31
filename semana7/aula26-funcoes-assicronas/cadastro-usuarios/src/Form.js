import React from ‘react’
import axios from ‘axios’
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputName: “”,
            inputEmail: “”
        }
    }
onChangeNome=(event)=>{}
onChangeEmail=(event)=>{}
createUser = () =>{
const body = {
    name: “Banana4”,
    email: “bananadasorte3@gmail.com”
}
axios
.post(
    “https://us-central1-future-apis.cloudfunctions.net/api/users”,
    body,
    {
        headers: {
            “api-token”: “ricardo-hamilton”
        }
    }
).then(response=>{
        alert(“Dados Salvos!“)
    })
    .catch(error=>{
        alert(“Algo não deu certo”)
    })
}
render(){
    return(
        <div>
            {this.props.children}
            <div>
                <label>Nome: </label>
                <input></input><br/>
                <label>E-mail: </label>
                <input></input><br/><br/>
                <button onClick={this.createUser}>Salvar</button>
            </div>
        </div>
    )
}
}
export default Form;