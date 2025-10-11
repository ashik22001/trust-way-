import { Button } from '@/components/ui/button'
import React from 'react'

import shipimage from '../../../../../../public/work_visa_image/ship.png'
import Image from 'next/image'

export default function Country_Category() {
  return (
    <div>
        {/* header text  */}
        <h1 className=' text-4xl font-bold text-[#0000FF] py-4 text-center'>We provide work visas to the following countries:</h1>

        {/* country section */}

       <div className=' grid grid-cols-8 items-center justify-center px-14 space-y-3'>
         <div className=' col-span-1 items-center justify-center'>
            <Button className="text-lg font-[400] text-white bg-[#4545f5] border-none h-14 hover:bg-[#E9E9E9] hover:text-black hover:shadow-md">EU Country</Button>
        </div>
       
         <div className=' col-span-1'>
            <Button className="text-lg font-[400] text-white bg-[#4545f5] border-none h-14 hover:bg-[#E9E9E9] hover:text-black hover:shadow-md">EU Country</Button>
        </div>
       
         <div className=' col-span-1'>
            <Button className="text-lg font-[400] text-white bg-[#4545f5] border-none h-14 hover:bg-[#E9E9E9] hover:text-black hover:shadow-md">EU Country</Button>
        </div>
       
         <div className=' col-span-1'>
            <Button className="text-lg font-[400] text-white bg-[#4545f5] border-none h-14 hover:bg-[#E9E9E9] hover:text-black hover:shadow-md">EU Country</Button>
        </div>
       
         <div className=' col-span-1'>
            <Button className="text-lg font-[400] text-white bg-[#4545f5] border-none h-14 hover:bg-[#E9E9E9] hover:text-black hover:shadow-md">EU Country</Button>
        </div>
       
         <div className=' col-span-1'>
            <Button className="text-lg font-[400] text-white bg-[#4545f5] border-none h-14 hover:bg-[#E9E9E9] hover:text-black hover:shadow-md">EU Country</Button>
        </div>
       
         <div className=' col-span-1'>
            <Button className="text-lg font-[400] text-white bg-[#4545f5] border-none h-14 hover:bg-[#E9E9E9] hover:text-black hover:shadow-md">EU Country</Button>
        </div>
       
         <div className=' col-span-1'>
            <Button className="text-lg font-[400] text-white bg-[#4545f5] border-none h-14 hover:bg-[#E9E9E9] hover:text-black hover:shadow-md">EU Country</Button>
        </div>
       
         
       
       </div>


       {/* image seciton */}

         <div className=' '>
                 <Image
                   src={shipimage}
                   className='h-full w-full '
                 ></Image>
               </div>
    </div>
  )
}
