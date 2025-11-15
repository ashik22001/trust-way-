"use client"

import Image from 'next/image'
import React from 'react'

import passportimage from '../../../../../public/images/Visa-17.webp'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useAuth } from '../../../../../Context/AuthContext/AuthContext';




export default function Work_result_image_section() {


    // context api state coll 

    const { Visa_Image, setVisa_Image } = useAuth()



    // fetch company founder image


    React.useEffect(() => {
        fetch('http://localhost:3000/Visa-Result-Image-Form-Api')
            .then(res => res.json())
            .then(data => {
                setVisa_Image(data)
            })
    }, []) // ✅ runs only once



    console.log('Visa_Image', Visa_Image)


    return (
        <div  className='max-w-[1536px] mx-auto'>


            {/* header text seciton */}
            <div className=' border-b-2 border-[#DADADA]'>

                <h1 className=' text-3xl font-[600] text-center text-black py-5'>The final result of working with us:</h1>

            </div>

            {/* swiper slider section */}

            <div className='  my-5 gap-y-5 border-b-2 border-[#DADADA] pb-10'>
                {/* Custom Navigation Buttons */}

                {Visa_Image.length > 0 ? (
                    <Swiper

                        breakpoints={{

                            // if width is 640px

                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },

                            // if width is 768px

                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },

                            // if width is 1024px

                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },

                            // if width is 1440px

                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },



                        }}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}

                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper mt-10 "
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom",
                        }}
                    >
                        {Visa_Image.slice(-10).map((data, index) => (
                            <SwiperSlide key={`${data._id || 'visa'}-${index}`}>
                                <div className=''>
                                    <img
                                        src={data.Choose_Image || ''}
                                        alt={data.User_Name || "Founder"}
                                        className="h-[180px] w-full rounded-2xl  "
                                    />
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
