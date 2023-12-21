import './styles/App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from "./Pages/HomePage.jsx";
import TaskDetail from "./Pages/TaskDetail.jsx";
import Create from "./Pages/Create.jsx";
import About from "./Pages/About.jsx";
import Error from "./Pages/Error.jsx";
import taskData from"./assets/tasks.json"
import { v4 as uuidv4 } from "uuid"




function App() {
  const dataWithIds = taskData.map((currentElement) => ({ ...currentElement, id: uuidv4() }))
  const [tasks, setTasks] = useState(dataWithIds)
  return (
    <div className="App">
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage tasks= {tasks} setTasks={setTasks}/>} /> 
          <Route path="/task/:taskId" element={<TaskDetail tasks= {tasks} setTasks= {setTasks}/>} />
          <Route path="/create-task" element={<Create setTasks= {setTasks}/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </div> 
      <Sidebar/>
      <Footer/>
    </div>
  );
}
export default App;


