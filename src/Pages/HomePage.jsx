import React, { useState } from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';



function HomePage({ tasks, setTasks, completedTasks, setCompletedTasks }) {
  const handleCheckboxChange = (event, task) => {
    event.preventDefault()
    const isChecked = event.target.checked;

    if (isChecked) {
      // Move task from todos to completedTasks
      setCompletedTasks([...completedTasks, task]);
      setTasks(tasks.filter(currentTask => currentTask.id !== task.id));
    } else {
      // Move task from completedTasks to todos
      setTasks([...tasks, task]);
      setCompletedTasks(completedTasks.filter(completedTask => completedTask.id !== task.id));
    }
  };

  return (
    <div className="mainCtn">
      <div className="toDos">
        <div className="title">TO DO</div>
        {tasks.map(task => (
          <div className="taskCard" key={task.id}>
            <input
              type="checkbox"
              onChange={event => handleCheckboxChange(event, task)}
            />
            <Link to={`/task/${task.id}`}>
            <p>{task.task}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="done">
      <div className="title">DONE</div>
        {completedTasks.map(doneTask => (
          <div className="taskCard" key={doneTask.id}>
            <input
              type="checkbox"
              checked
              onChange={event => handleCheckboxChange(event, doneTask)}
            />
            <Link to={`/task/${doneTask.id}`}>
            <p>{doneTask.task}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
