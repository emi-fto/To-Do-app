import '../styles/Sidebar.css'
import { Link } from "react-router-dom"; // <== IMPORT and IMPORTANT

function Sidebar () {
    return (
      <div className='Sidebar'>
        <Link to="/"> Homepage </Link>
        <Link to="/about"> About us </Link>
      </div>
    );
  }
  
  export default Sidebar;