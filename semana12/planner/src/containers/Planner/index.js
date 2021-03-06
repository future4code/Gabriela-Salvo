import React, { Component } from "react"
import { connect } from  "react-redux"
import { bindActionCreators } from "redux"
import * as taskActions from "../../actions/tasks"




class Planner extends Component{
  
 
        state = {
            inputTasks:"",
            inputDay:""
        }

        componentDidMount() {
            this.props.getTasks()

        }

        onchangeTask=(event)=>{
            this.setState({inputTasks:event.target.value})
            console.log(this.state.inputTasks)
         
        }

        onChangeDay = (event)=> {
            this.setState({inputDay:event.target.value})


        }

        handleSubmit =(event)=> {
            event.preventDefault()
            this.props.createTask(this.state.inputTasks,this.state.inputDay)
            this.setState({inputTasks:""})
            


        }
        

    render () {
   
        
        const daysWeek = [
            "segunda",
            "terça",
            "quarta",
            "quinta",
            "sexta",
            "sábado",
            "domingo"
        ]
        
        return (
            <div>
            <h1>Dias da Semana</h1>
                <form
                  onSubmit={this.handleSubmit}
                
                >
                    <input
                  
                    onChange={this.onchangeTask}
                    type="text"
                    required
                    title="digite sua tarefa"
                    value={this.state.inputTasks}
                    />    

                    <select
                    onChange={this.onChangeDay}
                    value={this.state.inputDay}
                    >
                        {daysWeek.map((day)=>{
                            return (
                                <option key={day}
                                value={day}
                                >
                                    {day}
         
                                </option>
                            )
                        })}
                         
                    </select>   

                    <button
                    type="submit"
                    >Criar Task</button>

                </form>
               < div>
                    {daysWeek.map((dayWeek)=>{
                        return (
                            <div>
                                  <span key={dayWeek}>{dayWeek}  </span>
                                  {this.props.tasks.map((tarefa)=> {
                                        
                                        if(tarefa.day === dayWeek) {
                                            return(
                                                <div key={tarefa.id}> {tarefa.text}</div>
                                               
                                            )
                                        }
                                  
                                     }

                                  )}
                                  
                            </div>
                          
                            
                        )
                    })}
                        
                </div>

            </div>
        )
    }
}
    const mapDispatchToProps = dispatch => 
    bindActionCreators(taskActions, dispatch)

    const mapStateToProps = state => ({
        tasks: state.task
    })
    

export default connect(mapStateToProps, mapDispatchToProps)(Planner)