export default addTodo (text) {
    return  {
        type: "ADD_TASK",
        payload: {
            text:text
        }
    }
}