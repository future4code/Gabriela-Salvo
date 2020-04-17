

const initialState = { //passamos esse para o combineReducers
    todosList: [
        {
            text: "Task 1",
            id: 1,
            completed: false
        }, 
        {
            text: "Task 1",
            id: 1,
            completed: false
        }
    ] 


} //precisamos de um estado inicial sempre. é um state

export const todos = (state = initialState, action)=> {

    switch (action.type) {
        case "ADD_TASK":
            const newTodo ={
               id:Date.now(),
                text: action.payload.text,
                completed:false
            }
            return {
               
                todosList: [newTodo, ...state.todosList]
            };

            case "TOGGLE_TASK":
                const newTodosList = state.todosList.map(todo => {
                    if(todo.id === action.payload.id){
                        return {
                            ...todo,
                            complete: !todo.complete
                          };
                        }
                        return todo;
                })
                return {
                    todosList: newTodosList
                }
        default:
            return state
    }
}  //reducer é uma função que recebe o state atual e uma action
//dentro dela temos o switch case e ela vai olhar pra action.type


//para colocar na tela de fato precisamos conetar os componentes