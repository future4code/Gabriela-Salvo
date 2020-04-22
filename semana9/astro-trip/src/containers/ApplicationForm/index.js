import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';





const appForm = [
{ 
  name:"Gabi",
  age:28,
  applicationText:"Sou boa candidata etc",
  profession:"Jogadora de videogame",
  country:"Brasil",
  trip:"TripId",



}

]

/*{

**id**: o backend criará um, não é necessário enviar na criação

**name**: no mínimo 5 letras

**planet**: o usuário deve ver um dropdown com nomes de todos os planetas do Sistema Solar

**date**: deve ser uma data no futuro

**description**: no mínimo 30 letras

**durationInDays**: no mínimo 50

}
*/

class ApplicationForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
       form: {}
      };
    }

   handleFormSubmit = (event)=> {
     event.preventDefault()
     console.log (this.state.form)

     this.setState({form: {}})
   }

   hadleInputChange =(event)=>{
     const {name, value, age, applicationText} = event.target

     console.log(name, value)

     this.setState({
       form:{...this.state.form, [name]: value}
     })
   }

    render(){
      return( 

        <form onSubmit={this.handleFormSubmit}>
          <label>Nome</label>
          <input
          name="name"
          required
          type="text"
          pattern="[A-Za-z ]{5,}"
          onChange={this.hadleInputChange}
          value={this.state.form.name || ""}
          >
          </input>

          <label>Idade</label>
          <input
          name="age"
          type="number"
          min={18}
          required
          value={this.state.form.age || ""}
          onChange={this.hadleInputChange}
          >
          </input>

          <label>Por que eu sou um bom candidato?</label>
          <input
          type="text"
          name="applicationText"
          min={30}
          required
          value={this.state.form.applicationText || ""}
          onChange={this.hadleInputChange}
          >
          </input>
          <label>Profissão:</label>
          <input
          type="text"
          name="profession"
          min={10}
          required
          value={this.state.form.profession || ""}
          onChange={this.hadleInputChange}
          
          ></input>

          {/* <label>País</label>  PRECISO FAZER, nao consegui
          usar a biblioteca CountryDropDown*/}
          
          
          <button type="submit">Enviar dados</button>




        </form>
      
      )
    }
}

export default ApplicationForm 