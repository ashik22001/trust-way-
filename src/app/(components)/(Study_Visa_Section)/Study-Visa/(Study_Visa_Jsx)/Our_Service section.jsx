'use client'
import React from 'react'
import { useAuth } from '../../../../../../Context/AuthContext/AuthContext'

export default function Our_Service_section() {


    // context api state coll 

    const { Study_Our_Service_Card, setStudy_Our_Service_Card, } = useAuth()



    // fetch navbar api all data 


    React.useEffect(() => {
        fetch('http://localhost:3000/Our-Service-Card-Api')
            .then(res => res.json())
            .then(data => {
                setStudy_Our_Service_Card(data)
            })
    }, []) // ✅ runs only once



    console.log('Study_Our_Service_Card', Study_Our_Service_Card)



    return (
        <div className=' bg-white py-5 pb-8'>


            {/* header title  */}

            <h3 className='text-center font-semibold text-4xl text-[#110078] py-3 pb-5'>OUR SERVICES </h3>

            {/* card section  */}

            <div className=' px-5 md:px-[10%] grid  lg:grid-cols-3 gap-x-5 gap-y-5'>
                {
                    Study_Our_Service_Card.slice(-6).map((data, index) => (
                        <div className=' bg-white rounded-2xl shadow-lg shadow-gray-500 ' key={data?._id || index }>
                            <h3 className='text-center font-bold text-2xl text-[#110078] pt-3'>{data?.Service_Title || 'No Data Found'}</h3>
                            <p className=' text-lg py-5 px-6 text-center'>
                               {data?.Service_Description || 'No Data Found'}
                            </p>
                        </div>

                    ))
                }

               

            </div>
        </div>
    )
}
