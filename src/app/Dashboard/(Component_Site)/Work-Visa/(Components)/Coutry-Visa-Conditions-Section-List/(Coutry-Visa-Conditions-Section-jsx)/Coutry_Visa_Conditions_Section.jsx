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

export default function Coutry_Visa_Conditions_Section() {

    
        // context api state coll 
    
        const { visa_condition_section, setvisa_condition_section } = useAuth()
    
    
        // fetch navbar api all data 
    
    
        React.useEffect(() => {
            fetch('http://localhost:3000/Coutry-Visa-Conditions-Section-Api')
                .then(res => res.json())
                .then(data => {
                    setvisa_condition_section(data)
                })
        }, []) // ✅ add empty array to run once
    
    
        console.log('visa_condition_section', visa_condition_section)
    
    
    
  return (
  
    <div className="w-full px-5">
            <div className="flex items-center py-4 ">

                <Button>
                    <span className=" text-4xl text-white"><TiPlus /></span>
                    <Link href='/Dashboard/Work-Visa/Coutry-Visa-Conditions-Section-Form'> Visa Conditions Data</Link>

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
                                Country Name
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
                     {
                        visa_condition_section.map((data, index) =>(
                               <TableRow key={data._id || index}>
                            <TableCell cl>
                              {index+1}
                            </TableCell>
                            <TableCell cl>
                               {data.Country_Name}
                            </TableCell>
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


