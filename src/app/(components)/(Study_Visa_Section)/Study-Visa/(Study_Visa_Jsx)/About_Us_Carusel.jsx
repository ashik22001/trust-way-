'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import imagecarusel from '../../../../../../public/Study_Visa_image/atiya.png'
import imagecarusel1 from '../../../../../../public/Study_Visa_image/dowlet.png'
import imagecarusel2 from '../../../../../../public/Study_Visa_image/abc.png'


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Navigation, Autoplay } from 'swiper/modules';
import { useAuth } from '../../../../../../Context/AuthContext/AuthContext';
import { useEffect } from 'react';
import { FaRegStar } from "react-icons/fa";



export default function About_Us_Carusel() {


    // context api state coll 

    const { About_Say, setAbout_Say, } = useAuth()



    // fetch navbar api all data 


    useEffect(() => {
        fetch('http://localhost:3000/Study-About-Us-Api')
            .then(res => res.json())
            .then(data => {
                setAbout_Say(data)
            })
    }, []) // ✅ runs only once


    console.log('About_Say', About_Say)

    return (
        <div className='bg-gradient-to-r from-[#040A63] to-[#2860A2] '>
            {/* header text  */}

            <div>
                <h3 className='text-2xl md:text-3xl font-semibold text-center pt-6 uppercase text-white '>What they say about us</h3>
                <h5 className=' text-sm md:text-[16px] font-normal pt-2 text-center text-white '>Live in the city of your dreams. Build your career in more than 28 countries.</h5>
            </div>

            {/* carusel section  */}

            <div className=' py-10 px-5 md:px-10  lg:px-40 '>
                {
                    About_Say.length > 0 ? (
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',

                            }}
                            e

                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 1.5,
                                },
                                1024: {
                                    slidesPerView: 1.8,
                                },
                            }}

                            centeredSlides={true}        // Center active slide
                            spaceBetween={20}            // Space between slides
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,

                                pauseOnMouseEnter: true,
                            }}


                            // loop={About_Say.length > 3}
                            pagination={{
                                clickable: true,

                            }}
                            observer={true}
                            observeParents={true}

                            modules={[Autoplay, Pagination]}
                            className="mySwiper"

                        >

                            {
                                About_Say.slice(-10).map((data, index) => (

                                    <SwiperSlide key={data?._id || index}>
                                        <div className=' bg-white  p-5 rounded-lg shadow-2xs'>
                                            {/* section 1 */}
                                            <div className=' flex gap-x-5'>
                                                <div>
                                                    <img

                                                        src={data?.Choose_Image}
                                                        className=' h-14 w-14 md:h-24 md:w-24 '
                                                        alt='image1'
                                                    >
                                                    </img>
                                                </div>
                                                <div className=' md:pt-2'>
                                                    <h2 className=' text-[16px] md:text-lg lg:text-xl font-bold'>Name : {data?.Poster_Name}</h2>
                                                    <h2 className=' text-[16px] md:text-lg lg:text-xl font-bold'>Country : {data?.Country_Name}</h2>
                                                </div>
                                            </div>

                                            {/* section 2 */}


                                            <div>
                                                <p className=' text-[12px] md:text-[15px] font-semibold py-5'>{data.Description} </p>
                                            </div>

                                            {/* section 3 */}
                                            <div className=' flex justify-between items-center'>
                                                <div>
                                                    <ul className="flex gap-x-1">
                                                        {Array.from({ length: 5 }).map((_, i) => (
                                                            <li key={i}>
                                                                <FaRegStar
                                                                    className={` text-[16px] md:text-lg lg:2xl xl:text-3xl font-semibold ${i < Number(data.Rating) ? 'text-yellow-500' : 'text-gray-300'
                                                                        }`}
                                                                />
                                                            </li>
                                                        ))}
                                                    </ul>

                                                </div>
                                                <div>
                                                    <h3 className=' text-[16px] md:text-lg lg:text-xl font-extrabold text-[#1E1A9A]'>Trust Way Global</h3>
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>

                                ))
                            }

                        </Swiper>
                    ) : (
                        <p>No data found </p>
                    )
                }

            </div>
        </div>
    )
}
