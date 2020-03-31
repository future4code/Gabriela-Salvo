import React from 'react'
import axios from 'axios'
class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    componentDidUpdate(){


    }

    getDoServidor =()=>{
        axios.get("https://us-central1-future-apis.cloudfunctions.net/api/users", {headers: {
            "api-token": "gabriela-hamilton"

        }
    }
        ).then((resposta)=>{
            this.setState({usuarios: resposta.data.result})
            
        })
        .catch (error=>{
            alert("Ih, deu errado!")
        })

        MostraDados=()=>{
            const mapeamento = this.state.usuarios.map((elemento)=>{
                return(<div key={elemento.id}><p>{elemento.name}</p>></div>)
            })
            return mapeamento;
        }
    }
render(){
    return(
        <div>
            {this.props.children}
            Estou na lista
        </div>
    )
}
}
export default User;