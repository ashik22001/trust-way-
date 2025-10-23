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
import Swal from "sweetalert2"




export default function News_Table() {


    // context api state coll 

    const { navbar_news, setnavbar_news } = useAuth()


    // fetch navbar api all data 


    React.useEffect(() => {
        fetch('http://localhost:3000/Navbar-News-Form-api')
            .then(res => res.json())
            .then(data => {
                setnavbar_news(data)
            })
    }, []) // ✅ runs only once



    console.log('navbar data', navbar_news)





    const handelDelete = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:3000/Navbar-News-Form-api?id=${id}`, {
          method: "DELETE",
        });

        // safely handle non-JSON response
        let resultData;
        try {
          resultData = await res.json();
        } catch {
          resultData = { error: "Invalid JSON response" };
        }

        if (res.ok) {
          Swal.fire("Deleted!", "Your news item has been deleted.", "success");
          setnavbar_news((prev) => prev.filter((item) => item._id !== id));
        } else {
          Swal.fire("Error", resultData.error || "Failed to delete", "error");
        }

      } catch (err) {
        console.error("Delete failed:", err);
        Swal.fire("Error", "Something went wrong", "error");
      }
    }
  });
};








    return (
        <div className="w-full px-5">
            <div className="flex items-center py-4 ">

                <Button>
                    <span className=" text-4xl text-white"><TiPlus /></span>
                    <Link href='/Dashboard/Home/Navbar-News-Form'> Post New News</Link>
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
                                News Title
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
                            navbar_news.map((data, index) => (
                                <TableRow key={data._id}>
                                    <TableCell cl>
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>
                                        {data.News_Title?.split(" ").slice(0, 5).join(" ") + (data.News_Title?.split(" ").length > 5 ? "..." : "")}
                                    </TableCell>


                                    <TableCell className={'text-center'} >
                                        <Link href="/">
                                            <span className="flex items-center justify-center"><FaRegEdit className="text-green-700 text-2xl" /></span>

                                        </Link>
                                    </TableCell>
                                    <TableCell className={'text-center'} >
                                        
                                            <p  className="flex items-center justify-center"><MdDeleteForever onClick={() => handelDelete(data._id)} className="text-red-800 text-2xl" /></p>

                                        
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
