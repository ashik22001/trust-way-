import React from 'react'
import Work_Navbar from './(Work_Visa_Jsx)/Work_Navbar'
import Country_Category from './(Work_Visa_Jsx)/Country_Category'
import Works_Image_Card from './(Work_Visa_Jsx)/Works_Image_Card'
import Visa_available_country from './(Work_Visa_Jsx)/Visa_available_country'
import Country_Place from './(Work_Visa_Jsx)/Country_Place'
import Work_Visa_Footer from './(Work_Visa_Jsx)/Work_Visa_Footer'

export default function Page() {
  return (
    <div>
        <Work_Navbar></Work_Navbar>
        <Country_Category></Country_Category>
        <Works_Image_Card></Works_Image_Card>
        <Visa_available_country></Visa_available_country>
        <Country_Place></Country_Place>
        <Work_Visa_Footer></Work_Visa_Footer>
    </div>
  )
}
