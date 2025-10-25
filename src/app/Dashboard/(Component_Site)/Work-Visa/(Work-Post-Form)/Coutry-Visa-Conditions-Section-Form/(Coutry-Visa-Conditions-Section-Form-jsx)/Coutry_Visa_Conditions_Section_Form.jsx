


'use client'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import Swal from 'sweetalert2'
import uploadToImgBB from '@/app/ImageUpload_Site/UploadImageBBImage'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { TiPlus } from "react-icons/ti";



export default function Coutry_Visa_Conditions_Section_Form() {


  // increase all field state

  // Increase visa type selected card

  const [Increse_Visa_Type_Selected_Card, setIncrese_Visa_Type_Selected_Card] = useState([]);

  // Increase visa type selected card li
  const [Increse_visa_type_selected_card_list, setIncrese_visa_type_selected_card_list] = useState([]);


  // Increase applying process card
  const [Increse_Applying_Process_Card, setIncrese_Applying_Process_Card] = useState([]);


  // Increase Increse_Time_Fees_Other
  const [Increse_Time_Fees_Other, setIncrese_Time_Fees_Other] = useState([]);



  // Increase FAQ process accodion
  const [Increse_FAQ_process_accodion, setIncrese_FAQ_process_accodion] = useState([]);



  // description increse all function 


  // Increase visa type selected card function 

  const add_Increse_Visa_Type_Selected_Card = () => {
    setIncrese_Visa_Type_Selected_Card(prev => [...prev, { id: Date.now() }]);
  };




  //  Increase Increase visa type selected card li function

  const add_setIncrese_visa_type_selected_card_list = () => {
    setIncrese_visa_type_selected_card_list(prev => [...prev, { id: Date.now() }]);
  };



  // Increase applying process card function 

  const add_setsetIncrese_Time_Fees_Other = () => {
    setIncrese_Time_Fees_Other(prev => [...prev, { id: Date.now() }]);
  };


  // Increase applying process card function 

  const add_setIncrese_Applying_Process_Card = () => {
    setIncrese_Applying_Process_Card(prev => [...prev, { id: Date.now() }]);
  };



  // Increase FAQ process accodion function 

  const add_setIncrese_FAQ_process_accodion = () => {
    setIncrese_FAQ_process_accodion(prev => [...prev, { id: Date.now() }]);
  };












  // form submit handle function 
  const handle_Form_Submit = async (e) => {

    e.preventDefault();

    const form = new FormData(e.target);

    const Country_Name = form.get("Country_Name")
    const Visa_Conditons = form.get("Visa_Conditons")
    const file1 = form.get('image1');
    const Choose_Image = file1 ? await uploadToImgBB(file1) : "";

    const Country_Data = {
      Country_Name,
      Visa_Conditons,
      Choose_Image
    }

    try {

      const response = await fetch('http://localhost:3000/Coutry-Visa-Conditions-Section-Api', {  // fetch Faq-Data-Form-Api data
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Country_Data),

      });

      const res = await response.json();

      if (res.insertedId) {
        // if my post is successfull post which time show this alart 
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Post Successfully Added!',
          showConfirmButton: false,
          timer: 1500
        });

        e.target.reset();
      } else {
        // if my post is unsuccessfull post which time show this alart 

        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong.',
          icon: 'error',
          confirmButtonText: 'Try again'
        });
      }
    }

    catch (error) {

      Swal.fire({
        title: 'Network Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });

    }
  }

  return (
    <div className=' h-full w-full px-10 pt-10 mb-20'>
      <div className=' rounded-2xl shadow-md mx-auto items-center justify-center px-10 pb-10'>
        <div className='mx-auto items-center justify-center'>
          <h3 className=' text-2xl font-semibold text-center py-10'>Country Visa Conditions Form</h3>
        </div>
        <form action="" onSubmit={handle_Form_Submit} >
          <div className=' grid grid-cols-2 gap-x-5'>
            <div className="  gap-3 mx-auto items-center justify-center w-full">
              <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}>Country Name </Label>
              <Input className={""} name='Country_Name' placeholder="Write Country Name" type="text" />
            </div>
            <div className="  gap-3 mx-auto items-center justify-center  w-full">
              <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}>Choose Country Image</Label>
              <Input className={""} name='image1' placeholder="Choose your image" type="file" />
            </div>
          </div>
          <div className="  gap-3 mx-auto items-center justify-center mt-5">
            <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}>Overview</Label>
            <Textarea className={"h-60"} name='Overview' placeholder="Overview" type="text" />
          </div>


          {/* visa types  */}

          <div>
            <div >
              <div>
                <h1 className=' uppercase text-lg mt-10 font-bold'> 1. visa types</h1>
              </div>

            </div>

            <div className=' mt-5'>
              {/* visa type title  */}
              <div className="  gap-3 mx-auto items-center justify-center">
                <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}>Visa Types Title  </Label>
                <Input className={"h-14"} name='Visa_Types_Title' placeholder="Visa Types Title" type="text" />
              </div>

              {/* visa type overview  */}
              <div className="  gap-3 mx-auto items-center justify-center pt-5">
                <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}> Visa Type Overview</Label>
                <Textarea className={"h-60"} name='Visa_Type_Overview' placeholder="Visa Type Overview" type="text" />
              </div>


              {/* increase visa type full card  */}


              <div  >
                <div className=' flex items-center justify-between'>
                  <div>
                    <h1 className=' uppercase text-lg mt-10 font-bold'>Increase visa type selected card</h1>
                  </div>
                  <div>
                    <Button type="button" onClick={add_Increse_Visa_Type_Selected_Card} className=' uppercase text-3xl mt-10 font-bold'>
                      <TiPlus />

                    </Button>
                  </div>
                </div>
                <div>
                  {/* 0 position number  */}


                  <div className=' border-2 m-4 p-5 rounded-2xl'>

                    <div className=' flex items-center justify-between'>
                      <div>
                        <h3 className=' text-lg font-semibold text-green-600'>Card 0</h3>
                      </div>
                      <div>
                        <h3 className=' text-lg font-semibold text-red-600'>Delete Card 0</h3>
                      </div>
                    </div>
                    <div >

                      {/* visa type selected title  */}
                      <div className="  gap-3 mx-auto items-center justify-center mt-5">
                        <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}>Visa type selected card title  </Label>
                        <Input className={"h-14"} name='Visa_type_selected_card_title' placeholder="Visa type selected card title" type="text" />
                      </div>
                    </div>
                    {/* select visa type  */}

                    <div>
                      <div className=' flex items-center justify-between'>
                        <div>
                          <h1 className=' uppercase text-lg mt-10 font-bold'>Increase visa type selected card list</h1>
                        </div>
                        <div>
                          <Button type="button" onClick={add_setIncrese_visa_type_selected_card_list} className=' uppercase text-3xl mt-10 font-bold'>
                            <TiPlus />
                          </Button>
                        </div>
                      </div>

                      {/* posintion 0 */}

                      <div className='border-2 m-4 p-5 rounded-2xl'>
                        <div className=' flex items-center justify-between'>
                          <div>
                            <h3 className=' text-lg font-semibold text-green-600'>List 0</h3>
                          </div>
                          <div>
                            <h3 className=' text-lg font-semibold text-red-600'>Delete List </h3>
                          </div>
                        </div>
                        <div className="  gap-3 mx-auto items-center justify-center mt-5">
                          <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}>Visa type selected card list </Label>
                          <Input className={"h-14"} name='Visa_type_selected_card_list' placeholder="Visa type selected card list" type="text" />
                        </div>
                      </div>


                      {
                        Increse_visa_type_selected_card_list.map((List_Section, index) => (


                          // position 1 

                          <div key={List_Section.id} className='border-2 m-4 p-5 rounded-2xl'>
                            <div className=' flex items-center justify-between'>
                              <div>
                                <h3 className=' text-lg font-semibold text-green-600'>List {index + 1}</h3>
                              </div>
                              <div>
                                <h3 className=' text-lg font-semibold text-red-600'>Delete List {index + 1}</h3>
                              </div>
                            </div>
                            <div className="  gap-3 mx-auto items-center justify-center mt-5">
                              <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}>Visa type selected card list {index + 1} </Label>
                              <Input className={"h-14"} name='Country_Name' placeholder="Write Country Name" type="text" />
                            </div>
                          </div>


                        ))
                      }

                    </div>
                  </div>


                  {/* position number 1  */}

                  {
                    Increse_Visa_Type_Selected_Card.map((section, index) => (
                      <div key={section.id} className=' border-2 m-4 p-5 rounded-2xl'>

                        <div className=' flex items-center justify-between'>
                          <div>
                            <h3 className=' text-lg font-semibold text-green-600'>Card {index + 1}</h3>
                          </div>
                          <div>
                            <h3 className=' text-lg font-semibold text-red-600'>Delete Card {index + 1}</h3>
                          </div>
                        </div>
                        <div >

                          {/* visa type selected title  */}
                          <div className="  gap-3 mx-auto items-center justify-center mt-5">
                            <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}>Visa type selected card title  </Label>
                            <Input className={"h-14"} name='Country_Name' placeholder="Write Country Name" type="text" />
                          </div>
                        </div>
                        {/* select visa type  */}

                        <div>
                          <div className=' flex items-center justify-between'>
                            <div>
                              <h1 className=' uppercase text-lg mt-10 font-bold'>Increase visa type selected card list</h1>
                            </div>
                            <div>
                              <Button type="button" onClick={add_setIncrese_visa_type_selected_card_list} className=' uppercase text-3xl mt-10 font-bold'>
                                <TiPlus />
                              </Button>
                            </div>
                          </div>

                          {
                            Increse_visa_type_selected_card_list.map((List_Section, index) => (

                              <div key={List_Section.id} className='border-2 m-4 p-5 rounded-2xl'>
                                <div className=' flex items-center justify-between'>
                                  <div>
                                    <h3 className=' text-lg font-semibold text-green-600'>List {index + 1}</h3>
                                  </div>
                                  <div>
                                    <h3 className=' text-lg font-semibold text-red-600'>Delete List {index + 1}</h3>
                                  </div>
                                </div>
                                <div className="  gap-3 mx-auto items-center justify-center mt-5">
                                  <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}>Visa type selected card list </Label>
                                  <Input className={"h-14"} name='Country_Name' placeholder="Write Country Name" type="text" />
                                </div>
                              </div>


                            ))
                          }

                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>

            </div>
          </div>

          {/* Available services  */}

          <div>
            <h1 className='uppercase text-lg mt-10 font-bold'>2. Available services</h1>

            <div>
              {/* visa type title  */}
              <div className="  gap-3 mx-auto items-center justify-center mt-5">
                <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}>Available services Title  </Label>
                <Input className={"h-14"} name='Country_Name' placeholder="Write Country Name" type="text" />
              </div>

              {/* visa type overview  */}
              <div className="  gap-3 mx-auto items-center justify-center mt-3">
                <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}> Available services Overview</Label>
                <Textarea className={"h-60"} name='Visa_Conditons' placeholder="Visa Conditions" type="text" />
              </div>

              {/* visa type selected title  */}

              <div>
                <div className=' flex items-center justify-between'>
                  <div>
                    <h1 className=' uppercase text-lg mt-10 font-bold'>Increase Available services</h1>
                  </div>
                  <div>
                    <Button type="button" onClick={add_setIncrese_visa_type_selected_card_list} className=' uppercase text-3xl mt-10 font-bold'>
                      <TiPlus />
                    </Button>
                  </div>
                </div>

                <div className=' border-2 rounded-2xl m-5 p-5 space-y-5'>
                  <div>
                    <div>
                      <div className=' flex items-center justify-between'>
                        <div>
                          <h3 className=' text-lg font-semibold text-green-600'>Serivce 0</h3>
                        </div>
                        <div>
                          <h3 className=' text-lg font-semibold text-red-600'>Delete Serivce 0</h3>
                        </div>
                      </div>
                    </div>
                    <div className="  gap-3 mx-auto items-center justify-center mt-3">
                      <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}> Available services Name  </Label>
                      <Input className={"h-14"} name='Country_Name' placeholder="Write Country Name" type="text" />
                    </div>
                  </div>
                  {
                    Increse_visa_type_selected_card_list.map((serviceSection, index) => (
                      <div key={serviceSection.idsd}>
                        <div>
                          <div className=' flex items-center justify-between'>
                            <div>
                              <h3 className=' text-lg font-semibold text-green-600'>Serivce {index + 1}</h3>
                            </div>
                            <div>
                              <h3 className=' text-lg font-semibold text-red-600'>Delete Serivce {index + 1}</h3>
                            </div>
                          </div>
                        </div>
                        <div className="  gap-3 mx-auto items-center justify-center mt-3">
                          <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}> Available services Name  </Label>
                          <Input className={"h-14"} name='Country_Name' placeholder="Write Country Name" type="text" />
                        </div>
                      </div>
                    ))
                  }



                </div>
              </div>





            </div>
          </div>

          {/* Applying process  */}

          <div>
            <h1 className='uppercase text-lg mt-10 font-bold'>3. Applying Process</h1>

            <div>
              {/* visa type title  */}
              <div className="  gap-3 mx-auto items-center justify-center mt-5">
                <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}>Applying Process Title  </Label>
                <Input className={"h-14"} name='Country_Name' placeholder="Write Country Name" type="text" />
              </div>

              {/* visa type overview  */}
              <div className="  gap-3 mx-auto items-center justify-center mt-3">
                <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}> Applying Process Overview</Label>
                <Textarea className={"h-60"} name='Visa_Conditons' placeholder="Visa Conditions" type="text" />
              </div>

              {/* Applying Process Step question  */}


              <div className=' flex items-center justify-between'>
                <div>
                  <h1 className=' uppercase text-lg mt-10 font-bold'>Increase applying process card</h1>
                </div>
                <div>
                  <Button onClick={add_setIncrese_Applying_Process_Card} type="button" className=' uppercase text-3xl mt-10 font-bold'>
                    <TiPlus />
                  </Button>
                </div>
              </div>


              {/* dynaimc wise incress  */}

              <div className=' border-2 m-5 p-5 rounded-2xl'>
                <div>
                  <div>
                    <div className=' flex items-center justify-between'>
                      <div>
                        <h3 className=' text-lg font-semibold text-green-600'>Step 0</h3>
                      </div>
                      <div>
                        <h3 className=' text-lg font-semibold text-red-600'>Step Delete 0</h3>
                      </div>
                    </div>
                  </div>
                  <div className="  gap-3 mx-auto items-center justify-center mt-3">
                    <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}>Applying Process Step question  </Label>
                    <Input className={"h-14"} name='Country_Name' placeholder="Write Country Name" type="text" />
                  </div>

                  {/*  Applying Process Step answer  */}
                  <div className="  gap-3 mx-auto items-center justify-center mt-3">
                    <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}> Applying Process Step answer</Label>
                    <Textarea className={"h-60"} name='Visa_Conditons' placeholder="Visa Conditions" type="text" />
                  </div>
                </div>

                {/* dynamic wise form show  */}

                {
                  Increse_Applying_Process_Card.map((Applying_Process_Section, index) => (
                    <div className=' mt-5' key={Applying_Process_Section.id}>
                      <div>
                        <div className=' flex items-center justify-between'>
                          <div>
                            <h3 className=' text-lg font-semibold text-green-600'>Step {index + 1}</h3>
                          </div>
                          <div>
                            <h3 className=' text-lg font-semibold text-red-600'>Step Delete {index + 1}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="  gap-3 mx-auto items-center justify-center mt-3">
                        <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}>Applying Process Step question  </Label>
                        <Input className={"h-14"} name='Country_Name' placeholder="Write Country Name" type="text" />
                      </div>

                      {/*  Applying Process Step answer  */}
                      <div className="  gap-3 mx-auto items-center justify-center mt-3">
                        <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}> Applying Process Step answer</Label>
                        <Textarea className={"h-60"} name='Visa_Conditons' placeholder="Visa Conditions" type="text" />
                      </div>
                    </div>
                  ))
                }
              </div>




            </div>
          </div>


          {/* Time And fees  */}

          <div>
            <h1 className='uppercase text-lg mt-10 font-bold'> 4. Time, Fees and Others </h1>
            <div>
              <div className=' flex items-center justify-between'>
                <div>
                  <h1 className=' uppercase text-lg mt-10 font-bold'>Increase applying process card</h1>
                </div>
                <div>
                  <Button onClick={add_setsetIncrese_Time_Fees_Other} type="button" className=' uppercase text-3xl mt-10 font-bold'>
                    <TiPlus />
                  </Button>
                </div>
              </div>
            </div>


            <div className=' rounded-2xl border-2 p-5 m-5'>
              <div className=' border-2 mt-5 p-5 rounded-2xl'>
                <div className=' flex items-center justify-between '>
                  <div>
                    <h3 className=' text-lg font-semibold text-green-600'>Step 0</h3>
                  </div>
                  <div>
                    <h3 className=' text-lg font-semibold text-red-600'>Step Delete 0</h3>
                  </div>
                </div>
                <div>
                  {/* visa type title  */}
                  <div className="  gap-3 mx-auto items-center justify-center mt-5">
                    <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}>Time And fees Title  </Label>
                    <Input className={"h-14"} name='Country_Name' placeholder="Write Country Name" type="text" />
                  </div>

                  {/* visa type overview  */}
                  <div className="  gap-3 mx-auto items-center justify-center mt-3">
                    <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}> Time And fees Overview</Label>
                    <Textarea className={"h-60"} name='Visa_Conditons' placeholder="Visa Conditions" type="text" />
                  </div>

                </div>
              </div>

              {/* dynamic data  */}

              {
                Increse_Time_Fees_Other.map((time_data_sectin, index) => (
                  <div className=' border-2 mt-5 p-5 rounded-2xl' key={time_data_sectin.id}>
                    <div className=' flex items-center justify-between '>
                      <div>
                        <h3 className=' text-lg font-semibold text-green-600'>Form {index + 1} </h3>
                      </div>
                      <div>
                        <h3 className=' text-lg font-semibold text-red-600'>Delete Form {index + 1}</h3>
                      </div>
                    </div>
                    <div>
                      {/* visa type title  */}
                      <div className="  gap-3 mx-auto items-center justify-center mt-5">
                        <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}>Time And fees Title  </Label>
                        <Input className={"h-14"} name='Country_Name' placeholder="Write Country Name" type="text" />
                      </div>

                      {/* visa type overview  */}
                      <div className="  gap-3 mx-auto items-center justify-center mt-3">
                        <Label htmlFor="picture" className={"text-[16px] font-semibold pb-3"}> Time And fees Overview</Label>
                        <Textarea className={"h-60"} name='Visa_Conditons' placeholder="Visa Conditions" type="text" />
                      </div>

                    </div>
                  </div>
                ))
              }

            </div>
          </div>


          {/* faq section  */}

          <div>
            <h1 className='uppercase text-lg mt-10 font-bold'>5. FAQ </h1>

            <div className=' flex items-center justify-between mt-2 '>
              <div>
                <h1 className=' uppercase text-lg font-bold'>Increase FAQ process accodion</h1>
              </div>
              <div>
                <Button type='button' onClick={add_setIncrese_FAQ_process_accodion} className=' uppercase text-3xl  font-bold'>
                  <TiPlus />
                </Button>
               
              </div>
            </div>


            <div className=' border-2 rounded-2xl p-5 m-5'>

              <div>
                <div className=' flex items-center justify-between'>
                  <div>
                    <h3 className=' text-lg font-semibold text-green-600'>Faq 0</h3>
                  </div>
                  <div>
                    <h3 className=' text-lg font-semibold text-red-600'>Delete faq 0</h3>
                  </div>
                </div>


                {/* visa type title  */}
                <div className="  gap-3 mx-auto items-center justify-center mt-5">
                  <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}>Faq question  </Label>
                  <Input className={"h-14"} name='Country_Name' placeholder="Write Country Name" type="text" />
                </div>

                {/* visa type overview  */}
                <div className="  gap-3 mx-auto items-center justify-center">
                  <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}> Faq  answer</Label>
                  <Textarea className={"h-60"} name='Visa_Conditons' placeholder="Visa Conditions" type="text" />
                </div>


              </div>
              {/* dynaic file increase  */}

              {
                Increse_FAQ_process_accodion.map((faqSection, index) => (
                  <div className=' mt-5' key={faqSection.id} >
                    <div className=' flex items-center justify-between'>
                      <div>
                        <h3 className=' text-lg font-semibold text-green-600'>Faq {index + 1}</h3>
                      </div>
                      <div>
                        <h3 className=' text-lg font-semibold text-red-600'>Delete faq {index + 1}</h3>
                      </div>
                    </div>


                    {/* visa type title  */}
                    <div className="  gap-3 mx-auto items-center justify-center mt-5">
                      <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}>Faq question  </Label>
                      <Input className={"h-14"} name='Country_Name' placeholder="Write Country Name" type="text" />
                    </div>

                    {/* visa type overview  */}
                    <div className="  gap-3 mx-auto items-center justify-center">
                      <Label htmlFor="picture" className={"text-lg font-semibold pb-3"}> Faq  answer</Label>
                      <Textarea className={"h-60"} name='Visa_Conditons' placeholder="Visa Conditions" type="text" />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className=' py-3'>
            <Button className={"text-xl font-semibold py-4"}>Submit</Button>

          </div>
        </form>
      </div>
    </div>
  )
}
