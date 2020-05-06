import { action }  from "../actions"
const initialState = []



export const tasks = (state = initialState. action)=> {
    switch(action.type) {
        case "SET_TASKS":

        return action.payload.tasks;
        
        default:
            return state
    }
}