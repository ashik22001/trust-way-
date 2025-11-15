'use client'
import Image from 'next/image'
import React from 'react'


import { useAuth } from '../../../../../../Context/AuthContext/AuthContext'

export default function Works_Image_Card() {


    // context api state coll 

    const { visa_job_vacations, setvisa_job_vacations, } = useAuth()



    // fetch navbar api all data 


    React.useEffect(() => {
        fetch('http://localhost:3000/Visa-jobs-vacancies-Section-Data-Api')
            .then(res => res.json())
            .then(data => {
                setvisa_job_vacations(data)
            })
    }, []) // ✅ runs only once



    console.log('visa_job_vacations', visa_job_vacations)



    return (
     <div className=' bg-black'>
           <div className=' max-w-[1536px] mx-auto'>


            {/* header text  */}

            <div>
                <h1 className=' text-3xl font-bold text-white py-5 text-center uppercase px-5 md:px-10 lg:px-0'>General vacancies for all countries:</h1>
            </div>

            {/* card section */}

            <div className=' px-5 md:px-10 xl:px-40 grid md:grid-cols-2  lg:grid-cols-3 gap-5 '>
                {/* card */}

                {
                    visa_job_vacations.slice(-9).map((data, index) => (
                        <div className=' h-[280px] w-full col-span-1 border-2 border-gray-500 rounded-md' key={data?._id || index}>
                            <h4 className=' text-lg font-semibold text-white text-center py-2'>{data.Visa_Vactaion_Name || 'No image Found'}</h4>
                            <div className=' h-full'>
                                <img
                                    src={data.Choose_Image || 'No image Found'}
                                    className='h-[230px] w-full '
                                >
                                </img>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* footer text */}
            <div>
                <h1 className=' text-xl font-medium text-white py-5 text-center '>For current vacancies for each country, please check here: Facebook</h1>
            </div>
        </div>
     </div>
    )
}
