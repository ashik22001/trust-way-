'use client'

import React, { useState } from 'react'
import { FaSquareFacebook } from "react-icons/fa6"
import { FaInstagramSquare } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import Marquee from "react-fast-marquee"
import Image from 'next/image'
import Link from 'next/link'
import { MdMenu, MdClose } from "react-icons/md"
import logo from '../../../../../../public/images/trust_logo.png'

export default function Work_Navbar() {
    // 👇 menu state
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
            {/* part one (top contact bar) */}
            <div className='hidden md:block'>
                <div className='bg-black text-white px-5 md:flex md:items-center md:justify-between'>
                    <div>
                        <ul className='gap-x-3 py-4 flex'> 
                            <li className='text-[16px] font-semibold border-r-2 border-white px-3'>+8801712347288</li>
                            <li className='text-[16px] font-semibold border-r-2 border-white px-3'>info@endlesshorizons.pl</li>
                            <li className='text-[16px] font-semibold px-3 hidden lg:block'>Thanks to those we helped</li>
                        </ul>
                    </div>

                    <div>
                        <ul className='gap-x-3 py-4 flex'>
                            <li className='text-[16px] font-semibold border-r-2 border-white px-3 gap-x-2 flex items-center justify-center'>
                                <FaSquareFacebook className='text-3xl text-[#26579D]' />
                                <FaInstagramSquare className='text-3xl text-[#FF6117]' />
                                <IoLogoWhatsapp className='text-3xl text-[#008D00]' />
                            </li>
                            <li className='text-[16px] font-semibold px-3'>Request a consultation</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* part two (main navbar) */}
            <div>
                <div className='bg-white grid lg:grid-cols-12 items-end lg:items-center lg:justify-center px-3 lg:px-5 xl:px-20 py-4'>
                    {/* left site */}
                    <div className='hidden lg:block md:col-span-2'>
                        <Image src={logo} className='h-14 w-40' alt='logo' />
                    </div>

                    {/* right site */}
                    <div className='hidden lg:block md:col-span-9 lg:col-span-10 items-center justify-center'>
                        <ul className='flex items-center justify-center gap-x-4 '>
                            <li className='text-lg font-[400]'>
                                <Link href='/' className='text-black hover:text-blue-600'>
                                    Home page
                                </Link>
                            </li>
                            <li className='text-lg font-[400]'>
                                <Link href='/Work-Visa' className='text-black hover:text-blue-600'>
                                    Work visas
                                </Link>
                            </li>
                            <li className='text-lg font-[400] text-black'>Tourist visas</li>
                            <li className='text-lg font-[400]'>
                                <Link href='/Study-Visa' className='text-black hover:text-blue-600'>
                                    Study visas
                                </Link>
                            </li>
                            <li className='text-lg font-[400] text-black'>Legalization</li>
                            <li className='text-lg font-[400] text-black'>VFS Global</li>
                            <li className='text-lg font-[400] text-black'>Visas for Belarus</li>
                        </ul>
                    </div>

                    {/* mobile menu header */}
                    <div className='flex justify-between items-center w-full lg:hidden'>
                        <div>
                            <Image src={logo} className='h-10 md:h-14 w-40' alt='logo' />
                        </div>

                        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='cursor-pointer'>
                            {isMenuOpen ? (
                                <MdClose className='text-4xl text-white z-50' />
                            ) : (
                                <MdMenu className='text-4xl text-black' />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile dropdown menu */}
            {isMenuOpen && (
                <div className='bg-[#201A5C] h-screen w-full fixed top-0 left-0 z-30 p-5 transition-all duration-300'>
                    <div>
                        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='cursor-pointer'>
                            {isMenuOpen ? (
                                <MdClose className='text-4xl text-white z-50' />
                            ) : (
                                <MdMenu className='text-4xl text-black' />
                            )}
                        </div>
                    </div>
                    <ul className='space-y-3 mt-5'>
                        <li className='text-xl font-semibold text-white px-3 border-b border-white py-2'>
                             <Link href='/' className='text-white hover:text-blue-600'>
                                    Home Page
                                </Link>
                        </li>
                        <li className='text-xl font-semibold text-white px-3 border-b border-white py-2'>
                             <Link href='/Work-Visa' className='text-white hover:text-blue-600'>
                                    Work visas
                                </Link>
                        </li>
                        <li className='text-xl font-semibold text-white px-3 border-b border-white py-2'>
                             <Link href='/Study-Visa' className='text-white hover:text-blue-600'>
                                    Study-Visa
                                </Link>
                        </li>
                        <li className='text-xl font-semibold text-white px-3 border-b border-white py-2'>Legalization</li>
                        <li className='text-xl font-semibold text-white px-3 border-b border-white py-2'>VFS Global</li>
                    </ul>
                </div>
            )}

            {/* part 3 (bottom marquee) */}
            <div className='bg-black px-3'>
                <Marquee>
                    <h4 className='text-lg font-[400] text-white py-1.5'>
                        We are in touch 24/7, ready to answer any of your questions!
                    </h4>
                </Marquee>
            </div>
        </div>
    )
}
