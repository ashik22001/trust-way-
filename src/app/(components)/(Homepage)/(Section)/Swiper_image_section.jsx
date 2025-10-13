"use client"

import Image from 'next/image'
import React from 'react'

import founderimage from '../../../../../public/images/dmitriy_1.webp'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


export default function Swiper_image_section() {
    return (
        <div>
            {/* text  section */}

            <div className='  '>
                <h1 className='text-center font-semibold text-3xl md:text-4xl text-black py-10 border-b  border-black mb-10 mx-5'>The structure of our company</h1>
            </div>
            {/* image section */}
            <div className=' flex items-center justify-center border-b border-black mx-1 md:mx-3 pb-3'>
                <div className=' grid grid-cols-2 md:grid-cols-4 gap-x-1.5 md:gap-x-5 px-5 py-10 '>
                    <div className=''>
                        <Image
                            src={founderimage}
                            alt="Megh cloud"

                            className="h-[250px] md:h-[350px] w-full  "
                        />
                        <div className=' bg-[#DADADA] py-3 px-4 space-y-2'>
                            <h1 className=' text-xl font-semibold text-black'>Dmitry Igorevich</h1>
                            <h5 className='text-sm text-[16px] font-semibold text-black'>CO-FOUNDER & CO-CEO</h5>
                        </div>
                    </div>
                    <div className=''>
                        <Image
                            src={founderimage}
                            alt="Megh cloud"

                            className="h-[250px] md:h-[350px] w-full  "
                        />
                        <div className=' bg-[#DADADA] py-3 px-4 space-y-2'>
                            <h1 className=' text-xl font-semibold text-black'>Dmitry Igorevich</h1>
                            <h5 className=' text-[16px] font-semibold text-black'>CO-FOUNDER & CO-CEO</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* image section */}
            <div className=' flex flex-row items-center justify-center border-b border-black mx-1 md:mx-3 pb-3'>
                <div className=' grid grid-cols-2 md:grid-cols-4 gap-x-1.5 md:gap-x-5 px-5 py-10 '>
                    <div className=''>
                        <Image
                            src={founderimage}
                            alt="Megh cloud"

                            className="h-[250px] md:h-[350px] w-full  "
                        />
                        <div className=' bg-[#DADADA] py-3 px-4 space-y-2'>
                            <h1 className=' text-xl font-semibold text-black'>Dmitry Igorevich</h1>
                            <h5 className='text-sm text-[16px] font-semibold text-black'>CO-FOUNDER & CO-CEO</h5>
                        </div>
                    </div>
                    <div className=''>
                        <Image
                            src={founderimage}
                            alt="Megh cloud"

                            className="h-[250px] md:h-[350px] w-full  "
                        />
                        <div className=' bg-[#DADADA] py-3 px-4 space-y-2'>
                            <h1 className=' text-xl font-semibold text-black'>Dmitry Igorevich</h1>
                            <h5 className=' text-[16px] font-semibold text-black'>CO-FOUNDER & CO-CEO</h5>
                        </div>
                    </div>
                </div>
            </div>


            {/* image slide section */}
            <div className=' mx-5 md:mx-10  lg:mx-20 pb-3 my-10  gap-y-5'>
                {/* Custom Navigation Buttons */}
                <div className=" -top-10 right-0 flex space-x-3 z-20 ">
                    <button className="swiper-button-prev-custom bg-gray-300 hover:bg-gray-400 text-black px-4 py-3 rounded-full text-3xl font-sembold">
                        <FaArrowAltCircleLeft />

                    </button>
                    <button className="swiper-button-next-custom bg-gray-300 hover:bg-gray-400 text-black px-4 py-3 rounded-full text-3xl font-semibold">
                        <FaArrowAltCircleRight />

                    </button>
                </div>

                <Swiper

                    breakpoints={{
                        // if width is maximum 640

                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },

                        // if width maximum 768px 

                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        // Tailwind: lg = 1024px → show 5 slides
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },

                        // Tailwind: lg = 1024px → show 5 slides
                        1440: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        // below 640px (mobile) → show 1 or 2
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Pagination, Navigation]}
                    className="mySwiper mt-10"
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
                        <div className=''>
                            <Image
                                src={founderimage}
                                alt="Megh cloud"

                                className="h-[250px] w-full  "
                            />
                            <div className=' bg-[#DADADA] py-3 px-4 space-y-1'>
                                <h1 className=' text-lg font-semibold text-black text-center'>Dmitry Igorevich</h1>
                                <h1 className=' text-[14px] font-semibold text-black text-center'>CO-FOUNDER & CO-CEO</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <Image
                                src={founderimage}
                                alt="Megh cloud"

                                className="h-[250px] w-full  "
                            />
                            <div className=' bg-[#DADADA] py-3 px-4 space-y-1'>
                                <h1 className=' text-lg font-semibold text-black text-center'>Dmitry Igorevich</h1>
                                <h1 className=' text-[14px] font-semibold text-black text-center'>CO-FOUNDER & CO-CEO</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <Image
                                src={founderimage}
                                alt="Megh cloud"

                                className="h-[250px] w-full  "
                            />
                            <div className=' bg-[#DADADA] py-3 px-4 space-y-1'>
                                <h1 className=' text-lg font-semibold text-black text-center'>Dmitry Igorevich</h1>
                                <h1 className=' text-[14px] font-semibold text-black text-center'>CO-FOUNDER & CO-CEO</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <Image
                                src={founderimage}
                                alt="Megh cloud"

                                className="h-[250px] w-full  "
                            />
                            <div className=' bg-[#DADADA] py-3 px-4 space-y-1'>
                                <h1 className=' text-lg font-semibold text-black text-center'>Dmitry Igorevich</h1>
                                <h1 className=' text-[14px] font-semibold text-black text-center'>CO-FOUNDER & CO-CEO</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <Image
                                src={founderimage}
                                alt="Megh cloud"

                                className="h-[250px] w-full  "
                            />
                            <div className=' bg-[#DADADA] py-3 px-4 space-y-1'>
                                <h1 className=' text-lg font-semibold text-black text-center'>Dmitry Igorevich</h1>
                                <h1 className=' text-[14px] font-semibold text-black text-center'>CO-FOUNDER & CO-CEO</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <Image
                                src={founderimage}
                                alt="Megh cloud"

                                className="h-[250px] w-full  "
                            />
                            <div className=' bg-[#DADADA] py-3 px-4 space-y-1'>
                                <h1 className=' text-lg font-semibold text-black text-center'>Dmitry Igorevich</h1>
                                <h1 className=' text-[14px] font-semibold text-black text-center'>CO-FOUNDER & CO-CEO</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <Image
                                src={founderimage}
                                alt="Megh cloud"

                                className="h-[250px] w-full  "
                            />
                            <div className=' bg-[#DADADA] py-3 px-4 space-y-1'>
                                <h1 className=' text-lg font-semibold text-black text-center'>Dmitry Igorevich</h1>
                                <h1 className=' text-[14px] font-semibold text-black text-center'>CO-FOUNDER & CO-CEO</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=''>
                            <Image
                                src={founderimage}
                                alt="Megh cloud"

                                className="h-[250px] w-full  "
                            />
                            <div className=' bg-[#DADADA] py-3 px-4 space-y-1'>
                                <h1 className=' text-lg font-semibold text-black text-center'>Dmitry Igorevich</h1>
                                <h1 className=' text-[14px] font-semibold text-black text-center'>CO-FOUNDER & CO-CEO</h1>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>


        </div>
    )
}
