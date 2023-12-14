import './styles/App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import {Route, Routes} from 'react-router-dom'
import HomePage from "./Pages/HomePage.jsx";
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
          <Route path="/" element={<HomePage/>} />
          <Route path="/task/:taskId" element={<TaskDetail/>} />
          <Route path="/create-task" element={<Create/>} />
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


