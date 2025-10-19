import React from 'react'

import europeimage from '../../../../../../public/work_visa_image/avstriaya.jpg'
import japanimage from '../../../../../../public/work_visa_image/rabotnik_sklada.png'
import flagimage from '../../../../../../public/work_visa_image/avstriaya.jpg'
import image1 from '../../../../../../public/work_visa_image/kanada.jpg'
import image2 from '../../../../../../public/work_visa_image/angliaya.jpg'
// import image3 from '../../../../../../public/work_visa_image/novaaya_zelandiaya.jpeg'
import image4 from '../../../../../../public/work_visa_image/dybai.jpg'
// import image5 from '../../../../../../public/work_visa_image/katar.jpg'
import image6 from '../../../../../../public/work_visa_image/balkanskiy_polyostrov.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Country_Place() {
    return (


        <div>
            <div className='bg-[#DBFFD4] w-full py-10 px-5 md:px-0  lg:px-[10%] relative '>
                {/* section 1 */}
                 <div className=' flex md:grid md:grid-cols-12 items-center gap-0 lg:gap-10 flex-col-reverse'>
                        {/* left side */}
                        <div className='px-0 lg:px-10 relative md:left-20 lg:left-40 w-full md:col-span-4 lg:col-span-6 py-2 md:py-0'>
                            <h3 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl bg-[#0D6B0D] py-5 rounded-2xl text-center w-full'>AUSTRALIA</h3>
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

                {/* section 2 */}
                <div className='mt-10'>
                    {/* text section */}
                    <h1 className='text-2xl font-semibold text-[#0D6B0D] border-b-2 border-[#0D6B0D] pb-2 text-center'>
                        Conditions for opening a work visa in Australia:
                    </h1>

                    {/* text section */}
                    <div className=' px-5 bg-[#0D6B0D] py-1 mt-2 rounded-xl'>
                        <h4 className='text-[16px] md:text-lg lg:text-xl font-semibold text-center text-white '>Information on provision is temporarily unavailable. Please contact us for further consultation.</h4>
                    </div>

                    {/* text section  */}

                    <h5 className=' text-lg font-normal text-black text-center py-2'>You can find out more information on our Facebook page .</h5>
                </div>
            </div>
            
            <div className='bg-[#fabbb6] w-full py-10 px-5 md:px-0  lg:px-[10%] relative '>
                {/* section 1 */}
                 <div className=' flex md:grid md:grid-cols-12 items-center gap-0 lg:gap-10 flex-col-reverse'>
                        {/* left side */}
                        <div className='px-0 lg:px-10 relative md:left-20 lg:left-40 w-full md:col-span-4 lg:col-span-6 py-2 md:py-0'>
                            <h3 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl bg-[#b0253e] py-5 rounded-2xl text-center w-full'>CANADA</h3>
                        </div> 
                
                        {/* right side */}
                        <div className='md:col-span-8 lg:col-span-6'>
                          <Image
                            src={image1}
                            alt='Europe Background'
                            className='h-72 w-full rounded-3xl object-cover'
                          />
                        </div>
                      </div>

                {/* section 2 */}
                <div className='mt-10'>
                    {/* text section */}
                    <h1 className='text-2xl font-semibold text-[#b0253e] border-b-2 border-[#b0253e] pb-2 text-center'>
                        Conditions for obtaining a work visa in the EU countries:
                    </h1>

                    {/* text section */}
                    <div className=' px-5 bg-[#b0253e] py-1 mt-2 rounded-xl'>
                        <h4 className='text-[16px] md:text-lg lg:text-xl font-semibold text-center text-white '>Information on provision is temporarily unavailable. Please contact us for further consultation.</h4>
                    </div>

                    {/* text section  */}

                    <h5 className=' text-lg font-normal text-black text-center py-2'>You can find out more information on our Facebook page .</h5>
                </div>
            </div>
            
            <div className='bg-[#c8b2f4] w-full py-10 px-5 md:px-0  lg:px-[10%] relative '>
                {/* section 1 */}
                 <div className=' flex md:grid md:grid-cols-12 items-center gap-0 lg:gap-10 flex-col-reverse'>
                        {/* left side */}
                        <div className='px-0 lg:px-10 relative md:left-20 lg:left-40 w-full md:col-span-4 lg:col-span-6 py-2 md:py-0'>
                            <h3 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl bg-[#6e46c0] py-5 rounded-2xl text-center w-full'>ENGLAND</h3>
                        </div> 
                
                        {/* right side */}
                        <div className='md:col-span-8 lg:col-span-6'>
                          <Image
                            src={image2}
                            alt='Europe Background'
                            className='h-72 w-full rounded-3xl object-cover'
                          />
                        </div>
                      </div>

                {/* section 2 */}
                <div className='mt-10'>
                    {/* text section */}
                    <h1 className='text-2xl font-semibold text-[#6e46c0] border-b-2 border-[#6e46c0] pb-2 text-center'>
                        Conditions for opening a work visa in England:
                    </h1>

                    {/* text section */}
                    <div className=' px-5 bg-[#6e46c0] py-1 mt-2 rounded-xl'>
                        <h4 className='text-[16px] md:text-lg lg:text-xl font-semibold text-center text-white '> Information on provision is temporarily unavailable. Please contact us for further consultation.</h4>
                    </div>

                    {/* text section  */}

                    <h5 className=' text-lg font-normal text-black text-center py-2'>You can find out more information on our Facebook page .</h5>
                </div>
            </div>
            
            <div className='bg-[#e5bcfc] w-full py-10 px-5 md:px-0  lg:px-[10%] relative '>
                {/* section 1 */}
                 <div className=' flex md:grid md:grid-cols-12 items-center gap-0 lg:gap-10 flex-col-reverse'>
                        {/* left side */}
                        <div className='px-0 lg:px-10 relative md:left-20 lg:left-40 w-full md:col-span-4 lg:col-span-6 py-2 md:py-0'>
                            <h3 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl bg-[#752c6c] py-5 rounded-2xl text-center w-full'>NEW ZEALAND</h3>
                        </div> 
                
                        {/* right side */}
                        <div className='md:col-span-8 lg:col-span-6'>
                          <Image
                            src={image2
                                
                            }
                            alt='Europe Background'
                            className='h-72 w-full rounded-3xl object-cover'
                          />
                        </div>
                      </div>

                {/* section 2 */}
                <div className='mt-10'>
                    {/* text section */}
                    <h1 className='text-2xl font-semibold text-[#752c6c] border-b-2 border-[#752c6c] pb-2 text-center'>
                        Conditions for opening a work visa in New Zealand:
                    </h1>

                    {/* text section */}
                    <div className=' px-5 bg-[#752c6c] py-1 mt-2 rounded-xl'>
                        <h4 className='text-[16px] md:text-lg lg:text-xl font-semibold text-center text-white '>Information on provision is temporarily unavailable. Please contact us for further consultation.</h4>
                    </div>

                    {/* text section  */}

                    <h5 className=' text-lg font-normal text-black text-center py-2'>You can find out more information on our Facebook page .</h5>
                </div>
            </div>
            
            <div className='bg-[#d9f6fa] w-full py-10 px-5 md:px-0  lg:px-[10%] relative '>
                {/* section 1 */}
                 <div className=' flex md:grid md:grid-cols-12 items-center gap-0 lg:gap-10 flex-col-reverse'>
                        {/* left side */}
                        <div className='px-0 lg:px-10 relative md:left-20 lg:left-40 w-full md:col-span-4 lg:col-span-6 py-2 md:py-0'>
                            <h3 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl bg-[#0a7785] py-5 rounded-2xl text-center w-full'>Dubai</h3>
                        </div> 
                
                        {/* right side */}
                        <div className='md:col-span-8 lg:col-span-6'>
                          <Image
                            src={image4}
                            alt='Europe Background'
                            className='h-72 w-full rounded-3xl object-cover'
                          />
                        </div>
                      </div>

                {/* section 2 */}
                <div className='mt-10'>
                    {/* text section */}
                    <h1 className='text-2xl font-semibold text-[#0a7785] border-b-2 border-[#0a7785] pb-2 text-center'>
                        Conditions for opening a work visa in New Zealand:
                    </h1>

                    {/* text section */}
                    <div className=' px-5 bg-[#0a7785] py-1 mt-2 rounded-xl'>
                        <h4 className='text-[16px] md:text-lg lg:text-xl font-semibold text-center text-white '>Information on provision is temporarily unavailable. Please contact us for further consultation.</h4>
                    </div>

                    {/* text section  */}

                    <h5 className=' text-lg font-normal text-black text-center py-2'>You can find out more information on our Facebook page .</h5>
                </div>
            </div>

               <div className='bg-[#cacaca] w-full py-10 px-5 md:px-0  lg:px-[10%] relative '>
                {/* section 1 */}
                 <div className=' flex md:grid md:grid-cols-12 items-center gap-0 lg:gap-10 flex-col-reverse'>
                        {/* left side */}
                        <div className='px-0 lg:px-10 relative md:left-20 lg:left-40 w-full md:col-span-4 lg:col-span-6 py-2 md:py-0'>
                            <h3 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl bg-[#5b5a5a] py-5 rounded-2xl text-center w-full'>QATAR</h3>
                        </div> 
                
                        {/* right side */}
                        <div className='md:col-span-8 lg:col-span-6'>
                          <Image
                            src={image6}
                            alt='Europe Background'
                            className='h-72 w-full rounded-3xl object-cover'
                          />
                        </div>
                      </div>

                {/* section 2 */}
                <div className='mt-10'>
                    {/* text section */}
                    <h1 className='text-2xl font-semibold text-[#5b5a5a] border-b-2 border-[#5b5a5a] pb-2 text-center'>
                        Conditions for opening a work visa in New Zealand:
                    </h1>

                    {/* text section */}
                    <div className=' px-5 bg-[#5b5a5a] py-1 mt-2 rounded-xl'>
                        <h4 className='text-[16px] md:text-lg lg:text-xl font-semibold text-center text-white '>Information on provision is temporarily unavailable. Please contact us for further consultation.</h4>
                    </div>

                    {/* text section  */}

                    <h5 className=' text-lg font-normal text-black text-center py-2'>You can find out more information on our Facebook page .</h5>
                </div>
            </div>
               <div className='bg-[#f3fbc3] w-full py-10 px-5 md:px-0  lg:px-[10%] relative '>
                {/* section 1 */}
                 <div className=' flex md:grid md:grid-cols-12 items-center gap-0 lg:gap-10 flex-col-reverse'>
                        {/* left side */}
                        <div className='px-0 lg:px-10 relative md:left-20 lg:left-40 w-full md:col-span-4 lg:col-span-6 py-2 md:py-0'>
                            <h3 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl bg-[#414c03] py-5 rounded-2xl text-center w-full'>Balkan Peninsula</h3>
                        </div> 
                
                        {/* right side */}
                        <div className='md:col-span-8 lg:col-span-6'>
                          <Image
                            src={image6}
                            alt='Europe Background'
                            className='h-72 w-full rounded-3xl object-cover'
                          />
                        </div>
                      </div>

                {/* section 2 */}
                <div className='mt-10'>
                    {/* text section */}
                    <h1 className='text-2xl font-semibold text-[#414c03] border-b-2 border-[#414c03] pb-2 text-center'>
                        Conditions for obtaining a work visa in the Balkan Peninsula:
                    </h1>
                    {/* text section */}
                    <h1 className='text-2x font-semibold text-[#414c03] border-b-1 border-[#414c03] pb-2 text-left'>
                        Serbia- invitation for 6 months (contract extension possible), visa up to 6 months, no residence permit
                    </h1>
                    {/* text section */}
                    <h1 className='text-2x font-semibold text-[#414c03] border-b-1 border-[#414c03] pb-2 text-left'>
                        North Macedonia- Information on provision is temporarily unavailable. Please contact us for further consultation.
                    </h1>
                    {/* text section */}
                    <h1 className='text-2x font-semibold text-[#414c03] '>
                        Albania- invitation for 1 year, electronic visa for up to 90 days, residence permit upon arrival
                    </h1>

                    

                    {/* text section  */}

                    <h4 className=' text-lg font-normal text-black text-center py-2'>You can find out more information on our Facebook page .</h4>
                </div>
            </div>
            
        </div>

    )
}
