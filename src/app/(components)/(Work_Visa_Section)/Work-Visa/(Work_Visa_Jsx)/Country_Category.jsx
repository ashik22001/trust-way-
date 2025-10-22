'use client'

import { Button } from '@/components/ui/button'
import React from 'react'

import shipimage from '../../../../../../public/work_visa_image/ship.png'
import Image from 'next/image'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { useAuth } from '../../../../../../Context/AuthContext/AuthContext'


export default function Country_Category() {


  // context api state coll 

  const { Country_Name, setCountry_Name, } = useAuth()



  // fetch navbar api all data 


  React.useEffect(() => {
    fetch('http://localhost:3000/Country-Data-Form-Api')
      .then(res => res.json())
      .then(data => {
        setCountry_Name(data)
      })
  }, []) // ✅ runs only once



  console.log('Country_Name', Country_Name)



  return (
    <div className=' bg-[#2283C4]'>
      {/* header text  */}
      <h1 className=' text-4xl font-bold text-[#01018b] py-4 text-center'>We provide work visas to the following countries:</h1>

      {/* country section */}


      {/* pegination button section  */}
      <div className=' relative'>
        <div className=' flex items-center justify-between px-10 pt-10 '>
          <div className='swiper-button-prev-custom'>
            <FaArrowCircleLeft className=' text-4xl ' />

          </div>
          <div className='swiper-button-next-custom'>
            <FaArrowCircleRight className=' text-4xl ' />

          </div>
        </div>

        <div className=' px-28 -mt-12 pb-3'>
          {
            Country_Name.length > 0 ? (
              <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                spaceBetween={20}
                cssMode={true}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                
                mousewheel={true}
                keyboard={true}
                modules={[Mousewheel, Keyboard, Navigation]}
                className="mySwiper"
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 5 },
                  1440: { slidesPerView: 6 },
                }}
              >
                {Country_Name.map((data, index) => (
                  <SwiperSlide key={data._id || index}>
                    <div className="flex justify-center">
                      <Button className="text-lg font-[400] text-white bg-[#01018b] border-none h-14 px-8 hover:bg-[#E9E9E9] hover:text-black hover:shadow-md">
                        {data.Country_Name}
                      </Button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p>No Data Found</p>
            )
          }




        </div>

      </div>

      {/* image seciton */}

      <div className=' '>
        <Image
          src={shipimage}
          className='h-full w-full '
        ></Image>
      </div>
    </div>
  )
}
