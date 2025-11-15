'use client'
import React from 'react'
import { useAuth } from '../../../../../Context/AuthContext/AuthContext'

export default function Service_Section() {



    // context api state coll 

    const { our_service_Card, setour_service_Card } = useAuth()



    // fetch company founder image


    React.useEffect(() => {
        fetch('http://localhost:3000/Our-Service-Form-Api')
            .then(res => res.json())
            .then(data => {
                setour_service_Card(data)
            })
    }, []) // ✅ runs only once



    console.log('our_service_Card', our_service_Card)


    return (
        <div className='max-w-[1536px] mx-auto'>

            {/* background image */}
            <div className="bg-[url(/images/book_mockup_2.webp)]  w-full bg-cover bg-center ">

                {/* header text seciton */}
                <div className=' '>
                    <h1 className=' text-3xl font-[700] text-center text-white py-10'>We provide the following services:</h1>

                </div>
                {/* card section */}
                <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-5 md:px-10 lg:px-[7] xl:px-[10%] gap-x-4 gap-y-5 pb-10'>

                    {
                        our_service_Card.slice(-6).map((data, index) => (
                            <div className='  w-full bg-white rounded-2xl pb-5' key={data._id || index}>
                                <h1 className=' text-xl font-[600] text-black text-center py-5'>{data.Service_Title || 'No Data Found'} :</h1>
                                <p className='px-4 text-[16px] font-semibold py-2'>
                                    - {data.Service_Descriptions}
                                </p>
                            </div>
                        ))
                    }
                </div>

            </div>


        </div>
    )
}
