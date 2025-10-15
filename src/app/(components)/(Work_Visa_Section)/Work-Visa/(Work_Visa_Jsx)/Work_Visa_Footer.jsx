import Image from 'next/image'
import React from 'react'

import logo from '../../../../../../public/images/trust_logo.png'
import { FaSquarePhone } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


import { FaWhatsappSquare } from "react-icons/fa";
import Link from 'next/link';


export default function Work_Visa_Footer() {
    return (
        <div>
            {/* footer first section  */}

            <div className='bg-[#150047]'>
            {/* footer  part 1 */}
            <div className='   grid md:grid-cols-2 px-[10%] py-5 border-b-2 border-[#8A80A3]'>

                {/* left site  */}
                <div className=' col-span-1'>
                    {/* logo section  */}

                    <div className=' flex items-center justify-center'>
                        <Image
                            src={logo}

                            className=' h-20 w-60 pb-2 '
                        >

                        </Image>
                    </div>
                    <h5 className=' text-[16px] font-semibold text-white text-center px-[10%]' >Trust Way Global is your trusted consultant for working abroad.</h5>

                    {/* phone number section  */}
                    <div className=' flex flex-col items-center justify-center py-5 space-y-1'>
                        <div className=' flex items-center gap-x-2'>
                            <span>
                                <span > <FaWhatsappSquare className='text-xl text-white' /></span>
                            </span>
                            <h4 className=' text-lg text-white'>+8801624254327</h4>
                        </div>
                        <div className=' flex items-center gap-x-2'>
                            <span>
                                <span > <FaWhatsappSquare className='text-xl text-white' /></span>
                            </span>
                            <h4 className=' text-lg text-white'>+8801624254324</h4>
                        </div>
                        <div className=' flex items-center gap-x-2'>
                            <span>
                                <span > <FaWhatsappSquare className='text-xl text-white' /></span>
                            </span>
                            <h4 className=' text-lg text-white'>+8801624254324</h4>
                        </div>
                        <div className=' flex items-center gap-x-2'>
                            <span>
                                <span > <FaWhatsappSquare className='text-xl text-white' /></span>
                            </span>
                            <h4 className=' text-lg text-white'>+8801712347288</h4>
                        </div>
                        <div className=' flex items-center gap-x-2'>
                            <span>
                                <span > <MdEmail className='text-xl text-white' /></span>
                            </span>
                            <h4 className=' text-lg text-white'>trustwayglobal@gmail.com</h4>
                        </div>
                         
                    </div>

                    {/* location section  */}

                    <div>
                        <p className=' text-lg font-semibold text-white text-center'>Location : </p>
                        <p className=' text-lg font-semibold text-white text-center'> 3rd Floor D3, House:15, Road:07, Gulshan-1, Gulshan Dhaka,Bangladesh  </p>

                    </div>
                </div>

                {/* right site  */}

                <div className=' col-span-1 mt-16'>
                    <div className=' flex flex-col items-center justify-center py-5 space-y-1 mt-10 md:mt-0'>
                        <div className='  items-center gap-x-2'>
                            
                            <h4 className=' text-lg text-white'>Work in the EU</h4>
                        </div>
                        <div className='  items-center gap-x-2'>
                            
                            <h4 className=' text-lg text-white'>Work in the Poland</h4>
                        </div>
                        <div className='  items-center gap-x-2'>
                            
                            <h4 className=' text-lg text-white'>Work in the Germany</h4>
                        </div>
                        <div className='  items-center gap-x-2'>
                            
                            <h4 className=' text-lg text-white'>Work in the United Kingdom </h4>
                        </div>
                        <div className='  items-center gap-x-2'>
                            
                            <h4 className=' text-lg text-white'>Work in the Malaysia</h4>
                        </div>
                        <div className='  items-center gap-x-2'>
                            
                            <h4 className=' text-lg text-white'>Work in the Saudi Arabia</h4>
                        </div>
                        <div className='  items-center gap-x-2'>
                            
                            <h4 className=' text-lg text-white'>Work in the Romaina</h4>
                        </div>
                        <div className='  items-center gap-x-2'>
                            
                            <h4 className=' text-lg text-white'>Work in the Qatar</h4>
                        </div>
                        <div className='  items-center gap-x-2'>
                            
                            <h4 className=' text-lg text-white'>Work in the Mexico</h4>
                        </div>
                       
                      
                    </div>
                </div>

            </div>

            {/* footer part 2 */}

            <div className=' px-20'>
                <ul className=' md:flex items-center justify-center py-3 gap-x-5 '>
                    <li className=' text-white text-lg font-normal '>
                        <Link href="/">Home</Link>
                    </li>
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
