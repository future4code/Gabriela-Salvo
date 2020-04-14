import React from "react";
import styled from 'styled-components'

import { render } from "@testing-library/react";



const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  
`;

const InputsContainer = styled.div`
/* display:grid; */
display:flex;
flex-direction:column;
width:600px;
height: 100px;
margin: 0 auto;
`

const Titulo = styled.h1`
color: #3B170B;
font-size: 60px;
font-weight:lighter;
text-align:center;
`

const DivButton = styled.div`
justify-content:space-evenly;
display:flex;

`

const ButtonInput = styled.button`

width: 100px;

`


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

      tarefas: [],
      inputValue: "",
      filter: ""
    }

  }


  render() {
    return (

      <div>
        <InputsContainer>
          <Titulo>4TASK</Titulo>
          <input type="text" />

          <DivButton>

            <ButtonInput>Marcas todas como Completas</ButtonInput>
            <ButtonInput> Todas</ButtonInput>
            < ButtonInput> Pendentes</ButtonInput>
            < ButtonInput> Completas</ButtonInput>
            
          </DivButton>

        </InputsContainer>


      </div>
    )
  }
}

export default App