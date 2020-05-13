import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tarefas: [],
      inputValue: '',
      filter: ''
    }
  }

  componentDidUpdate() {
    const inputDeTarefas = localStorage.getItem( "local-tarefas")
    if(inputDeTarefas !== null){
      const 
    }

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState({input:event.target.value})

  }

  criaTarefa = () => {
    const novatarefa = {
      id:Date.now
    }

  }

  selectTarefa = (id) => {
    const tarefasFeitas =this.state.tarefas.map(tarefa=> {
      if(tarefa.id === id) {
        
      }
      return tarefa
    })

  }

  onChangeFilter = (event) => {
    this.setState({
      filter:event.target.value
    })

  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
