import Footer from '@/components/custom/Footer/Footer'
import Header from '@/components/custom/Header/Header'
import WorkProcess from '@/components/custom/WorkProcess/WorkProcess'
import { Button } from '@/components/ui/button'
import { Steps } from 'antd'
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { DownloadIcon, Trash2, Truck } from "lucide-react"
import Product1 from '@/assets/images/products/1.jpg'
import QrcodeImage from '@/assets/images/qrcode.png'
import Image from "next/image"


function page() {
    return (
        <>
            <Header />
            <div className='py-10'>
                <div className="container mx-auto">
                    <div className='flex justify-between items-center'>
                        <h4 className='text-2xl font-semibold text-gray-700'>Thank you for your order <span className='text-red-500'>#123456</span></h4>
                        <div className='flex gap-3'>
                            <Button size="sm">Continue Shopping</Button>
                            <Button variant='outline' size="sm">
                                <DownloadIcon />
                                Add Invoice
                            </Button>
                        </div>
                    </div>
                    <div className='mt-4 border border-gray-500 p-10 pb-0 rounded-md'>
                        <h4 className='text-2xl font-medium flex items-center gap-2'>
                            <div className='h-10 w-10 bg-brand rounded-full flex items-center justify-center text-white'>
                                <Truck />
                            </div>
                            <span>We will send you tracking information over Whatsapp</span>
                        </h4>
                        <div className='mt-5'>
                            <Row>
                                <Col xl={7}>
                                    <Row>
                                        <Col xl={6}>
                                            <div>
                                                <h4 className='text-xl font-semibold border-b pb-2'>Order Placed</h4>
                                                <h5 className='mt-2 font-medium text-md text-blue-400'>Contact information</h5>
                                                <ul className='mt-2 flex flex-col gap-y-1'>
                                                    <li className='text-sm font-medium text-gray-600'>Full name: Jhone doe</li>
                                                    <li className='text-sm font-medium text-gray-600'>Email: Jhonedoe@gmail.com</li>
                                                    <li className='text-sm font-medium text-gray-600'>Phone: +9186-287682-991</li>
                                                    <li className='text-sm font-medium text-gray-600'>Whatsapp: +9186-287682-991</li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl={6}>
                                            <div>
                                                <h4 className='text-xl font-semibold border-b pb-2'>Shipping Address</h4>
                                                <h5 className='mt-2 font-medium text-md text-blue-400'>Full address for shipped</h5>
                                                <p className='mt-2 text-sm max-w-[50%]'>
                                                    Rucas Royal,
                                                    465 Elm Street, Apt 3B,
                                                    Philadhapia, PA 190104, USA, Near university city
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div className="detailsTable mt-4">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow className="bg-blue-400 text-center hover:bg-blue-400">
                                                        <TableHead className="text-white text-center border-r border-gray-300">Image</TableHead>
                                                        <TableHead className="text-white text-center border-r border-gray-300">Product Name</TableHead>
                                                        <TableHead className="text-white text-center border-r border-gray-300">Quantity</TableHead>
                                                        <TableHead className="text-white text-center">Total</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow className="text-center">
                                                        <TableCell className="border-r border-gray-300">
                                                            <Image className="h-10 w-10 rounded-sm mx-auto" src={Product1} alt="" />
                                                        </TableCell>
                                                        <TableCell className="border-r border-gray-300">
                                                            <span>Name a Star with frame</span>
                                                        </TableCell>
                                                        <TableCell className="border-r border-gray-300">
                                                            <span>1</span>
                                                        </TableCell>
                                                        <TableCell>
                                                            <span>₹599.00</span>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </Row>
                                </Col>
                                <Col xl={5}>
                                    <div className='pl-10'>
                                        <Steps
                                            progressDot
                                            current={1}
                                            direction="vertical"
                                            items={[
                                                {
                                                    title: 'Order Placed',
                                                    description: '08/10/2012',
                                                },
                                                {
                                                    title: 'Processing',
                                                    description: '12/10/2012',
                                                },
                                                {
                                                    title: 'Shipped',
                                                    description: '14/10/2012',
                                                },
                                                {
                                                    title: 'Delivered',
                                                    description: '20/10/2012',
                                                },
                                            ]}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <Row>
                            <Col xl={4}>
                                <h4 className='text-base font-semibold border-b pb-2 text-gray-700 px-2'>Order Summary</h4>
                                <div className='border-b py-2 px-2'>
                                    <div className='flex justify-between items-center gap-x-2 font-medium text-sm mb-1'>
                                        <div>Subtotal</div>
                                        <div>00.00</div>
                                    </div>
                                    <div className='flex justify-between items-center gap-x-2 font-medium text-sm mb-1'>
                                        <div>CGST (9%)</div>
                                        <div>00.00</div>
                                    </div>
                                    <div className='flex justify-between items-center gap-x-2 font-medium text-sm mb-1'>
                                        <div>SGST (9%)</div>
                                        <div>00.00</div>
                                    </div>
                                    <div className='flex justify-between items-center gap-x-2 font-medium text-sm mb-1'>
                                        <div>Shipping Charges</div>
                                        <div>00.00</div>
                                    </div>
                                </div>
                                <div className='px-2 py-1'>
                                    <div className='flex justify-between items-center gap-x-2 font-medium text-base text-brand mb-1'>
                                        <div>Total</div>
                                        <div>00.00</div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <h4 className='text-base font-semibold border-b pb-2 text-gray-700 px-2 text-center'>Payment Type</h4>
                                <h4 className='px-2 py-2 font-medium text-xl text-brand'>Payment type: Card</h4>
                            </Col>
                            <Col xl={4}>
                                <h4 className='text-base font-semibold border-b pb-2 text-gray-700 px-2 text-center'>Billing Information</h4>
                                <h4 className='text-center py-2 text-gray-900 font-medium'>Same as Shipping address</h4>
                            </Col>
                        </Row>
                    </div>
                    <div className='flex items-center mt-4 flex-col gap-y-2'>
                        <Image className='h-28 w-28' src={QrcodeImage} alt='' />
                        <h4 className='text-xl font-semibold text-gray-700 mt-2'>Scan the QR code to give review</h4>
                    </div>
                </div>
            </div>
            <div className='bg-[#3DC2EE]'>
                <div className="container mx-auto">
                    <h4 className='text-center font-medium text-xl py-3 text-white'>Send us the Opening video to our whatsapp (+91 9966558383) and get INR 100/- Cash back Instantly</h4>
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