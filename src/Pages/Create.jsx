import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import '../styles/create.css'

// {  "id": 1, "task": "Read the project brief", "completed": true},


const Create = ({setTasks}) => {
    const [task, setTask] = useState("");
    const navigate = useNavigate()

    const handleSubmit = event =>{
        event.preventDefault()
        const newTaskId = uuidv4();

        setTasks((prevTasks)=> {
            return [ ...prevTasks, {
                id: newTaskId,
                task: task,
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
            <div  className="container">
                <form onSubmit= {handleSubmit} className="form" > 
                    <label>  
                        <input className="input-box" placeholder="Add your task"required value={task} onChange={event => setTask(event.target.value)}/>
                    </label>
                    <button className="button" type='submit'> Create </button>
                </form>
            </div>
        </>
     );
}
 


export default Create