import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { CountryDropdown } from 'react-country-region-selector';


class CreateTripPage extends Component {
    constructor(props) {
      super(props);
      this.state = {


      };
    }

    handleFormSubmit =(event)=> {
      event.preventDefault(this.state.CreateTripPage);
      this.setState({CreateTripPage:{}})

    }
    handleInputChange =event=> {
      this.setState({
        CreateTripPage: {CreateTripPage:{}}
      })
  }
    render(){
      return( 
        <form onSubmit ={this.handleFormSubmit}> 
          <label>Nome da trip:</label>

          <input
          text="text"
          pattern="[A-Za-z çãéê ]{5, } "
          onChange ={this.handleInputChange}
          value={this.state.CreateTripPage}
          >
          </input>

          <select name="planet" required
          onChange={this.handleInputChange}
          value={this.state.CreateTripPage}>
            <option>Mercúrio</option> 
            <option>Vênus</option>
            <option>Terra</option>
            <option>Plutão</option>
            <option>Marte</option>
            <option>Netuno</option>
            <option>Júpiter</option>
            <option>Urano</option>

          </select>
          <label>
            Data:
          </label>
          <input
          min={()=>Date.now}  //sinceramente foi um chute isso aqui. Quem acredita sempre alcança 
          type="date"
          required
          title={"Data da sua viagem (precisa ser no futuro)"}
          onChange={this.handleInputChange}
          value={this.state.CreateTripPage}
          >
          </input>
          <label>Descrição da viagem</label>
          <input
          type="text"
          pattern="{30}"
          onChange={this.handleInputChange}
          >
          
          
          </input>
          <button type="submit">Botao</button>
        </form>
      
     
      
      )
    }
}

export default CreateTripPage