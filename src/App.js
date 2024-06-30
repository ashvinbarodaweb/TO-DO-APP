import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTasks } from './redux/actions/taskActions';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const handleLogin = () => {
    dispatch({ type: 'LOGIN' });
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Advanced To-Do Application</h1>
        {isAuthenticated ? (
          <>
            <TaskInput />
            <TaskList />
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </header>
    </div>
  );
};

export default App;
