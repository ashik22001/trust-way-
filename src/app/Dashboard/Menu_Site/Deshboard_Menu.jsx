"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaHome, FaUsers, FaNetworkWired, FaNewspaper, FaProjectDiagram, FaWpforms, FaList, FaRegListAlt, FaThList, FaParachuteBox } from "react-icons/fa";


import { IoIosArrowDown } from "react-icons/io";
import { FaFileWaveform } from 'react-icons/fa6';
import { IoHome } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { SiAuth0 } from "react-icons/si";



function Deshboard_Menu() {

  const pathname = usePathname();

  // Separate dropdown states
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [AllUsersdropDown, setAllUsers] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);
  const [processDropdown, setProcessDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [blogsDropdown, setBlogsDropdown] = useState(false);
  const [careersDropdown, setCareersDropdown] = useState(false);
  const [SharedFile, setSharedFile] = useState(false);
  const [contactus, setContactus] = useState(false);
  const [Donation, setDonation] = useState(false);


  const isActive = (href) => {
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  const menuItemClass = (active) =>
    `text-lg font-semibold flex gap-3 items-center  pb-4 ${active ? "text-[#9EFF00]" : "text-white"}`;

  const renderDropdownIcon = (open) =>
    <IoIosArrowDown className={`text-2xl transition-transform text-black ${open ? "rotate-180" : "rotate-0"}`} />;



  return (
    <div className=" h-full ">
      <div className="max-w-[1596px] ">

        {/* Home page */}


        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full hover:bg-white hover:border-2 hover:border-[#E7E7E7] hover:w-full hover:p-1 hover:rounded-sm" onClick={() => setAllUsers(!AllUsersdropDown)}>
            <div className="flex items-center gap-3 ">
              <span className="text-lg text-black"><IoHome /></span>
              <span className=' text-black text-[16px]'>Home Page</span>
            </div>
            {renderDropdownIcon(AllUsersdropDown)}
          </div>
          {AllUsersdropDown && (
            <ul className=" mt-2 border-l border-gray-600 pl-4">
              <li className={`${menuItemClass(isActive('/Dashboard/Home/Navbar-News'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/Dashboard/Home/Navbar-News" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'> Navbar News Section </Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'> Advangate Section Data</Link>
              </li>
              <li className={`${menuItemClass(isActive('/Dashboard/Home/Company-Founder-Images'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/Dashboard/Home/Company-Founder-Images" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>Company Founder Image</Link>
              </li>
              <li className={`${menuItemClass(isActive('/Dashboard/Home/Other-Founder-Swiper-Images'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/Dashboard/Home/Other-Founder-Swiper-Images" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>Other  Founder Swiper Image</Link>
              </li>
              <li className={`${menuItemClass(isActive('/Dashboard/Home/Visa-Result-Images'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/Dashboard/Home/Visa-Result-Images" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>Working Visa Image Section Data</Link>
              </li>
              <li className={`${menuItemClass(isActive('/Dashboard/Home/Our-Services'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/Dashboard/Home/Our-Services" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>Our Service Card Data </Link>
              </li>
              <li className={`${menuItemClass(isActive('/Dashboard/Home/Faq-Data'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/Dashboard/Home/Faq-Data" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>Faq Section Data</Link>
              </li>

            </ul>
          )}
        </li>


        {/* Work Visa */}
        <li className={`${menuItemClass(isActive("/"))} flex-col gap-3 py-2  px-5`}>
          <div className="flex items-center  justify-between cursor-pointer w-full  hover:bg-white hover:border-2 hover:border-[#E7E7E7] hover:w-full hover:p-1 hover:rounded-sm" onClick={() => setHomeDropdown(!homeDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-lg text-black"><FaNetworkWired /></span>
              <span className=' text-black text-[16px]'>Work Visa</span>
            </div>
            <div>
              {renderDropdownIcon(homeDropdown)}
            </div>
          </div>
          {homeDropdown && (
            <ul className=" mt-2 border-l border-gray-600 pl-4">
              <li className={`${menuItemClass(isActive('/Dashboard/Work-Visa/Country-Data-Form-List'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/Dashboard/Work-Visa/Country-Data-Form-List" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'> Country Data </Link>
              </li>
              <li className={`${menuItemClass(isActive('/Dashboard/Work-Visa/Visa-jobs-vacancies-Section-Data-List'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/Dashboard/Work-Visa/Visa-jobs-vacancies-Section-Data-List" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'> Visa jobs vacancies Section Data</Link>
              </li>
              <li className={`${menuItemClass(isActive('/Dashboard/Work-Visa/Coutry-Visa-Conditions-Section-List'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/Dashboard/Work-Visa/Coutry-Visa-Conditions-Section-List" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>Coutry Visa Conditions Section</Link>
              </li>
              <li className={`${menuItemClass(isActive('/Dashboard/Home/Other-Founder-Swiper-Images'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/Dashboard/Home/Other-Founder-Swiper-Images" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>Countrys Popular Place Section</Link>
              </li>
            </ul>
          )}
        </li>



        {/* Study Visa */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full  hover:bg-white hover:border-2 hover:border-[#E7E7E7] hover:w-full hover:p-1 hover:rounded-sm" onClick={() => setWorkDropdown(!workDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-lg text-black"><FaParachuteBox /></span>
              <span className=' text-black text-[16px]'>Study Visa</span>
            </div>
            {renderDropdownIcon(workDropdown)}
          </div>
          {workDropdown && (
            <ul className=" mt-2 border-l border-gray-600 pl-4">
              <li className={`${menuItemClass(isActive('/Dashboard/Study-Visa/Study-Our-Service-Table'))} xl:text-lg lg:text-[16px]`}>
                <Link href='/Dashboard/Study-Visa/Study-Our-Service-Table' className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'> Our Service Card Section </Link>
              </li>
              <li className={`${menuItemClass(isActive('/Dashboard/Study-Visa/Popular-Place-Swiper-Table'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/Dashboard/Study-Visa/Popular-Place-Swiper-Table" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'> Popular Destination Image Swiper Section</Link>
              </li>
              <li className={`${menuItemClass(isActive('/Dashboard/Study-Visa/Study-Country-Card-Table'))} xl:text-lg lg:text-[16px]`}>
                <Link href='/Dashboard/Study-Visa/Study-Country-Card-Table' className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>Study Country Image Section</Link>
              </li>
              <li className={`${menuItemClass(isActive('/Dashboard/Study-Visa/About-Us-Carusel-Table'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/Dashboard/Study-Visa/About-Us-Carusel-Table" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>What About Say Carusel Section</Link>
              </li>
             

            </ul>
          )}
        </li>

        {/* Turist visa */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full hover:bg-white hover:border-2 hover:border-[#E7E7E7] hover:w-full hover:p-1 hover:rounded-sm" onClick={() => setProcessDropdown(!processDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-lg text-black"><PiStudentFill /></span>
              <span className=' text-black text-[16px]'>Turist Visa</span>
            </div>
            {renderDropdownIcon(processDropdown)}
          </div>
          {processDropdown && (
            <ul className=" mt-2  border-gray-500 ">
             
             <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>What About Say Carusel Section</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>What About Say Carusel Section</Link>
              </li>

            </ul>
          )}
        </li>



        {/* Legalization in Bangladesh */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full hover:bg-white hover:border-2 hover:border-[#E7E7E7] hover:w-full hover:p-1 hover:rounded-sm" onClick={() => setCareersDropdown(!careersDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-lg text-black"><SiAuth0 /></span>
              <span className=' text-black text-[16px]'>Legalization in Bangladesh</span>
            </div>
            {renderDropdownIcon(careersDropdown)}
          </div>
          {careersDropdown && (
            <ul className="ml-6 mt-2   pl-4">

              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>What About Say Carusel Section</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>What About Say Carusel Section</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>What About Say Carusel Section</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Appointment in Global */}


        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full hover:bg-white hover:border-2 hover:border-[#E7E7E7] hover:w-full hover:p-1 hover:rounded-sm" onClick={() => setContactus(!contactus)}>
            <div className="flex items-center gap-3">
              <span className="text-lg text-black"><FaFileWaveform /></span>
              <span className=' text-black text-[16px]'>Appointment in Global</span>
            </div>
            {renderDropdownIcon(contactus)}
          </div>
          {contactus && (
            <ul className="ml-6 mt-2   pl-4">


              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>What About Say Carusel Section</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-sm'>What About Say Carusel Section</Link>
              </li>

            </ul>
          )}
        </li>
      </div>
    </div>
  )
}

export default Deshboard_Menu