
function TaskCard({
  task,
  completed,
}) {
  return (
      <div className="taskCard">
        <p> {task} {completed}</p>
      </div>
      
  );
}

export default TaskCard;