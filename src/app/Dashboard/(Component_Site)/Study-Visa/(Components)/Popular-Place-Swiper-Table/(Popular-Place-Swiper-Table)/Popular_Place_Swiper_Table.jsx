'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { TiPlus } from 'react-icons/ti'
import image1 from '../../../../../../../../public/images/partners.jpg'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { useAuth } from '../../../../../../../../Context/AuthContext/AuthContext'

export default function Popular_Place_Swiper_Table() {

    // context api state coll 

    const { Popular_Destination_Image, setPopular_Destination_Image, } = useAuth()


    // fetch navbar api all data 


    React.useEffect(() => {
        fetch('http://localhost:3000/Popular-Destination-Image-Swiper-Api')
            .then(res => res.json())
            .then(data => {
                setPopular_Destination_Image(data)
            })
    }, []) // ✅ add empty array to run once


    console.log('Popular_Destination_Image', Popular_Destination_Image)


    return (

        <div className="w-full px-5">
            <div className="flex items-center py-4 ">

                <Button>
                    <span className=" text-4xl text-white"><TiPlus /></span>
                    <Link href='/Dashboard/Study-Visa/Popular-Place-Swiper-Form'> Post Founder  Images</Link>

                </Button>

            </div>
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow >
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
                        {
                            Popular_Destination_Image.map((data, index) => (
                                <TableRow key={data._id || index}>
                                    <TableCell cl>
                                        <img
                                            src={data.Choose_Image}
                                            className=" h-28  w-28 rounded-lg"
                                        ></img>
                                    </TableCell>

                                    <TableCell className={'text-center'} >
                                        <Link href="/">
                                            <span className="flex items-center justify-center"><FaRegEdit className="text-green-700 text-2xl" /></span>

                                        </Link>
                                    </TableCell>
                                    <TableCell className={'text-center'} >
                                        <Link href="/">
                                            <span className="flex items-center justify-center"><MdDeleteForever className="text-red-800 text-2xl" /></span>

                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))
                        }



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