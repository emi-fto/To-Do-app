import './styles/HomePage.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import tasks from"./assets/tasks.json"
import TaskList from "./components/TaskList.jsx";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TaskList tasks = {tasks}/> 
      <Sidebar/>
      <Footer/>
    </div>
  );
}
export default App;


