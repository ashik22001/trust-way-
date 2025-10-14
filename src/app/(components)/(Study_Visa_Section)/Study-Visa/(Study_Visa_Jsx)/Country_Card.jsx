import React from 'react'

import flagimage from '../../../../../../public/Study_Visa_image/avstriya.jpg'
import Image from 'next/image'

export default function Country_Card() {
    return (
        <div className=' bg-white px-5 md:px-10'>
            {/* card section  */}
            <div className=' px-0 md:px-10 lg:px-14 xl:px-20 py-5  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 md:gap-4'>
                <div className='bg-white p-3 shadow-sm shadow-gray-400 rounded-lg hover:bg-[#D1D1D1]'>
                    <Image
                    
                    src={flagimage}
                    className=' h-20 w-full'
                    
                    >

                    </Image>

                    <h4 className=' text-xl text-[#11005E] text-center py-5'>Study In Asturilia</h4>
                </div>
                <div className='bg-white p-3 shadow-sm shadow-gray-400 rounded-lg hover:bg-[#D1D1D1]'>
                    <Image
                    
                    src={flagimage}
                    className=' h-20 w-full'
                    
                    >

                    </Image>

                    <h4 className=' text-xl text-[#11005E] text-center py-5'>Study In Asturilia</h4>
                </div>
                <div className='bg-white p-3 shadow-sm shadow-gray-400 rounded-lg hover:bg-[#D1D1D1]'>
                    <Image
                    
                    src={flagimage}
                    className=' h-20 w-full'
                    
                    >

                    </Image>

                    <h4 className=' text-xl text-[#11005E] text-center py-5'>Study In Asturilia</h4>
                </div>
                <div className='bg-white p-3 shadow-sm shadow-gray-400 rounded-lg hover:bg-[#D1D1D1]'>
                    <Image
                    
                    src={flagimage}
                    className=' h-20 w-full'
                    
                    >

                    </Image>

                    <h4 className=' text-xl text-[#11005E] text-center py-5'>Study In Asturilia</h4>
                </div>
                <div className='bg-white p-3 shadow-sm shadow-gray-400 rounded-lg hover:bg-[#D1D1D1]'>
                    <Image
                    
                    src={flagimage}
                    className=' h-20 w-full'
                    
                    >
                    </Image>

                    <h4 className=' text-xl text-[#11005E] text-center py-5'>Study In Asturilia</h4>
                </div>
                <div className='bg-white p-3 shadow-sm shadow-gray-400 rounded-lg hover:bg-[#D1D1D1]'>
                    <Image
                    
                    src={flagimage}
                    className=' h-20 w-full'
                    
                    >

                    </Image>

                    <h4 className=' text-xl text-[#11005E] text-center py-5'>Study In Asturilia</h4>
                </div>
                <div className='bg-white p-3 shadow-sm shadow-gray-400 rounded-lg hover:bg-[#D1D1D1]'>
                    <Image
                    
                    src={flagimage}
                    className=' h-20 w-full'
                    
                    >
                    </Image>

                    <h4 className=' text-xl text-[#11005E] text-center py-5'>Study In Asturilia</h4>
                </div>
                <div className='bg-white p-3 shadow-sm shadow-gray-400 rounded-lg hover:bg-[#D1D1D1]'>
                    <Image
                    
                    src={flagimage}
                    className=' h-20 w-full'
                    
                    >

                    </Image>

                    <h4 className=' text-xl text-[#11005E] text-center py-5'>Study In Asturilia</h4>
                </div>
                
            </div>
        </div>
    )
}
