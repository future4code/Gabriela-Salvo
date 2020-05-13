import React from 'react';
import axios from 'axios'
import api from './api'


class App extends React.Component{

  state ={
    series:[],
  }
  
  async  componentDidMount(){
    const resposta = await api.get('');
 

    this.setState({series:resposta.data})
  

    
    
  }
  
  render(){
        
    const{series}=this.state

    return(
      <div>
        <h1>Lista de series</h1>
       
        {series.map(serie => (
          <li id={serie}>
            <h2>Titulo:
            {serie.show.name}

            </h2>
          </li>
        ))}
      </div>
    )
  }}

  
export default App;
