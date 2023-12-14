import { Link } from "react-router-dom";
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
// {  "id": 1, "task": "Read the project brief", "completed": true},


const Create = (setTasks) => {
    const [id, setId] = useState();
    const [task, setTask] = useState();
    const [completed, setCompleted] = useState(false);


    const handleSubmit = event =>{
        event.preventDefault()
        console.log('Submit', {task, completed})
        setStudents((prevTasks)=> {
            return [ ...prevTasks, {
                id: uuidv4(),
                task: task,
                completed:completed,
            }
            
            
            ]


        }

)
    }
    
    return ( 
        <>
        <h1> New Task </h1>
        <label> Task
        <input name="task" type="text" value={task} onChange={({target}) => setTask(target.value)}/>
        </label>
        <label>
            Statut
            <input name="completed" type="checkbox" value={completed} onChange={({target}) => setCompleted(target.value)}/>
          </label>

        <form onSubmit= {handleSubmit}> 
                <button type='submit'> Create </button>
        </form>
        </>
     );
}
 


export default Create