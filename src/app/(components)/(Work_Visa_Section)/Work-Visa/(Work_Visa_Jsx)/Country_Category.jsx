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


export default function Country_Category() {
  return (
    <div>
      {/* header text  */}
      <h1 className=' text-4xl font-bold text-[#0000FF] py-4 text-center'>We provide work visas to the following countries:</h1>

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

        <div className=' px-28 -mt-12 '>
          <Swiper
            slidesPerView={1} // default for mobile
            slidesPerGroup={1}
            spaceBetween={20}
            cssMode={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            modules={[Mousewheel, Keyboard, Navigation]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 640px (small)
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px (medium)
              768: {
                slidesPerView: 3,
              },
              // when window width is >= 1024px (large)
              1024: {
                slidesPerView: 5,
              },
              // when window width is >= 1280px (xl)
              1440: {
                slidesPerView: 6,
              },
            }}
          >
            {Array(12)
              .fill(0)
              .map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="flex justify-center">
                    <Button className="text-lg font-[400] text-white bg-[#4545f5] border-none h-14 px-8 hover:bg-[#E9E9E9] hover:text-black hover:shadow-md">
                      EU Country
                    </Button>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>



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
