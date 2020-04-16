import React from 'react'
import { connect } from 'react-redux'
import { addTask } from "../actions/todos"


class FormTask extends React.Component {
    constructor(props) {
        super(props)

        this.state ={

            inputText: ""
        }
    }

    onChangeInput = (event) =>{
        this.setState({inputText: event.target.value })
    }

    onClickAdd =() => {
        console.log("clicou")
        this.props.addTask(this.state.inputText)
    }
    render (){

        return (
            <div>
            <form>
                <input value={this.state.inputText} onChange={this.onChangeInput} placeholder="o que tem que ser feito?"/>
                <button type ="button" onClick={this.onClickAdd}>Adicionar</button>
            </form>
            </div>
         )
    
      
    }

   
}

const mapStateToProps =(state)=> {
  return {}
}

const mapDispatchToProps = dispatch => {
    return {
      addTask: text => dispatch(addTask(text))
      }

    };
  
  



export default connect(mapStateToProps, mapDispatchToProps)(FormTask) //sempre que precisar interagir com ele precisamos usar o connect