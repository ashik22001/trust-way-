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

export default function Study_Our_Service_Table() { 

    
        // context api state coll 
    
        const { Study_Our_Service_Card, setStudy_Our_Service_Card, } = useAuth()
    
    
        // fetch navbar api all data 
    
    
        React.useEffect(() => {
            fetch('http://localhost:3000/Our-Service-Card-Api')
                .then(res => res.json())
                .then(data => {
                    setStudy_Our_Service_Card(data)
                })
        }, []) // ✅ add empty array to run once
    
    
        console.log('Study_Our_Service_Card', Study_Our_Service_Card)
    
    
  return (
  
    <div className="w-full px-5">
            <div className="flex items-center py-4 ">

                <Button>
                    <span className=" text-4xl text-white"><TiPlus /></span>
                    <Link href='/Dashboard/Study-Visa/Study-Our-Service-Form'> Add Service</Link>

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
                                Posted Date
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
                        Study_Our_Service_Card.map((data, index) =>(
                             <TableRow key={index._id || index}>
                            <TableCell cl>
                               {index+1}
                            </TableCell>
                            <TableCell  >
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
