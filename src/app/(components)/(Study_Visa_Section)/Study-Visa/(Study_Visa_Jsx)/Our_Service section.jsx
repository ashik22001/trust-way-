import React from 'react'

export default function Our_Service_section() {
    return (
        <div className=' bg-white py-5 pb-8'>


            {/* header title  */}

            <h3 className='text-center font-semibold text-4xl text-[#110078] py-3 pb-5'>OUR SERVICES </h3>

            {/* card section  */}

            <div className=' px-5 md:px-[10%] grid  lg:grid-cols-3 gap-x-5 gap-y-5'>
                <div className=' bg-white rounded-2xl shadow-lg shadow-gray-500 '>
                    <h3 className='text-center font-bold text-2xl text-[#110078] pt-3'>Consultation on studying abroad </h3>
                    <p className=' text-lg py-5 px-6 text-center'>
                        Studying abroad is an important procedure, but it but is no longer complicated. A good study abroad consultant helps students by advising them on the best time to apply to a particular university. We provide counseling to Indian students who want to study abroad.
                    </p>
                </div>
               
                <div className=' bg-white rounded-2xl shadow-lg shadow-gray-500 '>
                    <h3 className='text-center font-bold text-2xl text-[#110078] pt-3'>Country selection </h3>
                    <p className=' text-lg py-5 px-6 text-center'>
                        Choosing a university abroad for educational purposes requires adequate guidance and expert advice to focus on the specific country, institute and curriculum. UniLife offers comprehensive solutions for everything you want to study abroad.
                    </p>
                </div>
               
                <div className=' bg-white rounded-2xl shadow-lg shadow-gray-500 '>
                    <h3 className='text-center font-bold text-2xl text-[#110078] pt-3'>Scholarship/Financial Aid</h3>
                    <p className=' text-lg py-5 px-6 text-center'>
                       The scholarship is financial assistance provided to a person to help him or her continue his or her education. The Indian education system also follows this method by providing scholarships to students under various schemes launched by the Indian government.
                    </p>
                </div>
               
            </div>
        </div>
    )
}
