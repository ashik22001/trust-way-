"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaHome, FaUsers, FaNetworkWired, FaNewspaper, FaProjectDiagram, FaWpforms, FaList, FaRegListAlt, FaThList, FaParachuteBox } from "react-icons/fa";
import { MdBroadcastOnHome, MdMedicalServices, MdOutlineMiscellaneousServices, MdMiscellaneousServices, MdCategory, MdFolderShared, MdContactPhone } from "react-icons/md";
import { GiLifeBar, GiNewspaper, GiChoice } from "react-icons/gi";
import { VscServerProcess } from "react-icons/vsc";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { FaFileWaveform } from 'react-icons/fa6';
import { FaEdit } from "react-icons/fa";
import { LuUsersRound } from 'react-icons/lu';
import { CiBoxList, CiViewList } from 'react-icons/ci';
import { FcBusinessContact } from 'react-icons/fc';

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
              <span className="text-xl text-black"><IoHome /></span>
              <span className=' text-black text-lg'>Home Page</span>
            </div>
            {renderDropdownIcon(AllUsersdropDown)}
          </div>
          {AllUsersdropDown && (
            <ul className=" mt-2 border-l border-gray-600 pl-4">
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'> Navbar News Section </Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'> Advangate Section Data</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'>Company Founder Image</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'>Company Swiper Image</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'>Working Visa Image Section Data</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'>Our Service Card Data </Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'>Faq Section Data</Link>
              </li>

            </ul>
          )}
        </li>


        {/* Work Visa */}
        <li className={`${menuItemClass(isActive("/"))} flex-col gap-3 py-2  px-5`}>
          <div className="flex items-center  justify-between cursor-pointer w-full  hover:bg-white hover:border-2 hover:border-[#E7E7E7] hover:w-full hover:p-1 hover:rounded-sm" onClick={() => setHomeDropdown(!homeDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-xl text-black"><FaNetworkWired /></span>
              <span className=' text-black text-lg'>Work Visa</span>
            </div>
            <div>
              {renderDropdownIcon(homeDropdown)}
            </div>
          </div>
          {homeDropdown && (
            <ul className=" mt-2 border-l border-gray-600 pl-4">
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'> Country Data </Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'> Visa jobs vacancies Section Data</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'>Coutry Visa Conditions Section</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'>Countrys Popular Place Section</Link>
              </li>


            </ul>
          )}
        </li>



        {/* Study Visa */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full  hover:bg-white hover:border-2 hover:border-[#E7E7E7] hover:w-full hover:p-1 hover:rounded-sm" onClick={() => setWorkDropdown(!workDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-xl text-black"><FaParachuteBox /></span>
              <span className=' text-black text-lg'>Study Visa</span>
            </div>
            {renderDropdownIcon(workDropdown)}
          </div>
          {workDropdown && (
            <ul className=" mt-2 border-l border-gray-600 pl-4">
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'> Our Service Card Section </Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'> Popular Destination Image Swiper Section</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'>Study Country Image Section</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'>What About Say Carusel Section</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers" className=' text-black hover:border-b border-blue-700 hover:text-blue-700 text-[16px]'>What About Say Carusel Section</Link>
              </li>


            </ul>
          )}
        </li>

        {/* Turist visa */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full hover:bg-white hover:border-2 hover:border-[#E7E7E7] hover:w-full hover:p-1 hover:rounded-sm" onClick={() => setProcessDropdown(!processDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-xl text-black"><PiStudentFill /></span>
              <span className=' text-black text-lg'>Turist Visa</span>
            </div>
            {renderDropdownIcon(processDropdown)}
          </div>
          {processDropdown && (
            <ul className=" mt-2  border-gray-500 ">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/Deshboard/DeshboardGallary/DeshboardGallaryDataList">Gallary All Data List</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/Deshboard/DeshboardGallary/DeshboardGallaryDataForm">Gallary Post Form </Link>
              </li>

            </ul>
          )}
        </li>



        {/* Legalization in Bangladesh */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full hover:bg-white hover:border-2 hover:border-[#E7E7E7] hover:w-full hover:p-1 hover:rounded-sm" onClick={() => setCareersDropdown(!careersDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-xl text-black"><SiAuth0 /></span>
              <span className=' text-black text-lg'>Legalization in Bangladesh</span>
            </div>
            {renderDropdownIcon(careersDropdown)}
          </div>
          {careersDropdown && (
            <ul className="ml-6 mt-2   pl-4">

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Title_Text_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Title_Text_List">Title Text List</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Card_Data_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Card_Data_List">About All Image List</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Three_Banner_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Three_Banner_List">Three Banner Data List</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/Deshboard_Last_Banner_Image_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardAbout/Deshboard_Last_Banner_Image_List">Banner Last Image List</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Last_Banner_Text_List"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Last_Banner_Text_List"> Last Banner Data List</Link>
              </li>


              {/* form */}

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Title_Text_Form"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Title_Text_Form">Title Text Form</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Image_Data"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Image_Data"> Banner All Image Form</Link>
              </li>
              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Three_Banner_Form"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Three_Banner_Form">Three Banner Data Form</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/Deshboard_Last_Banner_Image_Form"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardAbout/Deshboard_Last_Banner_Image_Form">Last Banner Image Form</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardAbout/About_Last_Banner_Text_Form"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardAbout/About_Last_Banner_Text_Form"> Last Banner Text Form</Link>
              </li>


            </ul>
          )}
        </li>

        {/* Appointment in Global */}


        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full hover:bg-white hover:border-2 hover:border-[#E7E7E7] hover:w-full hover:p-1 hover:rounded-sm" onClick={() => setContactus(!contactus)}>
            <div className="flex items-center gap-3">
              <span className="text-xl text-black"><FaFileWaveform /></span>
              <span className=' text-black text-lg'>Appointment in Global</span>
            </div>
            {renderDropdownIcon(contactus)}
          </div>
          {contactus && (
            <ul className="ml-6 mt-2   pl-4">


              <li className={menuItemClass(isActive("/Deshboard/DeshboardContact/DeshboardContactList"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/Deshboard/DeshboardContact/DeshboardContactList"> Contact All Data List</Link>
              </li>

              <li className={menuItemClass(isActive("/Deshboard/DeshboardContact/DeshboardContactForm"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardContact/DeshboardContactForm"> Contact All Data Form</Link>
              </li>

            </ul>
          )}
        </li>




      </div>
    </div>
  )
}

export default Deshboard_Menu