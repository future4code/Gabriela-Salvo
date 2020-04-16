import React from 'react'
import {connect} from "react-redux"




class TaskList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.taskList
            .filter(task => {
              const filter = this.props.filter;
              if (filter === "pendentes") {
                return task.complete === false;
              }
              if (filter === "completas") {
                return task.complete === true;
              }
              return true;
            })
            .map(task => (
              <li key={task.id} onClick={() => this.props.toggleTask(task.id)}>
                {task.text} - Completa: {String(task.complete)}
                <button onClick={() => this.props.deleteTask(task.id)}>
                  Deletar
                </button>
              </li>
            ))}
        </ul>
      );
    }
  }



const MapStateToProps = (state) => { // recebe o state GLobal do redux
    //mapeia o stado do redux para as props que do componente que estamos fazendo
    // retorna um objeto que sera injetado como props dentro do componente 
    
    return {
        tasklist: state.todos.todosList


    }



    
}

const mapDispatchToProps = (dispatch) => {
    return{

        toggleTask: (id) => dispatch(toggleTask(id))
    }


}
export default connect(MapStateToProps, mapDispatchToProps)(TaskList)  //podemos passar dois parametros MapStateToProps é uma funão//usando o conect para conectar os componentes para o redux    
