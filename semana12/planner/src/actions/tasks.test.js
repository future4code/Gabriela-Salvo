import { setTasks, getTasks } from "./tasks"
import axios from 'axios'


describe("Testes das actions", ()=> {
    test("setTasks", ()=> {

        //preparação 
        const mockSetTasks = "Teste setTasks"

        //execução 

        const action = setTasks (mockSetTasks)

        //verificação
        expect(action.type).toBe("SET_TASKS") 
        expect(action.payload.task) 
      })
    
      //Passou

        test("Teste do getTasks", async ()=>{
          axios.get = jest.fn(async ()=> ({
              data:[
                {
                    text:"fazer bananinha de almoço",
                    day:"segunda"
                }]   
             }))

             //mock dispatch
             const dispatch = jest.fn();

             //executando ação assíncrona

             await getTasks() (dispatch)
             //verifica se o dispatch foi chamado com a ação correta

             expect(dispatch).toHaveBeenCalledWith({


                type: "SET_TASKS",
                payload:{ tasks:[
                    
                    {
                     text:"fazer bananinha de almoço",
                    day:"segunda"
                
                }]
                         }
             })
         })

         test("Teste do createTask", async ()=>{
            axios.post = jest.fn(async ()=> {

                const body = 
              
                  {
                      text:"fazer bananinha de almoço",
                      day:"segunda"
                  }  
                  const dispatch = jest.fn();

                  await createTask(body) (dispatch)

                  //verficação

                  expect.assertions(getTasks)
                  })
                })
                //passou

                

     
   
})



