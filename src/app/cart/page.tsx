"use client"

import Header from "@/components/custom/Header/Header"

import CartTable from "./components/CartTable"
import { Button } from "@/components/ui/button"
import WorkProcess from "@/components/custom/WorkProcess/WorkProcess"
import Footer from "@/components/custom/Footer/Footer"

function page() {
    return (
        <>
            <Header />
            <div className="bg-[#41C2EC] py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className=" text-center">
                            <h3 className="text-3xl font-semibold text-[#fff]">Cart</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <CartTable />
                <div className="sm:mt-3 container mx-auto">
                    <div className="sm:w-1/2 ml-auto border">
                        <div className="bg-blue-400 py-3 px-6">
                            <h4 className="text-white font-medium">Cart Total</h4>
                        </div>
                        <div className="px-6 py-4">
                            <div className="flex justify-between items-center">
                                <h6 className="font-semibold text-sm text-gray-600">Total</h6>
                                <h6 className="font-bold text-sm text-gray-800">₹2597.00</h6>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-end gap-x-2 gap-y-2 mt-5">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto">Continue Shopping</Button>
                                <Button size="lg" className="w-full sm:w-auto">Proceed to Checkout</Button>
                            </div>
                        </div>
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