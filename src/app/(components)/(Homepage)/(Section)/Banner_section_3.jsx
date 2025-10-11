import React from 'react'

import flag from '../../../../../public/images/flag_flagshtok.webp'
import Image from 'next/image'


export default function Banner_section_3() {
    return (
        <div className="px-10">

            {/* background image */}
            <div className="bg-[url(/images/oblaka.webp)] h-lvh w-full bg-cover bg-center rounded-[50px]">

                <div className=' grid grid-cols-12'>

                    {/* left site */}
                    <div className=' col-span-3'>
                        <Image
                            src={flag}
                            alt="Megh cloud"

                            className="h-[100vh] w-[100vh] ml-10 object-contain flex items-center justify-center "
                        />
                    </div>
                    {/* right site */}
                    <div className='col-span-9'>
                        <div>
                            <h3 className='text-white font-semibold text-4xl text-center py-10'>Advantages of our company:</h3>
                        </div>
                        <div className='mx-10 space-y-4'>
                            <div className='bg-white rounded-2xl px-4 py-2'>
                                <h3 className='text-xl font-semibold'>Professionalism and Experience:</h3>
                                <h5 className='text-lg'>Our team has in-depth knowledge and many years of experience in the field of visa and immigration services.</h5>
                            </div>
                             <div className='bg-white rounded-2xl px-4 py-2'>
                                <h3 className='text-xl font-semibold'>Professionalism and Experience:</h3>
                                <h5 className='text-lg'>Our team has in-depth knowledge and many years of experience in the field of visa and immigration services.</h5>
                            </div>
                             <div className='bg-white rounded-2xl px-4 py-2'>
                                <h3 className='text-xl font-semibold'>Professionalism and Experience:</h3>
                                <h5 className='text-lg'>Our team has in-depth knowledge and many years of experience in the field of visa and immigration services.</h5>
                            </div>
                             <div className='bg-white rounded-2xl px-4 py-2'>
                                <h3 className='text-xl font-semibold'>Professionalism and Experience:</h3>
                                <h5 className='text-lg'>Our team has in-depth knowledge and many years of experience in the field of visa and immigration services.</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
