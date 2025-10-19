import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'


export default function Visa_Result_Image_Form() {
    return (
        <div className=' h-full w-full px-10 pt-10 mb-20'>
            <div className=' rounded-2xl shadow-md mx-auto items-center justify-center px-10 pb-10'>
                <div className='mx-auto items-center justify-center'>
                    <h3 className=' text-2xl font-semibold text-center py-10'>Add Visa Images</h3>
                </div>
                <div className="  gap-3 mx-auto items-center justify-center">
                    <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}>Choose Your Image</Label>
                    <Input className={"h-14"} placeholder="Choose your image" type="file" />
                </div>
                <div className=' py-3'>
                    <Button className={"text-xl font-semibold py-4"}>Submit</Button>

                </div>
            </div>
        </div>
    )
}
