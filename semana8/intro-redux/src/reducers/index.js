

import { combineReducers} from "redux"
import { todos } from "./todos"

export const rootReducer = combineReducers ({ // aqui ele recebe um objeto com todos os reducers                                                                                                                                                         
 todos: todos

})