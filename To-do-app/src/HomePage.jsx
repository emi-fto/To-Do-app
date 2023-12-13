import './styles/HomePage.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import tasks from"./assets/tasks.json"
import TaskList from "./components/TaskList.jsx";
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/task/:taskId" element={<TaskDetail/>} />
          <Route path="/create-task" element={<Create/>} />
        </Routes>
      </div>

      <TaskList tasks = {tasks}/> 
      <Sidebar/>
      <Footer/>
    </div>
  );
}
export default App;


