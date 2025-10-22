'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import imagecaruse1 from '../../../../../../public/Study_Visa_image/EU_bg (1).png'
import imagecaruse2 from '../../../../../../public/Study_Visa_image/avstriaya (1).jpg'
import imagecaruse3 from '../../../../../../public/Study_Visa_image/belgiaya (1).jpg'
import imagecaruse4 from '../../../../../../public/Study_Visa_image/bolgariya.jpg'
import imagecaruse5 from '../../../../../../public/Study_Visa_image/daniaya.jpg'
import imagecaruse6 from '../../../../../../public/Study_Visa_image/kipr (1).jpg'


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Navigation, Autoplay } from 'swiper/modules';
import { useAuth } from '../../../../../../Context/AuthContext/AuthContext';
import { useEffect } from 'react';


export default function Popular_Place_Swiper() {


    // context api state coll 

    const { Popular_Destination_Image, setPopular_Destination_Image, } = useAuth()



    // fetch navbar api all data 


    useEffect(() => {
        fetch('http://localhost:3000/Popular-Destination-Image-Swiper-Api')
            .then(res => res.json())
            .then(data => {
                setPopular_Destination_Image(data)
            })
    }, []) // ✅ runs only once



    console.log('Popular_Destination_Image', Popular_Destination_Image)

    return (
        <div className='bg-gradient-to-r from-[#040A63] to-[#2860A2] '>
            {/* header text  */}

            <div>
                <h3 className=' px-3 text-2xl md:text-3xl font-bold md:font-semibold text-center pt-6 uppercase text-white '>Popular destinations to make your dream come true</h3>
                <h5 className=' text-[16px] font-normal pt-2 text-center text-white '>Live in the city of your dreams. Build your career in more than 28 countries.</h5>
            </div>

            {/* carusel section  */}

            <div className=' py-10 px-5 md:px-10 lg:px-20'>
                {
                    Popular_Destination_Image.length > 0 ? (

                        <Swiper

                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}

                            breakpoints={{



                                // if width is 640px

                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10
                                },

                                // if width is 768px

                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10
                                },

                                // if width is 1024px

                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 10
                                },

                                // if width is 1440px

                                1440: {
                                    slidesPerView: 3,
                                    spaceBetween: 10
                                },



                            }}

                            modules={[FreeMode, Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                        >
                            {
                                Popular_Destination_Image.slice(-10).map((data, index) => (
                                    <SwiperSlide key={data._id || index}>
                                        <img
                                            src={data.Choose_Image || 'Data Not Found'}
                                            alt=''
                                            className=' h-60 w-full'
                                        >
                                        </img>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                    ) : (
                        <p>No Data found</p>
                    )
                }

            </div>
        </div>
    )
}
