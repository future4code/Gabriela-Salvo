export  default function addTodo (text, id) {
    return  {
        type: "ADD_TASK",
        payload: {
            text:text,
            id: id
        }
    }
}

export  default function DeleteTodo (text, id) {
    return  {
        type: "DELETE_TASK",
        payload: {
            text:text,
            id:id
        }
    }
}


export  default function SeeAllTasks () {
    return  {
        type: "SEE_TASK",
        payload: {
            text:text
        }
    }
}

