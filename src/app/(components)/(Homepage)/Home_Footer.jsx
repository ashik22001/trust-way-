import React from 'react'

import logo from '../../../../public/images/helloworldl.jpg'
import Image from 'next/image'
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";


export default function Home_Footer() {
    return (
        <div className=' bg-black'>

            {/* footer first part  */}

            <div className=' grid grid-cols-4  pt-16 pb-10 px-20 gap-x-10  justify-center border-b-2 border-gray-500'>
                {/* logo section */}
                <div className=' items-center justify-center'>
                    {/* logo section */}
                    <div className='- flex items-center justify-center'>
                        <Image

                            src={logo}
                            className='h-16 w-40'
                        >

                        </Image>
                    </div>
                    {/* text sction */}
                    <div className=' text-center'>
                        <span className=' text-lg text-white'>by</span>
                        <br />
                        <span className=' text-lg text-white'>Trust Way Global</span>
                    </div>

                </div>

                {/* contact section */}
                <div className=' items-center justify-center'>
                    {/* emil section */}
                    <div>
                        <div className=' text-lg border-b-2 border-white w-full text-white font-semibold'>
                            Email:
                        </div>

                        <div className=' text-lg  w-full text-white font-semibold'>
                            info@endlesshorizons.pl
                        </div>
                    </div>
                    {/* contact section */}
                    <div className=' mt-3'>
                        <div className=' text-lg border-b-2 border-white w-full text-white font-semibold'>
                            Contacts:
                        </div>

                        <div className=' text-lg  w-full text-white font-semibold'>
                            +48 730 066 711
                        </div>

                    </div>
                </div>
                {/* Social media section  */}
                <div className=' items-center justify-center'>
                    <div className=' text-lg w-full text-white  font-bold'>
                        Social media:
                    </div>

                    <div className=' flex items-center gap-x-3 mt-3'>
                        <span>
                            <FaFacebookSquare className=' text-5xl text-white' />

                        </span>
                        <span>
                            <FaInstagramSquare className=' text-5xl text-white' />

                        </span>
                        <span>
                            <AiFillTikTok className=' text-5xl text-white' />

                        </span>


                    </div>
                </div>
                {/* address section  */}

                <div className=' items-center justify-center'>
                    {/* emil section */}
                    <div>
                        <div className=' text-lg  w-full text-white border-b-2 border-white font-semibold'>
                            Address:
                        </div>

                        <div className=' text-lg  w-full text-white font-semibold'>
                            al. Jana Pawła II 11, 00-823 Warszawa, Poland

                        </div>
                    </div>
                    {/* contact section */}
                    <div className=' pt-5'>
                        <div className=' text-lg border-b-2 border-white w-full text-white font-semibold'>
                            Business hours:
                        </div>

                        <div className=' text-lg  w-full text-white  font-semibold'>
                            Monday - Friday
                            10:00 - 17:00
                        </div>
                    </div>
                </div>
            </div>

            {/* footer second part  */}

            <div className='   py-3 px-20 gap-x-10  justify-center '>


                <ul className=' flex items-center justify-center gap-x-5'>
                    <li className=' text-[17px] font-semibold text-white'>hello world</li>
                    <li className=' text-[17px] font-semibold text-white'>hello world</li>
                    <li className=' text-[17px] font-semibold text-white'>hello world</li>
                    <li className=' text-[17px] font-semibold text-white'>hello world</li>
                    <li className=' text-[17px] font-semibold text-white'>hello world</li>
                    <li className=' text-[17px] font-semibold text-white'>hello world</li>
                    <li className=' text-[17px] font-semibold text-white'>hello world</li>
                </ul>

            </div>

            {/* footer third part  */}

            <div className='   py-4 px-20 gap-x-10  justify-center bg-[#121016]'>


                <h5 className='text-[16px] font-semibold text-white text-center'>
                    Endless Horizons | © 2024. All rights reserved.
                    <br />
                    Developer by astapov.by
                </h5>

            </div>


        </div>
    )
}
