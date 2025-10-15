import React from 'react'

export default function Service_Section() {
    return (
        <div >

            {/* background image */}
            <div className="bg-[url(/images/book_mockup_2.webp)]  w-full bg-cover bg-center ">

                {/* header text seciton */}
                <div className=' '>
                    <h1 className=' text-3xl font-[700] text-center text-white py-10'>We provide the following services:</h1>

                </div>
                {/* card section */}
                <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-5 md:px-10 lg:px-[7] xl:px-[10%] gap-x-4 gap-y-5 pb-10'>
                    <div className='  w-full bg-white rounded-2xl pb-5'>
                        <h1 className=' text-xl font-[600] text-black text-center py-5'>Consultations on  <br /> visa issues:</h1>
                        <p className='px-4 text-[16px] font-semibold py-2'>
                            - We provide detailed information on all types of visas, including tourist, study, work and immigration visas.


                        </p>
                        <p className='px-4 text-[16px] font-semibold py-2'>


                            - We help to understand and choose the most suitable visa regime depending on the purpose of the trip and the client’s individual circumstances.
                        </p>
                    </div>
                    <div className='  w-full bg-white rounded-2xl pb-5'>
                        <h1 className=' text-xl font-[600] text-black text-center py-5'>Registration of <br /> visas:</h1>
                        <p className='px-4 text-[16px] font-semibold py-2'>
                            - We carry out the full cycle of processing visa documents, including filling out forms, collecting and checking the necessary documents, preparing for an interview at the consulate.


                        </p>
                        <p className='px-4 text-[16px] font-semibold py-2'>
                                - We provide support at all stages of the visa process, minimizing the risks of refusal.
                        </p>
                    </div>
                    <div className='  w-full bg-white rounded-2xl pb-5'>
                        <h1 className=' text-xl font-[600] text-black text-center py-5'>Employment <br />in the EU:</h1>
                        <p className='px-4 text-[16px] font-semibold py-2'>
                            - We cooperate with leading European employers, providing a wide selection of vacancies in various industries.


                        </p>
                        <p className='px-4 text-[16px] font-semibold py-2'>


                           - We organize job searches, prepare resumes and cover letters, assist in interviews and draw up employment contracts.
                        </p>
                    </div>
                    <div className='  w-full bg-white rounded-2xl pb-5'>
                        <h1 className=' text-xl font-[600] text-black text-center py-5'>ImmigrationImmigration  <br /> services:</h1>
                        <p className='px-4 text-[16px] font-semibold py-2'>
                                - We advise on obtaining residence permits and citizenship in EU countries.

                        </p>
                        <p className='px-4 text-[16px] font-semibold py-2'>


                            - We help with the preparation of all necessary documents and interaction with government agencies.

                        </p>
                    </div>
                    <div className='  w-full bg-white rounded-2xl pb-5'>
                        <h1 className=' text-xl font-[600] text-black text-center py-5'>Educational  <br /> programs:</h1>
                        <p className='px-4 text-[16px] font-semibold py-2'>
                            - We assist in admission to EU educational institutions, including assistance in choosing a program, preparing documents for admission and obtaining student visas.

                        </p>
                        <p className='px-4 text-[16px] font-semibold py-2'>


                            - We provide support at all stages of training, including adaptation and integration into the new environment.                        </p>
                    </div>
                    <div className='  w-full bg-white rounded-2xl pb-5'>
                        <h1 className=' text-xl font-[600] text-black text-center py-5'>CLegalization of  <br /> documents:</h1>
                        <p className='px-4 text-[16px] font-semibold py-2'>
                           - We provide services for apostille and legalization of documents required for applying for visas and employment in the EU.


                        </p>
                        <p className='px-4 text-[16px] font-semibold py-2'>


                            - We ensure the correct execution and submission of documents in accordance with the requirements of the European authorities.
                        </p>
                    </div>
                    
                    
                </div>

            </div>


        </div>
    )
}
