import { tasks, initialstate } from "./task"
import { setTasks } from "../actions/tasks"

describe('Teste de reducer', () => {

    test('SET_TASKS', () => {

        
        const mockTask = [
            {   
              id:"87",
              text:'regar plantas no Animal Crossing',
              day:'quarta'
            }
        ]
        const taskAction = {
            type:text,
            payload :{
                tasks: mockTask

            }
        }

        

        const mockState = {tasks: []}

        const newState = setTasks(mockState,mockTask)
        expect(newState.tasks).toHaveLength(1);
        expect(newState.tasks[0].text).toBe(mockText);
    });
})