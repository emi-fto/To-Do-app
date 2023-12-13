import './styles/HomePage.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import tasks from"./assets/tasks.json"
import TaskList from "./components/TaskList.jsx";
import {Route, Routes} from 'react-router-dom'
import TaskPage from "./Pages/TaskPage.jsx";
import TaskDetail from "./Pages/TaskDetail.jsx";
import Create from "./Pages/Create.jsx";
import About from "./Pages/About.jsx";
import Error from "./Pages/Error.jsx";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route path="/" element={<TaskPage/>} />
          <Route path="/task/:taskId" element={<TaskDetail/>} />
          <Route path="/create-task" element={<Create/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Error/>} />

        </Routes>
      </div>

      <TaskList tasks = {tasks}/> 
      <Sidebar/>
      <Footer/>
    </div>
  );
}
export default App;


