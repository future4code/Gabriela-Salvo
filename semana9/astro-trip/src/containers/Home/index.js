import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";




class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
    }

    render(){
      return <div> Oi, sou a Home!</div>
    }
}

export default Home