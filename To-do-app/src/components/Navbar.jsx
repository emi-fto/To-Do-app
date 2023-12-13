import logo from '../assets/todologo.png'
import '../styles/Navbar.css'

function Navbar () {
    return (
      <nav className='Navbar'>
        <img src={logo} alt = "logo" />
        <p>The Best To-Do-App</p>
      </nav>
    );
  }
  
  export default Navbar;
  