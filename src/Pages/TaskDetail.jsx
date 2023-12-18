import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";

const TaskDetail = ({ tasks }) => {
  const { taskId } = useParams();
  const taskProfile = tasks.find((task) => task.id.toString() === taskId);

  if (!taskProfile) {
    return <Navigate to="/" />;
  }

  return (
    <div className="TaskdetailPage">
      <h1>Task Details Page</h1>
      <h2 className="task-name">{taskProfile.task}</h2>
      


      <Link to="/">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default TaskDetail;
