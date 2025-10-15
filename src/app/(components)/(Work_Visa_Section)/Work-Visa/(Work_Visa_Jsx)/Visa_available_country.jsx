import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

import europeimage from '../../../../../../public/work_visa_image/EU_bg.png'
import flagimage from '../../../../../../public/work_visa_image/avstriaya.png'
import flagimage_2 from '../../../../../../public/work_visa_image/belgiaya.png'
import flagimage_3 from '../../../../../../public/work_visa_image/bolgariaya.png'
import flagimage_4 from '../../../../../../public/work_visa_image/chehiaya.png'
import flagimage_5 from '../../../../../../public/work_visa_image/daniaya.png'
import flagimage_6 from '../../../../../../public/work_visa_image/finliandiaya.png'
import flagimage_7 from '../../../../../../public/work_visa_image/france.png'
import flagimage_8 from '../../../../../../public/work_visa_image/greciaya.png'
import flagimage_9 from '../../../../../../public/work_visa_image/horvatiaya.png'
import flagimage_10 from '../../../../../../public/work_visa_image/istoniaya.png'
import flagimage_11 from '../../../../../../public/work_visa_image/kipr.png'
import flagimage_12 from '../../../../../../public/work_visa_image/ispaniaya.png'
import flagimage_13 from '../../../../../../public/work_visa_image/niderlandi.png'
import flagimage_14 from '../../../../../../public/work_visa_image/irlandiaya.png'
import flagimage_15 from '../../../../../../public/work_visa_image/litva.png'
import flagimage_16 from '../../../../../../public/work_visa_image/lyksenbyrg.png'
import flagimage_17 from '../../../../../../public/work_visa_image/latviaya.png'
import flagimage_18 from '../../../../../../public/work_visa_image/malta.png'
import flagimage_19 from '../../../../../../public/work_visa_image/germany.png'
import flagimage_20 from '../../../../../../public/work_visa_image/ryminiaya.png'
import flagimage_21 from '../../../../../../public/work_visa_image/slovakiaya.png'
import flagimage_22 from '../../../../../../public/work_visa_image/polasha.png'
import flagimage_23 from '../../../../../../public/work_visa_image/italiaya.png'
import flagimage_24 from '../../../../../../public/work_visa_image/vengriaya.png'
import flagimage_25 from '../../../../../../public/work_visa_image/portygaliaya.png'
import flagimage_26 from '../../../../../../public/work_visa_image/sloveniaya.png'


export default function Visa_available_country() {
  return (
    <div className='bg-[#8777FD] w-full py-10   relative'>
      {/* section 1 */}
      <div className='hidden md:block px-5 md:px-0 lg:px-20'>
        <div className=' grid grid-cols-12 items-center gap-0 lg:gap-10'>
        {/* left side */}
        <div className='px-0 lg:px-10 relative left-20 lg:left-40 w-full md:col-span-4 lg:col-span-6'>
            <h3 className='text-white font-bold text-5xl bg-[#3739E0] py-5 rounded-2xl text-center w-full'>Countries of the European Union</h3>
        </div> 

        {/* right side */}
        <div className='md:col-span-8 lg:col-span-6'>
          <Image
            src={europeimage}
            alt='Europe Background'
            className='h-72 w-full rounded-3xl object-cover'
          />
        </div>
      </div>
      </div>

      {/* section 2 */}
      <div className='mt-5 md:mt-10 px-5 md:px-10'>
        {/* text section */}
        <h1 className='text-2xl text-center md:text-start font-semibold text-[#02059E] border-b-2 border-[#02059E] pb-2'>
          Conditions for obtaining a work visa in the EU countries:
        </h1>

        {/* flag grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-6 gap-x-5 gap-y-7'>
         <div >
                <div>
                  <Image
                    src={flagimage}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Austria
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_2}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Belgium
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_3}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Bulgaria
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_4}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Czech Republic
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_5}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Denmark
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_6}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Finland
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_7}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    France
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_8}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Greece
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_9}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Croatia
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_10}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Estonia

                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_11}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Cyprus
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_12}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Spain
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_13}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Netherlands
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_14}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Ireland
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_15}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Lithuania
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_16}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Luxembourg
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_17}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Latvia
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_18}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Malta
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_19}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Germany
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_20}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Romania
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_21}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Slovakia
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_22}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Poland
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_23}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Italy
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_24}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Hungary
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_25}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Portugal
                  </Button>
                </div>
              </div>
         <div >
                <div>
                  <Image
                    src={flagimage_26}
                    alt='Country flag'
                    className='h-40 w-40 rounded-full object-cover mx-auto'
                  />
                </div>
                <div className='border-b-2 border-[#727272] pb-2 mt-2'>
                  <Button className='bg-white text-xl font-semibold text-black w-full'>
                    Slovenia
                  </Button>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}
