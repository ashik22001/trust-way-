'use client'
import React, { useEffect } from 'react'

import Image from 'next/image'
import { useAuth } from '../../../../../../Context/AuthContext/AuthContext'
import Link from 'next/link'

export default function Country_Card() {



    // context api state coll 

    const { Study_Country_image, setStudy_Country_image, } = useAuth()



    // fetch navbar api all data 

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
        <div className=' bg-white px-5 md:px-10'>
            {/* card section   */}
            <div className=' px-0 md:px-10 lg:px-14 xl:px-20 py-5  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 md:gap-4 max-w-[1536px] mx-auto'>
                {
                    visa_condition_section.slice(-36).map((data, index) => (
                       <Link href={`/Work-Visa/${data._id}`}>
                        <div className='bg-white p-3 shadow-sm shadow-gray-400 rounded-lg hover:bg-[#D1D1D1]' key={data._id || index}>
                            <img

                                src={data.Choose_Image || 'No Image Found'}
                                className=' h-20 w-full'
                                alt='image1'
                            >

                            </img>

                            <h4 className=' text-xl text-[#11005E] text-center py-5'>STYDY IN {data.Country_name || 'No Data Found'}</h4>
                        </div>
                       </Link>
                    ))
                }



            </div>
        </div>
    )
}
