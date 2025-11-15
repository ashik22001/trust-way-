import React from 'react'

import partnerlogo from '../../../../../public/images/partner-1.webp'
import partnerlogo_1 from '../../../../../public/images/partner_2.webp'
import partnerlogo_2 from '../../../../../public/images/partner-3.webp'
import partnerlogo_3 from '../../../../../public/images/partner-4.webp'
import partnerlogo_4 from '../../../../../public/images/partner-5.webp'
import partnerlogo_5 from '../../../../../public/images/logo_tranelonejov.webp'
import partnerlogo_6 from '../../../../../public/images/Morta_partner.webp'

import Image from 'next/image'

export default function Our_partner_section() {

    
    
    

    return (
        <div className='px-5  md:px-10 pt-5 rounded-5xl max-w-[1536px] mx-auto'>
            <div className='bg-[url(/images/partners.jpg)]  w-full bg-cover bg-center rounded-4xl'>
                <div>
                    <div className='grid items-center justify-center py-10 gap-y-3'>
                        <h1 className='text-4xl font-semibold text-white text-center'>Our partners:</h1>
                    </div>
                    <div className=' grid md:grid-cols-2 lg:grid-cols-4 px-3 md:px-5 lg:px-10 gap-x-5 gap-y-5 items-center justify-center pb-10'>
                        <Image
                            src={partnerlogo}
                            alt="Megh cloud"
                            className="h-[150px] w-full rounded-2xl  "
                        />
                        <Image
                            src={partnerlogo_1}
                            alt="Megh cloud"
                            className="h-[150px] w-full rounded-2xl  "
                        />
                        <Image
                            src={partnerlogo_2}
                            alt="Megh cloud"
                            className="h-[150px] w-full rounded-2xl  "
                        />
                        <Image
                            src={partnerlogo_3}
                            alt="Megh cloud"
                            className="h-[150px] w-full rounded-2xl  "
                        />
                        
                        <Image
                            src={partnerlogo_4}
                            alt="Megh cloud"
                            className="h-[150px] w-full rounded-2xl  "
                        />
                        
                        <Image
                            src={partnerlogo_5}
                            alt="Megh cloud"
                            className="h-[150px] w-full rounded-2xl  "
                        />
                        <Image
                            src={partnerlogo_6}
                            alt="Megh cloud"
                            className="h-[150px] w-full rounded-2xl  "
                        />
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
