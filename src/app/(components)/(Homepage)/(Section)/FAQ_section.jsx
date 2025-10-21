"use client"
import React, { useEffect } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import AOS from 'aos';


export default function FAQ_section() {
   useEffect(() => {
              AOS.init({
                duration: 1000, // Animation duration in ms
                once: true,     // Animation runs only once
                easing: "ease-in-out", // Optional
              });
            }, []);
      
  return (
    <div>
      {/* header text section  */}
      <div>
        <h1 className=' text-7xl font-[600] text-center text-[#495F77]  px-16 pb-4 pt-6'>
          FAQs
        </h1>
      </div>

      {/* accodion section */}

      <div className=' px-5 md:px-10 lg:px-20 pb-10'data-aos="fade-right" >
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-3"
          defaultValue="item-1"
        >
          <div className=' '>
            <AccordionItem value="item-1" className="bg-[#495F77] rounded-lg">
            <AccordionTrigger className={" px-5 text-white font-xl font-bold"}>Product Information</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance bg-[#EBEBEB] px-5 py-3">
              <p>
                Our flagship product combines cutting-edge technology with sleek
                design. Built with premium materials, it offers unparalleled
                performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities, and an
                intuitive user interface designed for both beginners and experts.
              </p>
            </AccordionContent>
          </AccordionItem>
          </div>

          <div>
            <AccordionItem value="item-1" className="bg-[#495F77] rounded-lg">
            <AccordionTrigger className={" px-5 text-white font-xl font-bold"}>Product Information</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance bg-[#EBEBEB] px-5 py-3">
              <p>
                Our flagship product combines cutting-edge technology with sleek
                design. Built with premium materials, it offers unparalleled
                performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities, and an
                intuitive user interface designed for both beginners and experts.
              </p>
            </AccordionContent>
          </AccordionItem>
          </div>
          <div>
            <AccordionItem value="item-1" className="bg-[#495F77] rounded-lg">
            <AccordionTrigger className={" px-5 text-white font-xl font-bold"}>Product Information</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance bg-[#EBEBEB] px-5 py-3">
              <p>
                Our flagship product combines cutting-edge technology with sleek
                design. Built with premium materials, it offers unparalleled
                performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities, and an
                intuitive user interface designed for both beginners and experts.
              </p>
            </AccordionContent>
          </AccordionItem>
          </div>
          
        </Accordion>
      </div>
    </div>
  )
}
