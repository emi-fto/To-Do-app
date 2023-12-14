
function TaskCard({
  id,
  task,
  completed,
}) {
  return (
      <div className="taskCard">
        <p>{id} {task} {completed}</p>
      </div>
      
  );
}

export default TaskCard;