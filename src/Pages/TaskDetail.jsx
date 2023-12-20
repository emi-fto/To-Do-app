import React from "react";
import { useState } from "react";
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";

const TaskDetail = ({ tasks, setTasks }) => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const taskProfile = tasks.find((task) => task.id.toString() === taskId);

  if (!taskProfile) {
    return <Navigate to="/" />;
  }
  const [task, setTask] = useState(taskProfile.task);
  const handleSubmit = event =>{
      event.preventDefault()
      
        const updatedTasks = tasks.map((currentTask) =>
        currentTask.id.toString() === taskId ? { ...currentTask, task } : currentTask
      );
    
      setTasks(updatedTasks);

      navigate('/')
      }
  
  const handleDelete = () => {
        const updatedTasks = tasks.filter((currentTask) => currentTask.id.toString() !== taskId);

        setTasks(updatedTasks);

        navigate('/');
      };


  return (
    <div className="TaskdetailPage">
      <h1>Task Details Page</h1>
      <form onSubmit= {handleSubmit} > 
        <label > Task 
          <input required value={task} onChange={event => setTask(event.target.value)}/>
        </label>
        <button type='submit'> Update </button>
      </form>
      <button onClick={handleDelete}>Delete Task</button>
      <Link to="/">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default TaskDetail;
