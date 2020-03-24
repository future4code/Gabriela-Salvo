import React from 'react'
import './ExercicioUm.css'




class ExercicioUm extends React.Component {
    constructor (props){
        super(props)


        this.state = {
            // Array inicializado da mesma forma que no Exemplo 5
             Nome: " ",
             Idade: " ",
             Email: " ",
             Escolaridade:" "

    }
}



    onChangeNome =(event)=> {
        this.setState ({Nome: event.target.value})
       


    }
    onChangeIdade =(event)=> {
        this.setState ({Idade: event.target.value})
       

    }
    onChangeEmail =(event)=> {
        this.setState ({Email: event.target.value})
       

    }
    onChangeEscolaridade =(event)=> {
        this.setState ({Escolaridade: event.target.value})
        

    }


    aoClicar =()=>{

    }

    render(){
        return (

            <div className="div-mae">
                <h1>Informações Pessoais</h1>

                
                <label for="nome ">Qual o seu nome?</label>
                <input type="nome" onChange={this.onChangeNome} value={this.state.Nome}>
                </input>

                <label for="Idade">Qual a sua idade?</label>
                <input name="idade" onChange={this.onChangeIdade} value={this.state.Idade}></input>

                <label for="Email">Insira um email válido: </label>
                <input name="Email"  onChange={this.onChangeEmail} value={this.state.Email}></input>


                <label for="Escolaridade">Qual sua escolaridade?</label>
                <select name="Escolaridade" onChange={this.onChangeEscolaridade} value={this.state.Escolaridade}>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>

                </select>

                <button type="submit"
                onClick={()=>{this.aoClicar()}} >Enviar</button>


            </div>
        )
    }
    
}


export default ExercicioUm