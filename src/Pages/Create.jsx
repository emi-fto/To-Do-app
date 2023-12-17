import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import '../styles/create.css'

// {  "id": 1, "task": "Read the project brief", "completed": true},


const Create = ({setTasks}) => {
    const [task, setTask] = useState("");
    const [completed, setCompleted] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = event =>{
        event.preventDefault()
        console.log('Submit', {task})
        const newTaskId = (uuidv4)

        setTasks((prevTasks)=> {
            return [ ...prevTasks, {
                _id: newTaskId,
                task: task,
                completed:completed,
            }
            ]
        })
            navigate('/')
        }

    
    return ( 
        <>
        <div className="Title">
        <h1> New Task </h1>
        </div>

        <form onSubmit= {handleSubmit} > 
        <label > Task 
        <input required value={task} onChange={event => setTask(event.target.value)}/>
        </label>
        <label> 
            Status
            <input type="checkbox" value={completed} onChange={event => setCompleted(event.target.checked)}/>
        </label>

        
        <button type='submit'> Create </button>
        </form>
        </>
     );
}
 


export default Create