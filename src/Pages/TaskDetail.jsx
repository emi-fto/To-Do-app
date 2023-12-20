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
      
      // Update the task content in the tasks array
        const updatedTasks = tasks.map((currentTask) =>
        currentTask.id.toString() === taskId ? { ...currentTask, task } : currentTask
      );

      // Set the updated tasks using the setTasks function
      setTasks(updatedTasks);

      // Navigate back to the task list page
      navigate('/')
      }



  return (
    <div className="TaskdetailPage">
      <h1>Task Details Page</h1>
      <form onSubmit= {handleSubmit} > 
        <label > Task 
          <input required value={task} onChange={event => setTask(event.target.value)}/>
        </label>
        <button type='submit'> Update </button>
      </form>
      <Link to="/">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default TaskDetail;
