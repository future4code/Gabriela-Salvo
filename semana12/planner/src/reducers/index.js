import { combineReducers } from "redux";
import   { tasks }  from './task'

export const rootReducer = combineReducers({
  task: tasks
  // Seus reducers aqui
});
