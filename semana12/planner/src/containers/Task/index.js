import React, { Component } from "react"
import { connect } from  "react-redux"
import { bindActionCreators } from "redux"
import * as taskActions from "../../actions/tasks"




class Task extends Component{
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
                <form>
                    <input
                    name="inputTask"
                    type="text"
                    required
                    //fazer onchange
                    title="digite sua tarefa"
                    value={this.inputTaskValue}  
                    />    

                    <select
                  
                   
                    >
                        {daysWeek.map((days)=>{
                            return (
                                <option key={days}
                                value={days}
                                />
                                
                            )
                        })}
                         
                        
                    </select>            
                </form>

            </div>
        )
    }
}
    const mapDispatchToProps = dispatch => 
    bindActionCreators(taskActions, dispatch)

    const mapStateToProps = state => ({
        tasks: state.task
    })
    

export default connect(mapStateToProps, mapDispatchToProps) (Task)