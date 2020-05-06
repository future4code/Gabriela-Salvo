export const setTasks = text => {
    return {
      type: "SET_TASKS",
      payload: {
       text
      }
    };
  };

  const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic/:planner-gabriela"
  