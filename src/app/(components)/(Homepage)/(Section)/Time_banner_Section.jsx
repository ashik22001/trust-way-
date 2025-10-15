import React from 'react'

import timeimage from '../../../../../public/images/24-7.webp'
import Image from 'next/image'

export default function Time_banner_Section() {
    return (
        <div>
            {/* header text section */}
            <div>
                <h1 className=' text-xl font-[600] text-center text-black px-5 md:px-10 lg:px-16 pb-5'>
                    With Trust Way Global, your path to a successful career and life in Europe will become easier, faster and more comfortable.
                    We strive to ensure that each of our clients can fulfill their plans and dreams,
                    receiving maximum support and professionalism at every stage.
                </h1>

            </div>

            {/* background video section */}

            <div className="bg-[url(/images/original.webp)]  w-full bg-cover bg-center">
                {/* text section */}
                <div className=' py-5'>
                    <h1 className=' text-3xl font-[600] text-center text-white px-5 md:px-10 lg:px-16 pb-2 pt-6'>
                        Our team works around the clock!
                    </h1>
                    <p className=' text-xl font-[400] text-center text-white  px-16 pb-5'>
                        We are always ready to help you with both consultation and guidance at any time of the day.
                    </p>
                </div>

                {/* image section */}
                <div className=' flex items-center justify-center'>
                    <Image
                        src={timeimage}
                        alt="Megh cloud"
                        className=" h-72 md:h-80 w-72 md:w-80 rounded-2xl  "
                    />

                </div>

                {/* text section */}
                <div className=' py-5 pb-10'>

                    <p className=' text-xl font-[400] text-center text-white  px-16'>
                        Contact us in any convenient way.
                    </p>
                    <p className=' text-xl font-[400] text-center text-white  px-16 '>
                        Will be glad to assist you!
                    </p>
                </div>
            </div>
        </div>
    )
}
