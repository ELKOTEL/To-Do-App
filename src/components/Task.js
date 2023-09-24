import React, { useState } from 'react';

function Task({ task ,index , deleteTask}) {
  console.log(index)
  const [tasked, setTasked] = useState(task);
  const [completed, setCompleted] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };
  const startEditing = () => {
    setEditing(true);
  };

  const handleInputChange = (event) => {
    setEditedTask(event.target.value);
  };

  const saveEditedTask = () => {
    // You can implement a function here to update the task in the state
    setEditing(false);
    setTasked(editedTask) ;
  };
  const handleDelete = () => {
    deleteTask();
  };

  return (
    <li completed={completed}>
   {editing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={handleInputChange}
          />
          <button onClick={saveEditedTask}>Save</button>
        </>
      ) : (
        <>
         <input
             type="checkbox"
             checked={completed}
             onChange={toggleCompleted}
          />
          {tasked}
          <div className='ButtonsContainer'>
          <button onClick={startEditing}>Edit</button>
          <button onClick={()=>deleteTask(index)}>Delete</button>
          </div>
        </>
      )}
  </li>
    );
}

export default Task;