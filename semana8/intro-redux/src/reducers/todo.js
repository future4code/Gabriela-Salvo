const initialState = {

    createTasks:[]
}

const tasks = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD_TASK':
            return {...state,
                 createTasks:[...state.createTasks, action.payload]
                 
                    };
        case 'DELETE_TASK': 
            return {...state, createTasks: action.payload.text}
            default:
                return state
    }   
        
}

export default tasks