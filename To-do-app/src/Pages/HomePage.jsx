import '../styles/HomePage.css'
import { useState } from 'react'
import { Link } from "react-router-dom"; // <== IMPORT and IMPORTANT
import taskData from"../assets/tasks.json"
import TaskCard from "../components/TaskCard";

function HomePage (){
const [tasks, setTasks] = useState(taskData)
return(
    <div className='mainCtn'>
        <div className="toDos">
        {tasks &&
            tasks.map((task) =>{
                return(
                    <div className="taskCard">
                        <input type="checkbox" />
                        <Link to={`/task/${task.id}`} key={task.id}>
                        <TaskCard {...task}/>
                        </Link>
                    </div>
                    )
            })}
        </div>
        <div className="done">
        Completed Tasks
        </div>
    </div>
)
}

export default HomePage;