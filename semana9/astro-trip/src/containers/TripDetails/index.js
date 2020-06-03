import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";




class TripDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
    }
    render(){
      return <div> Oi, eu sou a TripDetails!</div>
    }
}

export default TripDetails 