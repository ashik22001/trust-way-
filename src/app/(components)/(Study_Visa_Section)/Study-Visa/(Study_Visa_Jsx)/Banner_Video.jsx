import Image from 'next/image'
import React from 'react'

import logo from '../../../../../../public/images/trust_logo.png'

export default function Banner_Video() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/Study_Visa_image/video.mp4" type="video/mp4" />
      </video>

      {/* Optional dark overlay for text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content on top of video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">

        <Image
        src={logo}

        className=' h-32 w-72 md:h-40 md:w-80 pb-4'
        
        >

        </Image>
        <h1 className=" text-xl md:text-3xl font-bold mb-4">WE CAN HELP YOU GET AN EDUCATION IN ANY COUNTRY!</h1>
        <p className=" text-[16px] md:text-lg font-semibold max-w-2xl">
         We exist to find clarity in the chaos of the increasingly complex landscape of overseas education.

        </p>
      </div>
    </div>
  )
}
