import React from 'react'

export default function Dashboard_Navbar() {
  return (
    <div className=' rounded-sm shadow-sm border-gray-400 bg-[#EDEFF1] sticky z-40'>
       <div className=' gird grid-cols-2'>
         {/* left site */}
        <div>
            <ul className=' px-4 py-2 flex items-center  space-x-3'>
                <li className=' text-[16px] font-semibold text-black hover:text-blue-700 hover:border-b-2 hover:border-blue-700 bg-gray-300 px-2 y-1 rounded-sm'>Home</li>
                <li className=' text-[16px] font-semibold text-black hover:text-blue-700 hover:border-b-2 hover:border-blue-700 bg-gray-300 px-2 y-1 rounded-sm'>Work Visa</li>
                <li className=' text-[16px] font-semibold text-black hover:text-blue-700 hover:border-b-2 hover:border-blue-700 bg-gray-300 px-2 y-1 rounded-sm'>Study Visa</li>
                <li className=' text-[16px] font-semibold text-black hover:text-blue-700 hover:border-b-2 hover:border-blue-700 bg-gray-300 px-2 y-1 rounded-sm'>Turist Visa</li>
                <li className=' text-[16px] font-semibold text-black hover:text-blue-700 hover:border-b-2 hover:border-blue-700 bg-gray-300 px-2 y-1 rounded-sm'>Home</li>
                
            </ul>
        </div>
        
        {/* right site  */}

        <div>

        </div>
       </div>
    </div>
  )
}