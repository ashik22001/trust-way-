import React from 'react'

import partnerlogo from '../../../../../public/images/partner-1.webp'
import Image from 'next/image'

export default function Our_partner_section() {
    return (
        <div className='px-10 pt-5 rounded-5xl'>
            <div className='bg-[url(/images/partners.jpg)]  w-full bg-cover bg-center rounded-4xl'>
                <div>
                    <div className='grid items-center justify-center py-10 gap-y-3'>
                        <h1 className='text-4xl font-semibold text-white text-center'>Our partners:</h1>
                    </div>
                    <div className=' grid grid-cols-4 px-10 gap-x-5 gap-y-5 items-center justify-center pb-10'>
                        <Image
                            src={partnerlogo}
                            alt="Megh cloud"
                            className="h-[150px] w-full rounded-2xl  "
                        />
                        <Image
                            src={partnerlogo}
                            alt="Megh cloud"
                            className="h-[150px] w-full rounded-2xl  "
                        />
                        <Image
                            src={partnerlogo}
                            alt="Megh cloud"
                            className="h-[150px] w-full rounded-2xl  "
                        />
                        <Image
                            src={partnerlogo}
                            alt="Megh cloud"
                            className="h-[150px] w-full rounded-2xl  "
                        />
                        
                        <Image
                            src={partnerlogo}
                            alt="Megh cloud"
                            className="h-[150px] w-full rounded-2xl  "
                        />
                        
                        <Image
                            src={partnerlogo}
                            alt="Megh cloud"
                            className="h-[150px] w-full rounded-2xl  "
                        />
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
