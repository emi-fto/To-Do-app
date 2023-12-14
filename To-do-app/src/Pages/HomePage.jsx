import '../styles/HomePage.css'
import { useState } from 'react'
import { Link } from "react-router-dom"; // <== IMPORT and IMPORTANT
import taskData from"../assets/tasks.json"
import TaskCard from "../components/TaskCard";

function HomePage (){
const [tasks, setTasks] = useState(taskData)
return(
<>
{tasks &&
    tasks.map((task) =>{
        return(
            <Link to={`/task/${task.id}`} key={task.id}>
              <TaskCard {...task}/>
            </Link>
        );
    })}
</>
)
}

export default HomePage;