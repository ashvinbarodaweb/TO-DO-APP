import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, setPriority } from '../redux/actions/taskActions';
import { MdDelete } from "react-icons/md";

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks || []);
  const dispatch = useDispatch();

  // Function to handle deleting a task
  const handleDeleteTask = id => {
    dispatch(deleteTask(id));
  };



  // Sorting tasks by priority: High > Medium > Low
  const sortedTasks = tasks.slice().sort((a, b) => {
    if (a.priority === 'High') return -1;
    if (a.priority === 'Low') return 1;
    return 0; // Medium comes in between High and Low
  });

  return (
    <div className="container">
      {sortedTasks.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Task</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedTasks.map(task => (
                <tr key={task.id}>
                  <td>{task.text}</td>
                  <td>
                  {task.priority}
                  </td>
                  <td>
                    <button 
                      className="btn btn-danger" 
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
