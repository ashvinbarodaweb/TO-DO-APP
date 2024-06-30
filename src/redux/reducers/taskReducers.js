import { ADD_TASK, DELETE_TASK, SET_PRIORITY, LOAD_TASKS } from '../actions/taskActions';

const initialState = {
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const addedTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(addedTasks));
      return { ...state, tasks: addedTasks };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return { ...state, tasks: filteredTasks };
    case SET_PRIORITY:
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload.id ? { ...task, priority: action.payload.priority } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return { ...state, tasks: updatedTasks };
    case LOAD_TASKS:
      return { ...state, tasks: action.payload || [] }; // Ensure tasks is always an array
    default:
      return state;
  }
};

export default taskReducer;
