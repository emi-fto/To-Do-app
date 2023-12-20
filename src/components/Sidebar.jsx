import '../styles/Sidebar.css'
import { Link } from "react-router-dom"; // <== IMPORT and IMPORTANT

function Sidebar () {
    return (
      <div className='Sidebar'>
        <Link className='homepage' to="/"> Homepage </Link>
        <Link className='about'to="/about"> About us </Link>
        <Link className='createsidebar' to="/create-task">
            <button className="button">
                Create new Task
            </button>
        </Link>
      </div>
    );
  }
  
  export default Sidebar;