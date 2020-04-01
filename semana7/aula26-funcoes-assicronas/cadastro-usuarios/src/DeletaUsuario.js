import React from 'react'
import axios from 'axios'
    
    
    
    
    MostrarDados=()=>{
    const auxiliar=this.props.usuarios.map((elemento)=>{
        return (<CadaUsuario key={elemento.id}>
                    <span onClick={()=>this.mostraUsuario(elemento.id)}>{elemento.name}</span>
                    <span onClick={()=>this.deletaUsuario(elemento.id)}>X</span>
                </CadaUsuario> )
    })
    return auxiliar;
}

deletaUsuario=(id)=>{
    if (window.confirm('Tem certeza que deseja apagar esta mensagem?')) {
    axios
        .delete(
        `https://us-central1-future-apis.cloudfunctions.net/api/users/${id}`,
        {
            headers: {
            "api-token": "gabriela-salvo"
            }