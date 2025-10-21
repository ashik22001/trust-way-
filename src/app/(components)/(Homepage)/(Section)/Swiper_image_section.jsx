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
import { useAuth } from '../../../../../Context/AuthContext/AuthContext';


export default function Swiper_image_section() {


    // context api state coll 

    const { company_founder_image, setcompany_founder_image, company_founder_other_Image, setcompany_founder_other_Image } = useAuth()



    // fetch company founder image


    React.useEffect(() => {
        fetch('http://localhost:3000/Company-Founder-Image-Form-Api')
            .then(res => res.json())
            .then(data => {
                setcompany_founder_image(data)
            })
    }, []) // ✅ runs only once



    console.log('company_founder_image', company_founder_image)



    // fetch company other member image


    React.useEffect(() => {
        fetch('http://localhost:3000/Other-Founder-Swiper-Images-Form-Api')
            .then(res => res.json())
            .then(data => {
                setcompany_founder_other_Image(data)
            })
    }, []) // ✅ runs only once



    console.log('company_founder_other_Image', company_founder_other_Image)



    return (
        <div>
            {/* text  section */}

            <div className='  '>
                <h1 className='text-center font-semibold text-3xl md:text-4xl text-black py-10 border-b  border-black mb-10 mx-5'>The structure of our company</h1>
            </div>
            {/* image section 1 */}
            <div className='  items-center justify-center border-b border-black mx-1 md:mx-3 pb-3'>
                <div className=' grid grid-cols-2  md:grid-cols-none md:flex items-center justify-center gap-x-1.5 md:gap-x-5 px-5 py-10 '>
                    {
                        company_founder_image.slice(-2).map((data, index) => (
                            <div className=''>
                                <img
                                    src={data.Choose_Image}
                                    alt="Megh cloud"

                                    className="h-[250px] md:h-[350px] w-full  lg:w-[300px]  "
                                />
                                <div className=' bg-[#DADADA] py-3 px-4 space-y-2'>
                                    <h1 className=' text-xl font-semibold text-black'>{data?.User_Name || 'Name not found'}</h1>
                                    <h5 className='text-sm text-[16px] font-semibold text-black'>{data?.Position_Name || 'Position not found'}</h5>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>

            {/* image section 2 */}
            <div className='items-center justify-center border-b border-black mx-1 md:mx-3 pb-3'>
                <div className='grid grid-cols-2 md:grid-cols-none md:flex items-center justify-center gap-x-1.5 md:gap-x-5 px-5 py-10'>
                    {
                        // ✅ Show only 3rd and 4th last items
                        company_founder_image.slice(-4, -2).map((data, index) => (
                            <div key={index}>
                                <img
                                    src={data.Choose_Image}
                                    alt={data?.User_Name || "Founder image"}
                                    className="h-[250px] md:h-[350px] w-full lg:w-[300px]"
                                />
                                <div className='bg-[#DADADA] py-3 px-4 space-y-2'>
                                    <h1 className='text-xl font-semibold text-black'>
                                        {data?.User_Name || 'Name not found'}
                                    </h1>
                                    <h5 className='text-sm text-[16px] font-semibold text-black'>
                                        {data?.Position_Name || 'Position not found'}
                                    </h5>
                                </div>
                            </div>
                        ))
                    }
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

                {company_founder_other_Image.length > 0 ? (
                    <Swiper
                        breakpoints={{
                            0: { slidesPerView: 2, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            768: { slidesPerView: 3, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 20 },
                            1440: { slidesPerView: 5, spaceBetween: 20 },
                        }}
                        pagination={{ clickable: true }}
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
                        {company_founder_other_Image.slice(-10).map((data, index) => (
                            <SwiperSlide key={data._id || index}>
                                <div>
                                    <img
                                        src={data.Choose_Image}
                                        alt={data.User_Name || "Founder"}
                                        className="h-[250px] w-full object-cover"
                                    />
                                    <div className="bg-[#DADADA] py-3 px-4 space-y-1">
                                        <h1 className="text-lg font-semibold text-black text-center">
                                            {data.User_Name || "No name found"}
                                        </h1>
                                        <h1 className="text-[14px] font-semibold text-black text-center">
                                            {data.Position_Name || "No position found"}
                                        </h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p>Loading founders...</p>
                )}


            </div>


        </div>
    )
}
