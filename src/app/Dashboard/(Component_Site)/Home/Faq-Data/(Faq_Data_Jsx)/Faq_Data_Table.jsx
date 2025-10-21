"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"

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
import { useAuth } from "../../../../../../../Context/AuthContext/AuthContext"



function Faq_Data_Table() {


    // context api state coll 

    const { our_faq_section, setour_faq_section, } = useAuth()


    // fetch navbar api all data 


    React.useEffect(() => {
        fetch('http://localhost:3000/Faq-Data-Form-Api')
            .then(res => res.json())
            .then(data => {
                setour_faq_section(data)
            })
    }, []) // ✅ add empty array to run once



    console.log('our faq_section', our_faq_section)

    return (
        <div className="w-full px-5">
            <div className="flex items-center py-4 ">

                <Button>
                    <span className=" text-4xl text-white"><TiPlus /></span>
                    <Link href='/Dashboard/Home/Faq-Data-Form'> Post FAQ Data </Link>
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
                                FAQ Title
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
                            our_faq_section.map((data, index) => (
                                <TableRow key={data._id || index}>
                                    <TableCell  >
                                        {index + 1}
                                    </TableCell>
                                    <TableCell cl>
                                        {data.Faq_Question}
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

export default Faq_Data_Table