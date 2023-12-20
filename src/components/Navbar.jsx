import logo from '../assets/todologo.png'
import '../styles/Navbar.css'
import { Link } from "react-router-dom"; // <== IMPORT and IMPORTANT

function Navbar () {
    return (
      <nav className='Navbar'>
        <Link to="/">
        <img src={logo} alt = "logo" />
        </Link>
        <div className='titleapp' >Task Easy</div>
      </nav>
    );
  }
  
  export default Navbar;
  