import Footer from '@/components/custom/Footer/Footer'
import Header from '@/components/custom/Header/Header'
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Divider, Select } from 'antd';
import React from 'react'

function page() {
  return (
    <>
      <Header />
      <div className="py-14 bg-[url(https://plus.unsplash.com/premium_photo-1672883552384-087b8a7acdb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat relative z-10">
        <div className="absolute inset-0 bg-black opacity-15 -z-10"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className=" text-center">
              <h3 className="text-3xl font-semibold text-[#fff]">Checkout</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="px-2 sm:px-10 mt-10 pb-10">
          <div className='grid xl:grid-cols-5 gap-5'>
            <div className='xl:col-span-3'>
              <div>
                <h3 className='text-2xl'>Contact Information</h3>
                <div className="grid sm:grid-cols-2 gap-3 mt-2">
                  <div>
                    <Input placeholder='Name' className='px-3' />
                  </div>
                  <div>
                    <Input placeholder='Mobile number' className='px-3' />
                  </div>
                </div>
              </div>
              <div className='mt-4'>
                <p className='text-blue-700'>★ We will contact to this number if there is any issue with the order.</p>
              </div>
              <div className='mt-4'>
                <h3 className='text-2xl'>Delivery Information</h3>
                <div className='mt-2'>
                  <Input placeholder='Email address' className='px-3' />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div>
                    <Input placeholder='First Name' className='px-3' />
                  </div>
                  <div>
                    <Input placeholder='Last Name' className='px-3' />
                  </div>
                </div>
                <div>
                  <textarea placeholder='H.No / street / locality' className='px-3 w-full resize-none mt-3 bg-transparent border border-gray-200 rounded-md py-2 focus:!border-gray-200 outline-none' />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <div>
                    <Input placeholder='Landmark' className='px-3' />
                  </div>
                  <div>
                    <Input placeholder='City' className='px-3' />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                  <div>
                    <Select placeholder="Select state" size='large' className='border !border-gray-300 !bg-transparent w-full !h-12 font-medium text-sm rounded-md !text-gray-700' />
                  </div>
                  <div>
                    <Select placeholder="Select City" size='large' className='border !border-gray-300 !bg-transparent w-full !h-12 font-medium text-sm rounded-md !text-gray-700' />
                  </div>
                  <div>
                    <Input placeholder='Pin Code' className='px-3' />
                  </div>
                </div>
                <div className='mt-2 w-full'>
                  <Input placeholder='Phone Number' className='px-3 w-full' />
                </div>
                <div className='mt-3'>
                  <Button className='uppercase'>Continue Shipping</Button>
                </div>
              </div>
            </div>
            <div className='xl:col-span-2'>
              <div className='bg-white p-4 rounded-md shadow-2xl'>
                <h3 className='text-xl'>Apply Coupon</h3>
                <div className='flex justify-between items-center gap-3 mt-2'>
                  <div className='flex-1'>
                    <Input placeholder='Coupon Code' />
                  </div>
                  <div className='min-w-[120px]'>
                    <Button className='uppercase w-full'>Apply</Button>
                  </div>
                </div>
                <div className='mt-3'>
                  <h3 className='text-xl'>Payment Details</h3>
                  <div className='mt-3'>
                    <div className="flex justify-between items-center">
                      <h6 className="font-medium text-base text-gray-700">Sub total</h6>
                      <h6 className="font-semibold text-base text-gray-800">₹0</h6>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <h6 className="font-medium text-base text-gray-700">Shipping charges</h6>
                      <h6 className="font-semibold text-base text-gray-800">₹90</h6>
                    </div>
                    <Divider className='my-3' />
                    <div className="flex justify-between items-center">
                      <h6 className="font-medium text-xl text-brand">Total Amount</h6>
                      <h6 className="font-semibold text-xl text-brand">₹0</h6>
                    </div>
                    <Divider className='my-3' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default page