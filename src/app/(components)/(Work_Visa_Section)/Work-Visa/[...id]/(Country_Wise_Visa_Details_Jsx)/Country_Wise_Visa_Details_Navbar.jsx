import Link from 'next/link'
import React from 'react'

export default function Country_Wise_Visa_Details_Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white hidden md:block">
      <ul className="flex flex-wrap gap-5 items-center justify-center py-4 ">
        <Link href="#Country_Wise_Visa_Details_Type_Of_Visa" scroll={true}>
          <li className="border-r-2 px-3 text-[16px] font-semibold cursor-pointer">Type of Visa</li>
        </Link>

        <Link href="#Country_Wise_Visa_Details_Abailable_Services" scroll={true}>
          <li className="border-r-2 px-3 text-[16px] font-semibold cursor-pointer">Available Service</li>
        </Link>

        <Link href="#Country_Wise_Visa_Details_applying_Process" scroll={true}>
          <li className="border-r-2 px-3 text-[16px] font-semibold cursor-pointer">Applying Process</li>
        </Link>

        <Link href="#Country_Wise_Visa_Details_Time_And_Fees" scroll={true}>
          <li className="border-r-2 px-3 text-[16px] font-semibold cursor-pointer">Time And Fees</li>
        </Link>

        <Link href="#Country_Wise_Visa_Details_Faq" scroll={true}>
          <li className="px-3 text-[16px] font-semibold cursor-pointer">FAQ</li>
        </Link>
      </ul>
    </div>
  )
}
