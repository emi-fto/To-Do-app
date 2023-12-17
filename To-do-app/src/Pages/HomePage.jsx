import '../styles/HomePage.css'
import { Link } from "react-router-dom"; // <== IMPORT and IMPORTANT
import TaskCard from "../components/TaskCard";

<<<<<<< HEAD
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
=======
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
>>>>>>> creation
)
}

export default HomePage;