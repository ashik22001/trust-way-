import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import Marquee from "react-fast-marquee";

import logo from '../../../../../../public/images/trust_logo.png'
import Image from 'next/image';
import Link from 'next/link';


export default function Work_Navbar() {
    return (
        <div>
            {/* part one */}
            <div className=' bg-black text-white px-5 flex  items-center justify-between'>

                {/* left site */}
                <div>

                    <ul className=' gap-x-3 py-4 flex '>
                        <li className=' text-[16px] font-semibold border-r-2 border-white px-3'>+48534207363</li>
                        <li className=' text-[16px] font-semibold border-r-2 border-white px-3'>info@endlesshorizons.pl</li>
                        <li className=' text-[16px] font-semibold  px-3'>Thanks to those we helped</li>
                    </ul>
                </div>

                {/* right site  */}
                <div>
                    <ul className=' gap-x-3 py-4 flex '>
                        <li className=' text-[16px] font-semibold border-r-2 border-white px-3 gap-x-2 flex items-center justify-center'>
                            <span>
                                <FaSquareFacebook className=' text-3xl  text-[#26579D] ' />
                            </span>
                            <span>
                                <FaInstagramSquare className=' text-3xl text-[#FF6117]' />
                            </span>
                            <span>
                                <IoLogoWhatsapp className=' text-3xl  text-[#008D00]' />
                            </span>

                        </li>
                        <li className=' text-[16px] font-semibold  px-3'>Request a consultation</li>
                    </ul>
                </div>
            </div>

            {/* part two */}
            <div>
                <div className=' bg-white grid grid-cols-12  items-center justify-center px-20 py-4'>

                    {/* left site */}
                    <div className=' col-span-2'>
                        <Image

                            src={logo}
                            className='h-14 w-40 '
                        >
                        </Image>
                    </div>

                    {/* right site */}

                    <div className=' col-span-9 items-center justify-center'>
                        <ul className=' flex  items-center justify-center gap-x-4'>
                            <li className=' text-lg font-[400] '>
                                <Link href="/" className="text-black hover:text-blue-600">
                                    Home page
                                </Link>
                                </li>
                            <li className=' text-lg font-[400] '>
                                 <Link href="/Work-Visa" className="text-black hover:text-blue-600">
                                    Work visas
                                </Link>
                                </li>
                            <li className=' text-lg font-[400] '>Tourist visas</li>
                             <Link href="/Study-Visa" className="text-black hover:text-blue-600">
                                    Study visas
                                </Link>
                            <li className=' text-lg font-[400] text-black'>Legalization</li>
                            <li className=' text-lg font-[400] text-black'>VFS Global</li>
                            <li className=' text-lg font-[400] text-black'>Visas for Belarus</li>

                        </ul>
                    </div>
                </div>
            </div>

            {/* part 3 */}

            <div className='  bg-black px-3'>
                <Marquee>
                    <h4 className=' text-lg font-[400] text-white py-1.5'>We are in touch 24/7, ready to answer any of your questions!
                    </h4>
                </Marquee>
            </div>
        </div>
    )
}
