'use client'
import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useAuth } from '../../../../../Context/AuthContext/AuthContext'


export default function FAQ_section() {


  // context api state coll 

  const { our_faq_section, setour_faq_section, } = useAuth()



  // fetch company founder image


  React.useEffect(() => {
    fetch('http://localhost:3000/Faq-Data-Form-Api')
      .then(res => res.json())
      .then(data => {
        setour_faq_section(data)
      })
  }, []) // ✅ runs only once



  console.log('our_faq_section', our_faq_section)

  return (
    <div>
      {/* header text section  */}
      <div>
        <h1 className=' text-7xl font-[600] text-center text-[#495F77]  px-16 pb-4 pt-6'>
          FAQs
        </h1>
      </div>

      {/* accodion section */}

      <div className=' px-5 md:px-10 lg:px-20 pb-10'>
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-3"
          defaultValue="item-0"
        >
          {our_faq_section.slice(-10).map((data, index) => (
            <div className='' key={data._id || index}>
              <AccordionItem value={`item-${index}`} className="bg-[#495F77] rounded-lg">
                <AccordionTrigger className={" px-5 text-white font-xl font-bold"}>{data.Faq_Question}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance bg-[#EBEBEB] px-5 py-3">

                  <p>
                    {data.Faq_Answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}




        </Accordion>
      </div>
    </div>
  )
}
