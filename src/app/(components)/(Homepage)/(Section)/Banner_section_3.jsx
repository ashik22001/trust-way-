import React from 'react'

import flag from '../../../../../public/images/flag.png'
import Image from 'next/image'


export default function Banner_section_3() {
    return (
        <div className="px-0 md:px-5 lg:px-10">

            {/* background image */}
            <div className="bg-[url(/images/oblaka.webp)] h-full md:h-full lg:h-full w-full bg-cover bg-center rounded-none md:rounded-[50px] mt-0 xl:mt-10">

                <div className=' grid md:grid-cols-2 lg:grid-cols-12 items-center justify-center'>

                    {/* left site */}
                    <div className=' md:col-span-1 lg:col-span-4'>
                        <Image
                            src={flag}
                            alt="Megh cloud"

                            className="h-[100vh] w-full md:h-full md:w-[100vh] ml-10 object-contain flex items-center justify-center "
                        />
                    </div>
                    {/* right site */}
                    <div className='md:col-span-1 lg:col-span-8'>
                        <div>
                            <h3 className='text-white font-semibold text-4xl md:text-2xl lg:text-4xl text-center py-10'>Advantages of our company:</h3>
                        </div>
                        <div className='mx-4 md:mx-10 space-y-4 pb-5'>
                            <div className='bg-white rounded-2xl px-4 py-2'>
                                <h3 className='text-xl md:text-[16px] lg:text-xl font-semibold'>Professionalism and Experience:</h3>
                                <h5 className='text-[16px] md:text-sm lg:text-lg'>Our team has in-depth knowledge and many years of experience in the field of visa and immigration services.</h5>
                            </div>
                            <div className='bg-white rounded-2xl px-4 py-2'>
                                <h3 className='text-xl md:text-[16px] lg:text-xl font-semibold'>Individual approach:</h3>
                                <h5 className='text-[16px] md:text-sm lg:text-lg'>We take into account all the characteristics and needs of each client, providing personalized service.</h5>
                            </div>
                            <div className='bg-white rounded-2xl px-4 py-2'>
                                <h3 className='text-xl md:text-[16px] lg:text-xl font-semibold'>Comprehensive service:</h3>
                                <h5 className='text-[16px] md:text-sm lg:text-lg'>We offer a full range of services, which allows you to resolve all issues related to visas and employment in the EU in one place.</h5>
                            </div>
                            <div className='bg-white rounded-2xl px-4 py-2'>
                                <h3 className='text-xl md:text-[16px] lg:text-xl font-semibold'>Partnership with employers:</h3>
                                <h5 className='text-[16px] md:text-sm lg:text-lg'>We cooperate with proven and reliable employers throughout Europe, which guarantees our clients access to the best vacancies.</h5>
                            </div>
                            <div className='bg-white rounded-2xl px-4 py-2'>
                                <h3 className='text-xl md:text-[16px] lg:text-xl font-semibold'>Support at all stages:</h3>
                                <h5 className='text-[16px] md:text-sm lg:text-lg'>We provide full support to the client from the first consultation to obtaining a visa or employment.</h5>
                            </div>
                            
                             
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
