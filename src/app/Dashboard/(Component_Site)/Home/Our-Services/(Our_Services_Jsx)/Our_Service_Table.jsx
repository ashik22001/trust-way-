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

export default function Our_Service_Table() {


    // context api state coll 

    const { our_service_Card, setour_service_Card, } = useAuth()


    // fetch navbar api all data 


    React.useEffect(() => {
        fetch('http://localhost:3000/Our-Service-Form-Api')
            .then(res => res.json())
            .then(data => {
                setour_service_Card(data)
            })
    }, []) // ✅ add empty array to run once



    console.log('our service card', our_service_Card)


    return (
        <div className="w-full px-5">
            <div className="flex items-center py-4 ">

                <Button>
                    <span className=" text-4xl text-white"><TiPlus /></span>
                    <Link href='/Dashboard/Home/Our-Service-Form'> Post Our service</Link>
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
                                Service Title
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
                            our_service_Card.map((data, index) => (
                                <TableRow key={data._id || index}>
                                    <TableCell cl>
                                        {index + 1}
                                    </TableCell>
                                    <TableCell cl>
                                        {data.Service_Title}
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
