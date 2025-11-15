import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./(components)/(Homepage)/Navbar";
import Banner_section_1 from "./(components)/(Homepage)/(Section)/Banner_section_1";
import Banner_section_2 from "./(components)/(Homepage)/(Section)/Banner_section_2";
import Banner_section_3 from "./(components)/(Homepage)/(Section)/Banner_section_3";
import Swiper_image_section from "./(components)/(Homepage)/(Section)/Swiper_image_section";
import Service_Section from "./(components)/(Homepage)/(Section)/Service_Section";
import Work_result_image_section from "./(components)/(Homepage)/(Section)/Work_result_image_section";
import Time_banner_Section from "./(components)/(Homepage)/(Section)/Time_banner_Section";
import Our_partner_section from "./(components)/(Homepage)/(Section)/Our_partner_section";
import FAQ_section from "./(components)/(Homepage)/(Section)/FAQ_section";
import Home_Footer from "./(components)/(Homepage)/Home_Footer";

export default function Home() {
  return ( 
   <div>
    <Navbar ></Navbar>
    <Banner_section_1></Banner_section_1>
    <Banner_section_2></Banner_section_2>
    <Banner_section_3></Banner_section_3>
    <Swiper_image_section></Swiper_image_section>
    <Service_Section></Service_Section>
    <Work_result_image_section></Work_result_image_section>
    <Time_banner_Section></Time_banner_Section>
    <Our_partner_section></Our_partner_section>
    <FAQ_section></FAQ_section>
    <Home_Footer></Home_Footer>
   </div>
  );
}
