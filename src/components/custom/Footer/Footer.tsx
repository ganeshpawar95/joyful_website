import { Facebook, Instagram } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <div className='bg-[#41C2EC] py-10 px-4 sm:px-20 flex justify-between flex-col sm:flex-row gap-y-5'>
            <div className='basis-1/3'>
                <h3 className='text-white text-2xl'>About Us</h3>
                <p className='text-sm font-medium mt-1 text-white/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero nisi suscipit hic incidunt repellendus quis aliquam illum explicabo minima dolorem quia in ex dignissimos, sunt vitae consequatur error optio.</p>
            </div>
            <div>
                <h4 className='text-white/90 font-medium text-lg'>Information</h4>
                <ul className='mt-2'>
                    <li>
                        <a className='text-white/70 font-medium text-sm text-center inline' href="#">Privacy Policy</a>
                    </li>
                    <li className='mt-1'>
                        <a className='text-white/70 font-medium text-sm text-center inline' href="#">Terms of Service</a>
                    </li>
                    <li className='mt-1'>
                        <a className='text-white/70 font-medium text-sm text-center inline' href="#">Refund Policy</a>
                    </li>
                    <li className='mt-1'>
                        <a className='text-white/70 font-medium text-sm text-center inline' href="#">Shipping Policy</a>
                    </li>
                    <li className='mt-1'>
                        <a className='text-white/70 font-medium text-sm text-center inline' href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className='text-white/90 font-medium text-lg'>Quick Links</h4>
                <ul className='mt-2'>
                    <li>
                        <a className='text-white/70 font-medium text-sm text-center inline' href="#">Home</a>
                    </li>
                    <li className='mt-1'>
                        <a className='text-white/70 font-medium text-sm text-center inline' href="#">Products</a>
                    </li>
                    <li className='mt-1'>
                        <a className='text-white/70 font-medium text-sm text-center inline' href="#">Find Your Star</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className='text-white/90 font-medium text-lg'>Follow Us</h4>
                <ul className='mt-2 flex items-center gap-3'>
                    <li>
                        <a className='text-white/70 font-medium text-sm text-center inline' href="#">
                            <Instagram />
                        </a>
                    </li>
                    <li className='mt-1'>
                        <a className='text-white/70 font-medium text-sm text-center inline' href="#">
                            <Facebook />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className='text-white/90 font-medium text-lg'>Payments</h4>

            </div>
        </div>
    )
}

export default Footer