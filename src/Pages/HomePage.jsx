import '../styles/HomePage.css'
import { Link } from "react-router-dom"; // <== IMPORT and IMPORTANT
import TaskCard from "../components/TaskCard";

function HomePage ({tasks}) {
return(
    <div className='mainCtn'>
        <div className="toDos">
        {tasks &&
            tasks.map((task) => {
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