


'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import Swal from 'sweetalert2'
import uploadToImgBB from '@/app/ImageUpload_Site/UploadImageBBImage'


export default function Coutry_Visa_Conditions_Section_Form() {


  // form submit handle function 
  const handle_Form_Submit = async (e) => {

    e.preventDefault();

    const form = new FormData(e.target);

    const Country_Name = form.get("Country_Name")
    const Visa_Conditons = form.get("Visa_Conditons")
    const file1 = form.get('image1');
    const Choose_Image = file1 ? await uploadToImgBB(file1) : "";

    const Country_Data = {
      Country_Name,
      Visa_Conditons,
      Choose_Image
    }

    try {

      const response = await fetch('http://localhost:3000/Coutry-Visa-Conditions-Section-Api', {  // fetch Faq-Data-Form-Api data
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Country_Data),

      });

      const res = await response.json();

      if (res.insertedId) {
        // if my post is successfull post which time show this alart 
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Post Successfully Added!',
          showConfirmButton: false,
          timer: 1500
        });

        e.target.reset();
      } else {
        // if my post is unsuccessfull post which time show this alart 

        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong.',
          icon: 'error',
          confirmButtonText: 'Try again'
        });
      }
    }

    catch (error) {

      Swal.fire({
        title: 'Network Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });

    }
  }

  return (
    <div className=' h-full w-full px-10 pt-10 mb-20'>
      <div className=' rounded-2xl shadow-md mx-auto items-center justify-center px-10 pb-10'>
        <div className='mx-auto items-center justify-center'>
          <h3 className=' text-2xl font-semibold text-center py-10'>Country Visa Conditions Form</h3>
        </div>
        <form action="" onSubmit={handle_Form_Submit}>
          <div className="  gap-3 mx-auto items-center justify-center">
            <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}>Country Name </Label>
            <Input className={"h-14"} name='Country_Name' placeholder="Write Country Name" type="text" />
          </div>
          <div className="  gap-3 mx-auto items-center justify-center">
            <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}>Visa Name and Conditions</Label>
            <Textarea className={"h-60"} name='Visa_Conditons' placeholder="Visa Conditions" type="text" />
          </div>
          <div className="  gap-3 mx-auto items-center justify-center">
            <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}>Choose Country Image</Label>
            <Input className={"h-14"} name='image1' placeholder="Choose your image" type="file" />
          </div>
          <div className=' py-3'>
            <Button className={"text-xl font-semibold py-4"}>Submit</Button>

          </div>
        </form>
      </div>
    </div>
  )
}
