'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import Swal from 'sweetalert2'
import uploadToImgBB from '@/app/ImageUpload_Site/UploadImageBBImage'


export default function About_Us_Carusel_Form() {


    const handle_Form_Submit = async (e) => {

        e.preventDefault();

        const form = new FormData(e.target);
        const Poster_Name = form.get('Poster_Name')
        const Country_Name = form.get('country_Name')
        const Description = form.get('description')
        const Rating = form.get('rating')
        const file1 = form.get('image1');
        const Choose_Image = file1 ? await uploadToImgBB(file1) : "";

        const Data = {
            Poster_Name,
            Country_Name,
            Description,
            Rating,
            Choose_Image,

        }

        try {
            const response = await fetch('http://localhost:3000/Study-About-Us-Api', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Data),

            });

            const res = await response.json();

            if (res.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Post Successfully Added!',
                    showConfirmButton: false,
                    timer: 1500
                });

                e.target.reset();
            } else {
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
                    <h3 className=' text-2xl font-semibold text-center py-10'>Add Your Text</h3>
                </div>
                <form action="" onSubmit={handle_Form_Submit}>
                    <div className="  gap-3 mx-auto items-center justify-center">
                        <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}>Name</Label>
                        <Input className={"h-10"} name='Poster_Name' placeholder=" Enter Your Text" type="text" />
                    </div>
                    <div className="  gap-3 mx-auto items-center justify-center">
                        <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}>Country Name</Label>
                        <Input className={"h-10"} name="country_Name" placeholder=" Enter Your Text" type="text" />
                    </div>
                    <div className="  gap-3 mx-auto items-center justify-center">
                        <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}>Description</Label>
                        <Textarea className={"h-10"} name='description' placeholder=" Enter Your Text" type="text" />
                    </div>
                    <div className="  gap-3 mx-auto items-center justify-center">
                        <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}>Rating</Label>
                        <Input className={"h-10"} name='rating' placeholder=" Enter Your Text" type="number" />
                    </div>
                    <div className="  gap-3 mx-auto items-center justify-center">
                        <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}>Choose Image</Label>
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