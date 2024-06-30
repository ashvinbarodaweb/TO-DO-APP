export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_PRIORITY = 'SET_PRIORITY';
export const LOAD_TASKS = 'LOAD_TASKS';

export const addTask = task =>({
    type: ADD_TASK,
    payload:task
})


export const deleteTask=id=>({
    type:DELETE_TASK,
    payload:id
})

export const setPriority=(id,priority)=>({
    type:SET_PRIORITY,
    payload:{id,priority}
})

export const loadTasks=()=>{
    const tasks=JSON.parse(localStorage.getItem('tasks')) || []
    return {
        type:LOAD_TASKS,
        payload:tasks
    }
}


export const saveTasks =tasks=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
    return {
        type:LOAD_TASKS,
        payload:tasks
    }
}