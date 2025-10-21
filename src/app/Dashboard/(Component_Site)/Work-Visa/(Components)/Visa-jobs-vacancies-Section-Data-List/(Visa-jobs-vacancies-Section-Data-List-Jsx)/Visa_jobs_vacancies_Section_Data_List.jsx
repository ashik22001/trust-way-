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

export default function Visa_jobs_vacancies_Section_Data_List() {


    // context api state coll 

    const { visa_job_vacations, setvisa_job_vacations } = useAuth()


    // fetch navbar api all data 


    React.useEffect(() => {
        fetch('http://localhost:3000/Visa-jobs-vacancies-Section-Data-Api')
            .then(res => res.json())
            .then(data => {
                setvisa_job_vacations(data)
            })
    }, []) // ✅ add empty array to run once


    console.log('visa_job_vacations', visa_job_vacations)



    return (
        <div className="w-full px-5">
            <div className="flex items-center py-4 ">

                <Button>
                    <span className=" text-4xl text-white"><TiPlus /></span>
                    <Link href='/Dashboard/Work-Visa/Visa-jobs-vacancies-Section-Data-Form'> Add New Data</Link>

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
                                Visa Vacations Name
                            </TableHead>
                            <TableHead  >
                                Image
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
                        visa_job_vacations.map((data, index) =>(
                              <TableRow key={data._id || index}>
                            <TableCell cl>
                               {index + 1}
                            </TableCell>
                            <TableCell cl>
                              {data.Visa_Vactaion_Name}
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
