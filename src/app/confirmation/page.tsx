import Footer from '@/components/custom/Footer/Footer'
import Header from '@/components/custom/Header/Header'
import WorkProcess from '@/components/custom/WorkProcess/WorkProcess'
import React from 'react'

function page() {
    return (
        <>
            <Header />
            <div className='bg-[#EBF8FD] py-20'>
                <div className="container mx-auto">
                    <div className='text-center'>
                        <h1 className='border-b-2 border-gray-500 w-max mx-auto text-4xl font-bold pb-3 text-gray-700'>Payment successful</h1>
                        <h4 className='mt-3 text-2xl font-medium text-gray-900'>Order Id: <span className='font-semibold text-red-500'>#123456</span></h4>
                        <h4 className='text-2xl mt-4 font-medium text-gray-700'>We will notify you of all the details via email. <br /> Thank you!</h4>
                        <h4 className='text-2xl mt-4 font-medium text-gray-700'>You will be redirected to Order Page in <br /> 10 Seconds</h4>
                    </div>
                </div>
            </div>
            <div className="px-4 sm:px-10 mt-10 pb-10">
                <WorkProcess />
            </div>
            <Footer />
        </>
    )
}

export default page