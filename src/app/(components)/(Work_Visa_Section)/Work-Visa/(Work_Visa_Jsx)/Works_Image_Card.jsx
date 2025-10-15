import Image from 'next/image'
import React from 'react'

import work_image from '../../../../../../public/work_visa_image/proizvodstvenniy_rabotnik.jpg'
import image_1 from '../../../../../../public/work_visa_image/rabotnik_sklada.png'
import image_2 from '../../../../../../public/work_visa_image/rabotnik_stroiki.jpg'
import image_3 from '../../../../../../public/work_visa_image/rabotnik_zavoda.jpg'
import image_4 from '../../../../../../public/work_visa_image/sezoniii_raboti.jpg'
import image_5 from '../../../../../../public/work_visa_image/voditel_taxi.jpg'

export default function Works_Image_Card() {
    return (
        <div className=' bg-black'>


            {/* header text  */}

            <div>
                <h1 className=' text-3xl font-bold text-white py-5 text-center uppercase px-5 md:px-10 lg:px-0'>General vacancies for all countries:</h1>
            </div>

            {/* card section */}

            <div className=' px-5 md:px-10 xl:px-40 grid md:grid-cols-2  lg:grid-cols-3 gap-5 '>
                {/* card */}

                <div className=' h-[280px] w-full col-span-1 border-2 border-gray-500 rounded-md'>
                    <h4 className=' text-lg font-semibold text-white text-center py-2'>Production worker</h4>
                    <div className=' h-full'>
                        <Image
                            src={work_image}
                            className='h-[230px] w-full '
                        >
                        </Image>
                    </div>
                </div>
                <div className=' h-[280px] w-full col-span-1 border-2 border-gray-500 rounded-md'>
                    <h4 className=' text-lg font-semibold text-white text-center py-2'>Warehouse worker</h4>
                    <div className=' h-full'>
                        <Image
                            src={image_1}
                            className='h-[230px] w-full '
                        >
                        </Image>
                    </div>
                </div>
                <div className=' h-[280px] w-full col-span-1 border-2 border-gray-500 rounded-md'>
                    <h4 className=' text-lg font-semibold text-white text-center py-2'>Worker at a construction site</h4>
                    <div className=' h-full'>
                        <Image
                            src={image_2}
                            className='h-[230px] w-full '
                        >
                        </Image>
                    </div>
                </div>
                <div className=' h-[280px] w-full col-span-1 border-2 border-gray-500 rounded-md'>
                    <h4 className=' text-lg font-semibold text-white text-center py-2'>Factory worker</h4>
                    <div className=' h-full'>
                        <Image
                            src={image_3}
                            className='h-[230px] w-full '
                        >
                        </Image>
                    </div>
                </div>
                <div className=' h-[280px] w-full col-span-1 border-2 border-gray-500 rounded-md'>
                    <h4 className=' text-lg font-semibold text-white text-center py-2'>Seasonal work</h4>
                    <div className=' h-full'>
                        <Image
                            src={image_4}
                            className='h-[230px] w-full '
                        >
                        </Image>
                    </div>
                </div>

                 <div className=' h-[280px] w-full col-span-1 border-2 border-gray-500 rounded-md'>
                    <h4 className=' text-lg font-semibold text-white text-center py-2'>Taxi driver</h4>
                    <div className=' h-full'>
                        <Image
                            src={image_5}
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
