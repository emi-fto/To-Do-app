import React from "react";
import { useState } from "react";
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import '../styles/TaskDetail.css'

const TaskDetail = ({ tasks, setTasks, completedTasks, setCompletedTasks }) => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const taskProfile = tasks.find((task) => task.id.toString() === taskId) || completedTasks.find((completedTask) => completedTask.id.toString() === taskId) ;

  if (!taskProfile) {
    navigate('/')
  }
  const [task, setTask] = useState(taskProfile.task);
  const handleSubmit = event =>{
      event.preventDefault()
      
      const updatedTasks = tasks.map((currentTask) =>
      currentTask.id.toString() === taskId ? { ...currentTask, task } : currentTask 
      )
      setTasks(updatedTasks)

      const updatedCompletedTasks = completedTasks.map((currentCompletedTask) =>
      currentCompletedTask.id.toString() === taskId ? { ...currentCompletedTask, task } : currentCompletedTask 
      )
      setCompletedTasks(updatedCompletedTasks)
      
      
      navigate('/')
      }
  
  const handleDelete = () => {
        const deleteTasks = tasks.filter((currentTask) => currentTask.id.toString() !== taskId);
        setTasks(deleteTasks);

        const deleteCompletedTasks = completedTasks.filter((currentCompletedTask) => currentCompletedTask.id.toString() !== taskId);
        setCompletedTasks(deleteCompletedTasks);

        navigate('/');
      };


  return (
    <div className="TaskdetailPage">
      <h1>Task Details Page</h1>
      <div  className="container">

      <form className="form" onSubmit= {handleSubmit} > 
        <label >
          <input required value={task} onChange={event => setTask(event.target.value)}/>
        </label>
        <button className="button-update" type='submit'> Update </button>
      </form>
      </div>
      <button className="delete-button" onClick={handleDelete}>Delete Task</button>
      <Link to="/">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default TaskDetail;
