import Image from 'next/image'
import React from 'react'

import aroplane from '../../../../../public/images/layer-5.webp'


export default function Banner_section_1() {
  return (
    <div className='bg-[url(/images/layer-1.webp)] h-full w-full bg-cover bg-center'>
      <div className='bg-[url(/images/layer-2.webp)] h-[400px] md:h-[450px] lg:h-[550px] w-full bg-cover bg-center'>
        {/* text section */}
        <div>
          <div className='grid items-center justify-center py-5 md:py-10 lg:py-20 gap-y-3 px-3 md:px-0'>
            <h1 className=' text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center uppercase'>Trust Way Global</h1>
            <h4 className=' text-lg md:text-2xl lg:text-3xl font-semibold text-white text-center'>We will help you travel, study and work around the world!</h4>
          </div>

          {/* image section  */}

          <div>
            {/* <Image

              src={aroplane}

              className=' h-full w-full '

            >

            </Image> */}
          </div>
        </div>
      </div>
    </div>
  )
}
