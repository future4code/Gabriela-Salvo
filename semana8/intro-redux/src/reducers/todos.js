

const initialState = { //passamos esse para o combineReducers
    todosList: [
        {
            text: "Task 1",
            id: 1
        }, 
        {
            text: "Task 1",
            id: 1
        }
    ] 


} //precisamos de um estado inicial sempre. é um state

export const todos = (state = initialState, action)=> {

    switch (action.type) {
        default:
            return state
    }
}  //reducer é uma função que recebe o state atual e uma action
//dentro dela temos o switch case e ela vai olhar pra action.type


//para colocar na tela de fato precisamos conetar os componentes