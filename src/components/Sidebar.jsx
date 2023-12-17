import '../styles/Sidebar.css'
import { Link } from "react-router-dom"; // <== IMPORT and IMPORTANT

function Sidebar () {
    return (
      <div className='Sidebar'>
        <Link to="/"> Homepage </Link>
        <Link to="/about"> About us </Link>
        <Link to="/create-task">
            <button className="createButton">
                Create new Task
            </button>
        </Link>
      </div>
    );
  }
  
  export default Sidebar;