'use client'

import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import Swal from 'sweetalert2'

function Our_Service_Form() {


    const handle_Form_Submit = async (e) => {

        e.preventDefault();

        const form = new FormData(e.target);

        const Service_Title = form.get("Service_title")
        const Service_Descriptions = form.get("Service_Description")

        const News_Data = {
            Service_Title,
            Service_Descriptions
        }

        try {
            const response = await fetch('http://localhost:3000/Our-Service-Form-Api', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(News_Data),

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
                    <h3 className=' text-2xl font-semibold text-center py-10'>Add Our Service Data</h3>
                </div>
                <form action="" onSubmit={handle_Form_Submit}>
                    <div className="  gap-3 mx-auto items-center justify-center">
                        <Label htmlFor="picture"  className={"text-lg font-semibold pb-3"}>Service Title</Label>
                        <Input placeholder="Write Title." name='Service_title' />
                    </div>
                    <div className="  gap-3 mx-auto items-center justify-center">
                        <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}>Service Description Text</Label>
                        <Textarea name='Service_Description' placeholder="Service Description Text" className={'h-60'} />
                    </div>
                    <div className=' py-3'>
                        <Button className={"text-xl font-semibold py-4"}>Submit</Button>

                    </div>
                </form>

            </div>
        </div>

    )
}

export default Our_Service_Form