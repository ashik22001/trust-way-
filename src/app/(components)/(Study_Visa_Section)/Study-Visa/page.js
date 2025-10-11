import React from 'react'
import Work_Navbar from '../../(Work_Visa_Section)/Work-Visa/(Work_Visa_Jsx)/Work_Navbar'
import Banner_Video from './(Study_Visa_Jsx)/Banner_Video'
import Banner_Section from './(Study_Visa_Jsx)/Banner_Section'
import Our_Service_section from './(Study_Visa_Jsx)/Our_Service section'
import Country_Card from './(Study_Visa_Jsx)/Country_Card'
import Study_Footer from './(Study_Visa_Jsx)/Study_Footer'
import Popular_Place_Swiper from './(Study_Visa_Jsx)/Popular_Place_Swiper'
import About_Us_Carusel from './(Study_Visa_Jsx)/About_Us_Carusel'

export default function Page() {
  return (
    <div>
        <Work_Navbar></Work_Navbar>
        <Banner_Video></Banner_Video>
        <Banner_Section></Banner_Section>
        <Our_Service_section></Our_Service_section>
        <Popular_Place_Swiper></Popular_Place_Swiper>
        <Country_Card></Country_Card>
        <About_Us_Carusel></About_Us_Carusel>
        <Study_Footer></Study_Footer>
    </div>
  )
}
