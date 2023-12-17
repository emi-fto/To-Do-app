import { Link, Navigate, useParams } from "react-router-dom";

const TaskDetail = (tasks) => {
   const {taskId} = useParams()
    const taskProfile = tasks.find(task => task._Id === taskId )

   if(!taskProfile){
    return <Navigate to='/'/>

   }
   
    return ( 
        <div className='TaskdetailPage'>
        <h1>Task Details Page</h1>
        <div className='bg-white p-8 rounded-lg shadow-md mb-6'>
         
          <h1 className='text-2xl mt-4 font-bold absolute'>
            {taskProfile}
          </h1>

           
          </div>
  
          {/* Back button */}
          <Link to='/'>
            <button className='text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out'>
              Back
            </button>
          </Link>
        </div>
   
    )
    }

export default TaskDetail