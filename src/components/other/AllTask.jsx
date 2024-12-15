import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 '>

<div className='bg-red-400 mb-2 py-2 px-4 rounded flex justify-between'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
         
        <h5 className='text-lg font-medium w-1/5'>Completed </h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>

      
      </div>

      <div className='overflow-auto'>
      {userData.map((elem,idx)=>{
        return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 rounded flex justify-between'>
        <h2 className='w-1/5 text-lg font-medium '>{elem.firstName}</h2>
        <h3 className='w-1/5 text-lg font-medium text-blue-600'>{elem.taskCounts.newTask}</h3>
        <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskCounts.active}</h5>
        <h5 className='w-1/5 text-lg font-medium '>{elem.taskCounts.completed}</h5>
        <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskCounts.failed}</h5>
      </div>
      })} 
      </div>

      
    </div>
  )
}

export default AllTask
