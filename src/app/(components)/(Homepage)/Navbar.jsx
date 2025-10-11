import Image from 'next/image'
import React from 'react'

import logo from '../../../../public/images/trust_logo.png'
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=' bg-black'>
      {/* navbar first section div */}
      <div className=' grid grid-cols-12 items-center justify-center px-5'>
        {/* navbar logo div */}
        <div className=' px-10 py-4 col-span-2'>
          <Image
            src={logo}
            className='h-16 w-40 '
          ></Image>
        </div>

        {/* navbar section section */}

        <div className=' col-span-9'>
          <Marquee>
            <h4 className=' text-white text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum cupiditate voluptatem id ullam quisquam eaque magnam omnis dolorem praesentium exercitationem modi dolor tenetur, quos, tempore cum sequi dolore sit repellat.
              Recusandae consectetur rem, fugiat accusamus harum neque enim temporibus voluptates, eius repellat reiciendis aut exercitationem quia, ea fugit eligendi! Optio, distinctio nemo quae harum delectus perspiciatis asperiores aperiam error vitae!</h4>
          </Marquee>

        </div>
      </div>
      {/* navbar ul section */}

      <div>
        <ul className=' text-lg font-semibold text-white grid grid-cols-6 px-2 text-center py-2 items-center justify-center'>

          <li className="border-r-2 border-white h-4 flex items-center justify-center px-5">
  <Link href="/Work-Visa" className="text-white hover:text-blue-300">
    Work Visa
  </Link>
</li>
          <li className=' border-r-2 border-white h-4 flex items-center justify-center px-5'> Turist  Visa </li>

          <li className="border-r-2 border-white h-4 flex items-center justify-center px-5">
  <Link href="/Study-Visa" className="text-white hover:text-blue-300">
    Study Visa
  </Link>
</li>
          <li className=' border-r-2 border-white h-4 flex items-center justify-center px-5'>Ligilizetion on Bangladesh </li>
          <li className=' border-r-2 border-white h-4 flex items-center justify-center px-5'>Appointment in Global</li>
          <li >Tunkery visa on Bangladesh</li>
        </ul>
      </div>

    </div>
  )
}
