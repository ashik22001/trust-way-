import React from 'react'
import Country_Wise_Visa_Details_Banner from './(Country_Wise_Visa_Details_Jsx)/Country_Wise_Visa_Details_Banner'
import Work_Navbar from '../(Work_Visa_Jsx)/Work_Navbar'
import Country_Wise_Visa_Details_Navbar from './(Country_Wise_Visa_Details_Jsx)/Country_Wise_Visa_Details_Navbar'
import Country_Wise_Visa_Details_Type_Of_Visa from './(Country_Wise_Visa_Details_Jsx)/Country_Wise_Visa_Details_Type_Of_Visa'
import Country_Wise_Visa_Details_Abailable_Services from './(Country_Wise_Visa_Details_Jsx)/Country_Wise_Visa_Details_Abailable_Services'
import Country_Wise_Visa_Details_applying_Process from './(Country_Wise_Visa_Details_Jsx)/Country_Wise_Visa_Details_applying_Process'
import Country_Wise_Visa_Details_Time_And_Fees from './(Country_Wise_Visa_Details_Jsx)/Country_Wise_Visa_Details_Time_And_Fees'
import Country_Wise_Visa_Details_Faq from './(Country_Wise_Visa_Details_Jsx)/Country_Wise_Visa_Details_Faq'
import Work_Visa_Footer from '../(Work_Visa_Jsx)/Work_Visa_Footer'
import Country_Wise_Visa_Details_Start_application from './(Country_Wise_Visa_Details_Jsx)/Country_Wise_Visa_Details_Start_application'

export default function Page() {
  return (
    <div>
      <Work_Navbar></Work_Navbar>
      <Country_Wise_Visa_Details_Banner></Country_Wise_Visa_Details_Banner>
      <Country_Wise_Visa_Details_Navbar></Country_Wise_Visa_Details_Navbar>


      <div className=' grid grid-cols-12 px-10 gap-x-10 pt-10'>
        {/* left site  */}
        <div className=' col-span-7'>

          <Country_Wise_Visa_Details_Type_Of_Visa></Country_Wise_Visa_Details_Type_Of_Visa>
          <Country_Wise_Visa_Details_Abailable_Services></Country_Wise_Visa_Details_Abailable_Services>
          <Country_Wise_Visa_Details_applying_Process></Country_Wise_Visa_Details_applying_Process>
          <Country_Wise_Visa_Details_Time_And_Fees></Country_Wise_Visa_Details_Time_And_Fees>
          <Country_Wise_Visa_Details_Faq></Country_Wise_Visa_Details_Faq>
        </div>
        {/* right site  */}

        <div className=' col-span-5 pt-10'>
          <Country_Wise_Visa_Details_Start_application></Country_Wise_Visa_Details_Start_application>
        </div>
      </div>
      <Work_Visa_Footer></Work_Visa_Footer>
    </div>
  )
}
