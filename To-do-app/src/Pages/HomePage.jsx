import '../styles/HomePage.css'
import { Link } from "react-router-dom"; // <== IMPORT and IMPORTANT
import TaskCard from "../components/TaskCard";

function HomePage ({tasks}){
return (
        <div class="border">
        <h1> Your Tasks</h1>
       
       {tasks.map(task => (
                    <Link to={`/task/${task.id}`} key={task.id}>
                    <TaskCard {...task}/>
                    </Link>
                    
                 ))}
               
                <Link to="/create-task">
                <button className="createButton">
                    Create new Task
                </button>
            </Link>
            </div>
)
}

export default HomePage;