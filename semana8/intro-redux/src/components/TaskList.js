import React from 'react'
import {connect} from "react-redux"



class TaskList extends React.Component {

    render() {
        console.log(this.props.tasklist)
        return (
            <div>
                <ul>
        {this.props.tasklist.map(task => <li key={task.id}>{task.text}</li>)}
                </ul>
            </div>

        )


    }
}



const MapStateToProps = (state) => { // recebe o state GLobal do redux
    //mapeia o stado do redux para as props que do componente que estamos fazendo
    // retorna um objeto que sera injetado como props dentro do componente 
    
    return {
        tasklist: state.todos.todosList


    }



    
}

const mapDispatchToProps = () => {
    return{}


}
export default connect(MapStateToProps, mapDispatchToProps)(TaskList)  //podemos passar dois parametros MapStateToProps é uma funão//usando o conect para conectar os componentes para o redux    
