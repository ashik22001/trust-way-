import Image from 'next/image'
import React from 'react'

import logo from '../../../../../../public/images/trust_logo.png'
import { FaSquarePhone } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from 'lucide-react';


export default function Study_Footer() {
    return (
        <div>
            {/* footer first section  */}

            <div className='bg-[#150047]'>
                {/* footer  part 1 */}
                <div className='   grid md:grid-cols-4 lg:grid-cols-5 px-5 md:px-10 lg:px-14 xl:px-20 py-5 border-b-2 border-[#8A80A3] gap-x-10'>

                    {/* col 1  */}
                    <div className=' col-span-1'>
                        {/* logo section  */}

                        <div className=' flex items-center justify-center'>
                            <Image
                                src={logo}
                                alt='image1'
                                className=' h-20 w-60 pb-2 '
                            >

                            </Image>
                        </div>
                        <h5 className=' text-[16px] font-semibold text-white text-center px-[10%]' >Trust Way Global is your reliable consultant for education abroad.</h5>

                        {/* phone number section  */}
                        <div className=' flex flex-col items-center justify-center py-5 space-y-1'>
                            <div className=' flex items-center gap-x-2'>
                                <span>
                                    <span > <FaWhatsappSquare className='text-xl text-white' /></span>
                                </span>
                                <h4 className=' text-[16px] text-white'>+8801624254327</h4>
                            </div>
                            <div className=' flex items-center gap-x-2'>
                                <span>
                                    <span > <FaSquarePhone className='text-xl text-white' /></span>
                                </span>
                                <h4 className=' text-[16px] text-white'>+8801624254328</h4>
                            </div>
                            <div className=' flex items-center gap-x-2'>
                                <span>
                                    <span > <FaPhoneVolume className='text-xl text-white' /></span>
                                </span>
                                <h4 className=' text-[16px] text-white'>+8801624254329</h4>
                            </div>
                            <div className=' flex items-center gap-x-2'>
                                <span>
                                    <span > <FaPhoneVolume className='text-xl text-white' /></span>
                                </span>
                                <h4 className=' text-[16px] text-white'>+8801712347288</h4>
                            </div>
                            <div className=' flex items-center gap-x-2'>
                                <span>
                                    <span > <MdEmail className='text-xl text-white' /></span>
                                </span>
                                <h4 className=' text-[16px] text-white'>info@trustwayglobal.com</h4>
                            </div>
                        </div>

                        {/* location section  */}

                        <div>
                            <p className=' text-lg font-semibold text-white text-center'>Location : </p>
                            <p className=' text-[16px] font-semibold text-white text-center'>3rd Floor D3, House:15, Road:07, Gulshan-1, Gulshan Dhaka,Bangladesh </p>

                        </div>
                    </div>

                    {/* col 2  */}

                    <div className=' col-span-1'>
                        <div className=' flex flex-col items-center justify-center py-5 space-y-3'>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Austria</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Belgium</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Bulgaria</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Cyprus</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Denmark</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Estonia</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Finland</h4>
                            </div>
                           
                            

                        </div>
                    </div>
                    {/* col 2  */}

                    <div className=' col-span-1'>
                        <div className=' flex flex-col items-center justify-center py-5 space-y-3'>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in France</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Germany</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Ireland</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Italy</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Latvia</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Lithuania</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Norway</h4>
                            </div>
                           
                            

                        </div>
                    </div>
                    {/* col 2  */}

                    <div className=' col-span-1'>
                        <div className=' flex flex-col items-center justify-center py-5 space-y-3'>

                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Portugal</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Romania</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Slovakia</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Slovenia</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Sweden</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Switzerland</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Australia</h4>
                            </div>
                            

                        </div>
                    </div>
                    {/* col 2  */}

                    <div className=' col-span-1'>
                        <div className=' flex flex-col items-center justify-center py-5 space-y-3'>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Canada</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in the UK</h4>
                            </div>
                            <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in the USA</h4>
                            </div>
                                  <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Poland</h4>
                            </div>
                             <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in New Zealand</h4>
                            </div>

                             <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Austria</h4>
                            </div>
                             <div className='  items-center gap-x-2'>

                                <h4 className=' text-[16px] text-white'>Study in Romania</h4>
                            </div>
                                                      

                        </div>
                    </div>

                </div>

                {/* footer part 2 */}

                <div className=' px-5 md:px-10 lg:px-14 xl:px-20'>
                    <ul className=' md:flex items-center justify-center py-3 gap-x-5 text-center'>
                        
                        <li className=' text-white text-lg font-normal '>Home</li>
                        <li className=' text-white text-lg font-normal '>Work Visas</li>
                        <li className=' text-white text-lg font-normal '>Tourist Visas</li>
                        <li className=' text-white text-lg font-normal '>Student Visas</li>
                        <li className=' text-white text-lg font-normal '>VFS Global</li>
                        <li className=' text-white text-lg font-normal '>Visas for Belarus</li>
                        
                    </ul>
                </div>
            </div>

            {/* footer second section  */}

            <div className=' bg-black  px-[15%] py-8'>
                <p className=' text-center text-white text-lg '>Trust Way Global </p>
            </div>
        </div>
    )
}
