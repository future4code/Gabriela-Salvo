import React from 'react'
import './ExercicioUm.css'




class ExercicioUm extends React.Component {
    constructor (props){
        super(props)
    }

    render(){
        return (

            <div className="div-mae">

                
                <label for="nome ">Qual o seu nome?</label>
                <input type="nome" value={this.props.inputNome}>
                </input>

                <label for="Idade">Qual a sua idade?</label>
                <input name="idade" value={this.props.inputIdade}></input>

                <label for="Email">Insira um email válido: </label>
                <input name="Email" value={this.props.inputEmail}></input>


                <label for="Escolaridade">Qual sua escoladirade?</label>
                <input name="Escolaridade" value={this.props.inputEscolaridade}></input>


            </div>
        )
    }
    
}

export default ExercicioUm