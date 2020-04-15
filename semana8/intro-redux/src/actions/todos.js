// adiciona tarefas
const addTask = (text) => { //função de criar tarefa e retorna o objeto, recebe no parâmetro o que
    //irá mudar na ação, nesse caso cada tarefa que é um texto

  return  {
     type: "ADD_TASK", // string que descreve a ação (padrao em ingles e maiusculo)
    payload: {
       text: text   //objeto representa as infos necessarias para fazer a ação
    }
}
  }

//


const toggleTask = (id) => { //função de criar tarefa e retorna o objeto, recebe no parâmetro o que
    //irá mudar na ação, nesse caso cada tarefa que é um texto

  return  {
     type: "TOGGLE_TASK", // string que descreve a ação (padrao em ingles e maiusculo)
    payload: {
       id:id //objeto representa as infos necessarias para fazer a ação
    }
}
  }
//


const deleteTask = (id) => { //função de criar tarefa e retorna o objeto, recebe no parâmetro o que
    //irá mudar na ação, nesse caso cada tarefa que é um texto

  return  {
     type: "DELETE_TASK", // string que descreve a ação (padrao em ingles e maiusculo)
    payload: {
       id:id //objeto representa as infos necessarias para fazer a ação
    }
}
  }


  const completeAllTask = () => { //função de criar tarefa e retorna o objeto, recebe no parâmetro o que
    //irá mudar na ação, nesse caso cada tarefa que é um texto

  return  {
     type: "COMPLETE_ALL_TASK", // string que descreve a ação (padrao em ingles e maiusculo)
  
  }

  // 



  const deleteAllComplete = (id) => { //função de criar tarefa e retorna o objeto, recebe no parâmetro o que
    //irá mudar na ação, nesse caso cada tarefa que é um texto

  return  {
     type: "DELETE_ALL_COMPLETE", // string que descreve a ação (padrao em ingles e maiusculo)
    payload: {
       id:id //objeto representa as infos necessarias para fazer a ação
    }
}
  }


  const setFilter= (filter) => { //função de criar tarefa e retorna o objeto, recebe no parâmetro o que
    //irá mudar na ação, nesse caso cada tarefa que é um texto

  return  {
     type: "SET_FILTER",
      // string que descreve a ação (padrao em ingles e maiusculo)
    payload: {
       filter //objeto representa as infos necessarias para fazer a ação
    }
}
  }
