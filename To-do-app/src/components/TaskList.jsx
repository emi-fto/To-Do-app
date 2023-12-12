import '../styles/TaskList.css'
import { useState } from 'react'

function TaskList ({tasks}){
const[Task, setTask] = useState(tasks)
return(
<>{Task.map(oneTask =>{
        return(
            
            <div key={oneTask.id}>
    
            <h4>{oneTask.task}</h4>
            
            </div>
        )
    })}
</>)}

export default TaskList;



