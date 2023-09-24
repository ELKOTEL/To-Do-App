import React from 'react';
import Task from './Task';
function TaskList({ tasks  , deleteTask }) {
  console.log(tasks)
  return (
    <ul>
      {tasks.map((task, index) => (


        <Task index={index} task={task} deleteTask={deleteTask}  />
      ))}
    </ul>
    
  );
}

export default TaskList;
