import React, { useState } from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';
import TaskCard from '../components/TaskCard';



function HomePage({ tasks }) {
  const [todos, setTodos] = useState(tasks);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleCheckboxChange = (event, task) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      // Move task from todos to completedTasks
      setCompletedTasks([...completedTasks, task]);
      setTodos(todos.filter(todo => todo.id !== task.id));
    } else {
      // Move task from completedTasks to todos
      setTodos([...todos, task]);
      setCompletedTasks(completedTasks.filter(completedTask => completedTask.id !== task.id));
    }
  };

  return (
    <div className="mainCtn">
      <div className="toDos">
        <div className="title">TO DO</div>
        {todos.map(task => (
          <div className="taskCard" key={task.id}>
           
            <input
              type="checkbox"
              onChange={event => handleCheckboxChange(event, task)}
            />
            <Link to={`/task/${task.id}`}>
              <TaskCard {...task} />
            </Link>
           
          </div>
        ))}
      </div>
      <div className="done">
      <div className="title">DONE</div>
        {completedTasks.map(task => (
          <div className="taskCard" key={task.id}>
            <input
              type="checkbox"
              checked
              onChange={event => handleCheckboxChange(event, task)}
            />
            <Link to={`/task/${task.id}`}>
              <TaskCard {...task} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
