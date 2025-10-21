"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import image1 from '../../../../../../../public/images/partners.jpg'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import Image from "next/image"
import { useAuth } from "../../../../../../../Context/AuthContext/AuthContext"



function Visa_Result_Images() {

    
            // context api state coll 
        
            const { Visa_Workting_image, setVisa_Workting_image, } = useAuth()
        
        
            // fetch navbar api all data 
        
        
            React.useEffect(() => {
                fetch('http://localhost:3000/Visa-Result-Image-Form-Api')
                    .then(res => res.json())
                    .then(data => {
                        setVisa_Workting_image(data)
                    })
            }, []) // ✅ add empty array to run once
        
        
        
            console.log('Visa Workting image', Visa_Workting_image)


  return (
    <div className="w-full px-5">
            <div className="flex items-center py-4 ">

                <Button>
                    <span className=" text-4xl text-white"><TiPlus /></span>
                    <Link href='/Dashboard/Home/Visa-Result-Image-Form'> Post Visa New Images</Link>
                </Button>

            </div>
              <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow >
                            <TableHead  >
                                Index
                            </TableHead>
                          
                            <TableHead  >
                                Images
                            </TableHead>

                            <TableHead className={'text-center'} >
                                Update
                            </TableHead>
                            <TableHead className={'text-center'} >
                                Delete
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Visa_Workting_image.map((data, index) => (
                            <TableRow key={data._id || index}>
                                <TableCell>
                                    {index + 1}
                                </TableCell>
                                <TableCell>
                                    <img
                                        src={data.Choose_Image}
                                        alt="Founder"
                                        className="h-28 w-28 rounded-lg object-cover"
                                    />

                                </TableCell>
                                <TableCell className="text-center">
                                    <Link href="/">
                                        <FaRegEdit className="text-green-700 text-2xl mx-auto" />
                                    </Link>
                                </TableCell>
                                <TableCell className="text-center">
                                    <Link href="/">
                                        <MdDeleteForever className="text-red-800 text-2xl mx-auto" />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="text-muted-foreground flex-1 text-sm">

                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"

                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"

                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
  )
}

export default Visa_Result_Images




