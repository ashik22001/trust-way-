import React from 'react'
import Dashboard_Menu from '../Dashboard/Menu_Site/Deshboard_Menu'
import Dashboard_Navbar from './Dashboard_Shard_component/Dashboard_Navbar'

export default function Dashboard_Layout({children}) {
  return (
    <div className=' grid grid-cols-12 max-w-[1536px] mx-auto bg-white h-[100vh]'>
      <div className=' col-span-3  border-r grid  grid-rows-12 h-[100vh] bg-[#FAFBF8]'>
        <div className='row-span-2 flex items-center justify-center '>
        
        <h2 className=' text-black font-semibold text-2xl uppercase'>
            Trust Way Global
        </h2>
       
        </div>
        <div className='row-span-9  overflow-y-auto '>
            <Dashboard_Menu></Dashboard_Menu>
        </div>
      
      </div>
      <div className=' col-span-9 h-[100vh] overflow-y-auto'>
        <div className=' p-3'>
          <Dashboard_Navbar></Dashboard_Navbar>
        </div>
        <main>
          {children}
        </main>
      </div>
     
      
    </div>
  )
}