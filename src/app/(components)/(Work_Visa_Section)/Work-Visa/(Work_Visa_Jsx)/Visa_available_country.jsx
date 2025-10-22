'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"


import europeimage from '../../../../../../public/work_visa_image/EU_bg.png'
import flagimage from '../../../../../../public/work_visa_image/avstriaya.png'

import { useAuth } from '../../../../../../Context/AuthContext/AuthContext'


export default function Visa_available_country() {


  // context api state coll 

  const { visa_condition_section, setvisa_condition_section } = useAuth()


  // fetch navbar api all data 


  React.useEffect(() => {
    fetch('http://localhost:3000/Coutry-Visa-Conditions-Section-Api')
      .then(res => res.json())
      .then(data => {
        setvisa_condition_section(data)
      })
  }, []) // ✅ add empty array to run once


  console.log('visa_condition_section', visa_condition_section)


  return (
    <div className='bg-[#8777FD] w-full py-10   relative'>
      {/* section 1 */}
      <div className='hidden md:block px-5 md:px-0 lg:px-20'>
        <div className=' grid grid-cols-12 items-center gap-0 lg:gap-10'>
          {/* left side */}
          <div className='px-0 lg:px-10 relative left-20 lg:left-40 w-full md:col-span-4 lg:col-span-6'>
            <h3 className='text-white font-bold text-5xl bg-[#3739E0] py-5 rounded-2xl text-center w-full'>Countries of the European Union</h3>
          </div>

          {/* right side */}
          <div className='md:col-span-8 lg:col-span-6'>
            <Image
              src={europeimage}
              alt='Europe Background'
              className='h-72 w-full rounded-3xl object-cover'
            />
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className='mt-5 md:mt-10 px-5 md:px-10'>
        {/* text section */}
        <h1 className='text-2xl text-center md:text-start font-semibold text-[#02059E] border-b-2 border-[#02059E] pb-2'>
          Conditions for obtaining a work visa in the EU countries:
        </h1>

        {/* flag grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-6 gap-x-5 gap-y-7'>
          {
            visa_condition_section.slice(-30).map((data, index) => (
              <div key={data._id || index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="cursor-pointer">
                      <div>
                        <img
                          src={data.Choose_Image}
                          alt="Country flag"
                          className="h-40 w-40 rounded-full object-cover mx-auto"
                        />
                      </div>
                      <div className="border-b-2 border-[#727272] pb-2 mt-2">
                        <Button className="bg-white text-xl font-semibold text-black w-full hover:text-white">
                          {data.Country_Name}
                        </Button>
                      </div>
                    </div>
                  </TooltipTrigger>

                  <TooltipContent className="h-60 w-80 bg-[#1917AA] mx-5 p-5 text-center flex items-center justify-center">
                    <p className="text-sm font-semibold text-white">
                     {data.Visa_Conditons}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))
          }



        </div>
      </div>
    </div>
  )
}
