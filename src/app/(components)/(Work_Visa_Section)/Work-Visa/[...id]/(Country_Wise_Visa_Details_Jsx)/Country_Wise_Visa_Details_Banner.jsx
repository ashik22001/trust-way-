import { Button } from '@/components/ui/button'
import React from 'react'
import { GiIndianPalace } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";


import bannerimage1 from '../../../../../../../public/svg/1731580475111.webp'
import Image from 'next/image';


export default function Country_Wise_Visa_Details_Banner() {
  return (
    <div className='  bg-gradient-to-r from-[#1A4389] to-[#2661C7]  rounded-b-[50px]'>

      <div className="bg-[url('/svg/banner_bg_pattern.svg')]  pb-6 w-full px-16 ">
        <div className=' grid grid-cols-12 px-5 py-5 gap-x-5 items-center'>

          {/* left site  */}

          <div className=' col-span-8'>

            {/* header title  */}
            <h1 className='text-white text-3xl font-semibold pt-10'>Angola visa from Bangladesh</h1>

            <p className=' text-[16px] text-white pt-5'>
              The Republic of Angola, one of Africa's seventh largest countries, is renowned for its safety and rich cultural heritage. Angola not only has a fertile landscape for farming, but it also has precious minerals such as diamonds, gold, oil mines, etc. The government of Angola is offering a variety of visa categories to attract foreigners. Because of the possible career opportunities, people are also interested in Angola. Without an Angola visa from Bangladesh, you won't be able to enter Angola.

              However, Bangladesh doesn’t have an embassy of Angola in Dhaka. So, how to apply for the Angola visa? Bangladeshi citizens who are interested in attaining an Angola visa need to visit the Angola Embassy in New Delhi, India. Please refer to the article below for more information about Angola from VISAThing.
            </p>

            {/* button section  */}

            <div className=' flex gap-x-10 pt-10'>
              <div>
                <Button className="bg-white text-sm text-black h-12 hover:text-white hover:bg-[#2F3268]"> <span className=' text-[#0BA5EC] text-5xl'><GiIndianPalace /> </span>Embassy Details</Button>
              </div>
              <div>
                <Button className="bg-[#2F3268] text-sm text-white h-12  hover:bg-white hover:text-black"> <span className=' text-[#0BA5EC] text-5xl'><FaCalendarAlt /> </span>Book an appointment</Button>

              </div>
            </div>
          </div>


          {/* right site  */}

          <div className=' col-span-4'>

            <Image
            
            src={bannerimage1}
            className='h-44 w-full rounded-lg'

            >

            </Image>

          </div>

        </div>
      </div>

    </div>
  )
}
