import React from 'react'
import Image from 'next/image'
import meghimage from '../../../../../public/images/oblako.webp'
import meghmiddleimage from '../../../../../public/images/oblako_2.jpeg'


export default function Banner_section_2() {
  return (
    <div className="relative">
      {/* text section div */}
      <div className="py-4 bg-white text-center leading-8 absolute top-0 left-0 w-full z-20">
        <h3 className=" text-sm  md:text-xl lg:text-2xl font-semibold px-5 md:px-10 text-[#010053]">
          Trust Way Global is a leading consulting company providing a full range of visa services and employment in the countries of the European Union.
        </h3>
      </div>

      {/* background image */}
      <div className="bg-[url(/images/original.webp)] h-lvh md:h-[600px] lg:h-[600px]  w-full bg-cover bg-center "></div>

      {/* megh image */}
      <div className="absolute -top-5 md:-top-8 lg:-top-5 z-30 hidden md:block ">
        <Image
          src={meghimage}
          alt="Megh cloud"
          width={300}  // <-- required
          height={300} // <-- required
          className="h-72 w-72 object-contain "
        />
      </div>
      <div className="absolute bottom-0 md:-bottom-0  lg:bottom-0 left-1/2 -translate-x-1/2 z-30 ">
        <Image
          src={meghmiddleimage}
          alt="Megh cloud"

          className="  h-[550px] w-[550px] pt-48 md:pt-0 object-contain flex items-center justify-center "
        />
      </div>
    </div>
  )
}
