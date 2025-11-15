'use client'

import Image from 'next/image'
import React, { useContext, useState } from 'react'
import logo from '../../../../public/images/trust_logo.png'
import Marquee from "react-fast-marquee"
import Link from "next/link"

import { TiThMenu } from "react-icons/ti";
import { MdClose } from 'react-icons/md'
import { useAuth } from '../../../../Context/AuthContext/AuthContext'


export default function Navbar() {



  // context api state coll 

  const { navbar_news, setnavbar_news } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)



  // fetch navbar api all data 


  React.useEffect(() => {
    fetch('http://localhost:3000/Navbar-News-Form-api')
      .then(res => res.json())
      .then(data => {
        setnavbar_news(data)
      })
  }, []) // ✅ runs only once



  console.log('navbar data', navbar_news)


  // get navbar last latest news 

  const latest_News = navbar_news?.length > 0 ? navbar_news[navbar_news.length - 1].News_Title || " " : "No data avbailable"

  console.log('last text', latest_News)



  return (
    // ✅ Added top-0, z-50, and shadow for better sticky effect
   <div className='bg-black  max-w-[1536px] mx-auto'>
     <div className=" sticky top-0 z-50 shadow-md">

      {/* Navbar main container */}
      <div className="grid grid-cols-2 lg:grid-cols-12 items-center justify-between px-5 py-4">

        {/* Logo (left side) */}
        <div className="flex justify-start px-2 md:px-5 lg:px-10 lg:col-span-2">
          <Image
            src={logo}
            alt="Trust Logo"
            className="h-16 w-40"
          />
        </div>

        {/* Marquee (center for large screens) */}
        <div className="hidden lg:flex lg:col-span-9">
          <Marquee>
            <h4 className="text-white text-lg font-semibold">
              {latest_News}
            </h4>
          </Marquee>
        </div>

        {/* Menu icon (right side) */}
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex justify-end items-center lg:hidden lg:col-span-1">
          {isMenuOpen ? (
            <MdClose className='text-4xl text-white z-50' />
          ) : (
            <TiThMenu className='text-3xl text-white cursor-pointer' />
          )}
        </div>

      </div>

      {/* navbar ul section */}
      <div className=' hidden lg:block'>
        <ul className="text-lg font-semibold text-white grid grid-cols-3 px-2 text-center py-2 items-center justify-center">
          <li className="border-r-2 border-white h-4 flex items-center justify-center px-5">
            <Link href="/Work-Visa" className="text-white hover:text-blue-300">
              Work Visa
            </Link>
          </li>
          <li className="border-r-2 border-white h-4 flex items-center justify-center px-5">
            <Link href="/Turist-Visa" className="text-white hover:text-blue-300">
              Tourist Visa
            </Link>
            
            </li>
          <li className=" border-white h-4 flex items-center justify-center px-5">
            <Link href="/Study-Visa" className="text-white hover:text-blue-300">
              Study Visa
            </Link>
          </li>
          
        </ul>
      </div>

      {isMenuOpen && (
        <div className='bg-[#201A5C] h-screen w-full fixed top-0 left-0 z-30 p-5 transition-all duration-300'>

          <ul className='space-y-3 mt-5'>
            <li className='text-xl font-semibold text-white px-3 border-b border-white py-2'>
              <Link href="/Work-Visa" className="text-white hover:text-blue-300">
                Work Visa
              </Link>
            </li>
            <li className='text-xl font-semibold text-white px-3 border-b border-white py-2'>
              Tourist Visa
            </li>
            <li className='text-xl font-semibold text-white px-3 border-b border-white py-2'>
              <Link href="/Study-Visa" className="text-white hover:text-blue-300">
                Study Visa
              </Link>
            </li>
           
         
           
          </ul>
        </div>
      )}

    </div>
   </div>
  )
}
