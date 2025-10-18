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



export default function About_Us_Carusel() {
    return (
        <div className='bg-gradient-to-r from-[#040A63] to-[#2860A2] '>
            {/* header text  */}

            <div>
                <h3 className='text-2xl md:text-3xl font-semibold text-center pt-6 uppercase text-white '>What they say about us</h3>
                <h5 className=' text-sm md:text-[16px] font-normal pt-2 text-center text-white '>Live in the city of your dreams. Build your career in more than 28 countries.</h5>
            </div>

            {/* carusel section  */}

            <div className=' py-10 px-5 md:px-10  lg:px-40 '>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                    autoplay={{
                        delay: 2600,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
                        <Image

                            src={imagecarusel}
                            className=' h-80 w-150'
                            alt='image1'
                        >
                        </Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image

                            src={imagecarusel1}
                            className=' h-80 w-150'
                            alt='image2'

                        >
                        </Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image

                            src={imagecarusel2}
                            className=' h-80 w-150'
                            alt='image3'
                        >
                        </Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={imagecarusel}
                            className=' h-80 w-150'
                            alt='image3'
                        >
                        </Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image

                            src={imagecarusel1}
                            className=' h-80 w-150'
                            alt='image4'
                        >

                        </Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={imagecarusel2}
                            className=' h-80 w-150'
                            alt='image5'
                        >
                        </Image>
                    </SwiperSlide>
                 
                </Swiper>
            </div>
        </div>
    )
}
