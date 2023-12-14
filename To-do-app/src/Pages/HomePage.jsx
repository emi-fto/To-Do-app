import '../styles/HomePage.css'
import { useState } from 'react'
import { Link } from "react-router-dom"; // <== IMPORT and IMPORTANT
import taskData from"../assets/tasks.json"

function HomePage (){
const [tasks, setTasks] = useState(taskData)
return(
<>{tasks &&
    tasks.map((task) =>{
        return(
            <Link to={`/task/${task.id}`} key={task.id}>
              <TaskCard {...tasks}/>
            </Link>
        )
    })}
</>)}

export default HomePage;