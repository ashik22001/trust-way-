import Image from 'next/image'
import React from 'react'

import work_image from '../../../../../../public/work_visa_image/proizvodstvenniy_rabotnik.jpg'

export default function Works_Image_Card() {
    return (
        <div className=' bg-black'>


            {/* header text  */}

            <div>
                <h1 className=' text-3xl font-bold text-white py-5 text-center uppercase'>General vacancies for all countries:</h1>
            </div>

            {/* card section */}

            <div className=' px-40 grid grid-cols-3 gap-5 '>
                {/* card */}

                <div className=' h-[280px] w-full col-span-1 border-2 border-gray-500 rounded-md'>
                    <h4 className=' text-lg font-semibold text-white text-center py-2'>Производственный работник</h4>
                    <div className=' h-full'>
                        <Image
                            src={work_image}
                            className='h-[230px] w-full '
                        >
                        </Image>
                    </div>
                </div>
                <div className=' h-[280px] w-full col-span-1 border-2 border-gray-500 rounded-md'>
                    <h4 className=' text-lg font-semibold text-white text-center py-2'>Производственный работник</h4>
                    <div className=' h-full'>
                        <Image
                            src={work_image}
                            className='h-[230px] w-full '
                        >
                        </Image>
                    </div>
                </div>
                <div className=' h-[280px] w-full col-span-1 border-2 border-gray-500 rounded-md'>
                    <h4 className=' text-lg font-semibold text-white text-center py-2'>Производственный работник</h4>
                    <div className=' h-full'>
                        <Image
                            src={work_image}
                            className='h-[230px] w-full '
                        >
                        </Image>
                    </div>
                </div>
                <div className=' h-[280px] w-full col-span-1 border-2 border-gray-500 rounded-md'>
                    <h4 className=' text-lg font-semibold text-white text-center py-2'>Производственный работник</h4>
                    <div className=' h-full'>
                        <Image
                            src={work_image}
                            className='h-[230px] w-full '
                        >
                        </Image>
                    </div>
                </div>
                <div className=' h-[280px] w-full col-span-1 border-2 border-gray-500 rounded-md'>
                    <h4 className=' text-lg font-semibold text-white text-center py-2'>Производственный работник</h4>
                    <div className=' h-full'>
                        <Image
                            src={work_image}
                            className='h-[230px] w-full '
                        >
                        </Image>
                    </div>
                </div>
            </div>

            {/* footer text */}
            <div>
                <h1 className=' text-xl font-medium text-white py-5 text-center '>For current vacancies for each country, please check here: Facebook</h1>
            </div>
        </div>
    )
}
