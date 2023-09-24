import './App.css';
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
    <div className="Container">
      <h1>To Do List</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks}  deleteTask={deleteTask} />
    </div>
    </div>
  );
}

export default App;
