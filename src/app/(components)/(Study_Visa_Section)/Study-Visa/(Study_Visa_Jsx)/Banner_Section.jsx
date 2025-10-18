import Image from 'next/image'
import React from 'react'

import menimage from '../../../../../../public/Study_Visa_image/people.jpg'
import imageversity from '../../../../../../public/Study_Visa_image/global.jpg'

import { Button } from '@/components/ui/button'




export default function Banner_Section() {
    return (
        <div className='  w-full bg-[#FFFFFF] grid md:grid-cols-2 items-center justify-center px-5  md:px-10 py-3'>

            {/* left section  */}

            <div className=' col-span-1 hidden md:block'>
                <Image

                    src={menimage}

                    className=' h-[550px]'

                >
                </Image>
            </div> 

            {/* right section  */}

            <div className=' bg-white shadow-lg shadow-gray-500 h-full lg:h-[500px] w-full col-span-1 rounded-2xl p-5'>
                <h3 className='text-lg md:text-2xl font-bold text-[#110078] text-center '>Welcome to “study visa” department!</h3>

                <p className='text-sm md:text-[16px] lg:text-lg 2xl:text-xl text-black py-10 font-[500] text-center'>
                    I am Natalia and I will help you with the admission to University: documents package preparation, submitting all documents to University, fill out the University’s application form, meeting at airport, finding accommodation , etc.
                </p>

                <div className="flex justify-center">
                    <Button className="text-white text-xl md:text-2xl rounded-xl md:rounded-2xl h-16 bg-[#110078] px-10">
                        Write Me
                    </Button>
                </div>

                <div className=' flex items-center justify-center py-4'>
                     <Image

                    src={imageversity}

                    className=' h-36 w-60 rounded-4xl'

                >

                </Image>
                </div>
            </div>
        </div>
    )
}
