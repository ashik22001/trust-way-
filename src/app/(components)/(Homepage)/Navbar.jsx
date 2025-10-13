import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/images/trust_logo.png'
import Marquee from "react-fast-marquee"
import Link from "next/link"

import { TiThMenu } from "react-icons/ti";


export default function Navbar() {
  return (
    // ✅ Added top-0, z-50, and shadow for better sticky effect
    <div className="bg-black sticky top-0 z-50 shadow-md">

      {/* navbar first section div */}
      <div className="grid lg:grid-cols-12 items-center justify-center px-5">
        {/* navbar logo div */}
        <div className="px-2 md:px-5 lg:px-10 py-4 lg:col-span-2">
          <Image
            src={logo}
            alt="Trust Logo"
            className="h-16 w-40"
          />
        </div>

        {/* navbar marquee section */}
        <div className="lg:col-span-9">
          <Marquee>
            <h4 className="text-white text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum cupiditate voluptatem id ullam quisquam eaque magnam omnis dolorem praesentium exercitationem modi dolor tenetur, quos, tempore cum sequi dolore sit repellat.
              Recusandae consectetur rem, fugiat accusamus harum neque enim temporibus voluptates, eius repellat reiciendis aut exercitationem quia, ea fugit eligendi! Optio, distinctio nemo quae harum delectus perspiciatis asperiores aperiam error vitae!
            </h4>
          </Marquee>
        </div>

        {/* menu section  */}

        <div className=' col-span-1 flex items-center justify-center'>
          <TiThMenu className=' text-3xl font-semibold text-white' />

        </div>
      </div>

      {/* navbar ul section */}
      <div>
        <ul className="text-lg font-semibold text-white grid grid-cols-6 px-2 text-center py-2 items-center justify-center">
          <li className="border-r-2 border-white h-4 flex items-center justify-center px-5">
            <Link href="/Work-Visa" className="text-white hover:text-blue-300">
              Work Visa
            </Link>
          </li>
          <li className="border-r-2 border-white h-4 flex items-center justify-center px-5">Tourist Visa</li>
          <li className="border-r-2 border-white h-4 flex items-center justify-center px-5">
            <Link href="/Study-Visa" className="text-white hover:text-blue-300">
              Study Visa
            </Link>
          </li>
          <li className="border-r-2 border-white h-4 flex items-center justify-center px-5">Legalization in Bangladesh</li>
          <li className="border-r-2 border-white h-4 flex items-center justify-center px-5">Appointment in Global</li>
          <li>Tunkey Visa in Bangladesh</li>
        </ul>
      </div>
    </div>
  )
}
