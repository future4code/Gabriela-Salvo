import React from 'react';
import axios from 'axios'
import Api from './Api'


class App extends React.Component{
  state ={
    filmes:[],
  }

  async  componentDidMount(){
    const reposta = await.Api.get
  }

  render(){
 return(
   <div>
     <h1>Lista de filmes</h1>
   </div>
 )

  
export default App;
