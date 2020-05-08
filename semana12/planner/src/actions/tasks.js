import axios from "axios";

export const setTasks = tasks => {
    return {
      type: "SET_TASKS",
      payload: {
       tasks
      }
    };
  };

  const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-gabriela"

  
  export const getTasks =()=> async (dispatch, getState) => {
      try {

        const response = await axios.get(`${baseURL}`
        
        )
        dispatch(setTasks(response.data))
        console.log(response.data)
      } catch(error) {
          console.error("Ocorreu um erro inesperado. Tente novamente")
      }
    }


    export const createTask = (text, day)=> async(dispatch, getState)=>{
        const body = {
            text:text,
            day:day
        }
        try {
            const response = await axios.post(`${baseURL}`, body
            
            )
            dispatch(getTasks())
            console.log(text)

            }catch {
                console.error("Ocorreu um erro inesperado. Tente novamente.")

            }
    }