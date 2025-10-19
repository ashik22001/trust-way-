import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

function Our_Service_Form() {
    return (
        <div className=' h-full w-full px-10 pt-10 mb-20'>
            <div className=' rounded-2xl shadow-md mx-auto items-center justify-center px-10 pb-10'>
                <div className='mx-auto items-center justify-center'>
                    <h3 className=' text-2xl font-semibold text-center py-10'>Add Our Service Data</h3>
                </div>
                <div className="  gap-3 mx-auto items-center justify-center">
                    <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}>Service Title</Label>
                    <Input placeholder="Write Title."  />
                </div>
                <div className="  gap-3 mx-auto items-center justify-center">
                    <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}>Service Description Text</Label>
                    <Textarea placeholder="Service Description Text" className={'h-60'} />
                </div>
                <div className=' py-3'>
                    <Button className={"text-xl font-semibold py-4"}>Submit</Button>

                </div>
            </div>
        </div>

    )
}

export default Our_Service_Form