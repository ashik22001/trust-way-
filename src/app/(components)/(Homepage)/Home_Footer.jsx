import React from 'react'

import logo from '../../../../public/images/trust_logo.png'
import Image from 'next/image'
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";


export default function Home_Footer() {
    return (
        <div className=' bg-black'>

            {/* footer first part  */}

            <div className=' grid md:grid-cols-2  lg:grid-cols-4  pt-16 pb-10 px-3 md:px-10 lg:px-14 xl:px-20 gap-x-10  justify-center border-b-2 border-gray-500 space-y-10 md:space-y-0'>
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
                            
                            info@trustwayglobal.com
                            
                        </div>
                    </div>
                    {/* contact section */}
                    <div className=' mt-3'>
                        <div className=' text-lg border-b-2 border-white w-full text-white font-semibold'>
                            Contacts:
                        </div>

                        <div className=' text-lg  w-full text-white font-semibold'>
                            +8801712347288
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
                            3rd Floor D3, House:15, Road:07, Gulshan-1, Gulshan Dhaka,Bangladesh

                        </div>
                    </div>
                    {/* contact section */}
                    <div className=' pt-5'>
                        <div className=' text-lg border-b-2 border-white w-full text-white font-semibold'>
                            Business hours:
                        </div>

                        <div className=' text-lg  w-full text-white  font-semibold'>
                            Saturday - Thursday
                            8:00 - 10:00
                        </div>
                    </div>
                </div>
            </div>

            {/* footer second part  */}

            <div className='   py-3 px-5 md:px-20 gap-x-10  justify-center '>


                <ul className=' md:flex items-center justify-center gap-x-5'>
                    <li className=' text-[17px] font-semibold text-white'>Home</li>
                    <li className=' text-[17px] font-semibold text-white'>Work Visas</li>
                    <li className=' text-[17px] font-semibold text-white'>Tourist Visas</li>
                    <li className=' text-[17px] font-semibold text-white'>Student Visas</li>
                    <li className=' text-[17px] font-semibold text-white'>VFS Global</li>
                    <li className=' text-[17px] font-semibold text-white'>Visas for Belarus</li>
                
                </ul>

            </div>

            {/* footer third part  */}

            <div className='   py-4 px-20 gap-x-10  justify-center bg-[#121016]'>


                <h5 className='text-[16px] font-semibold text-white text-center'>
                    Trust Way Global
                </h5>

            </div>


        </div>
    )
}
