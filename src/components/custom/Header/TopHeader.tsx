import React from 'react'

function TopHeader() {
    return (
        <div className='py-2'>
            <marquee direction="left" loop="">
                <h3 className='inline-block w-2/6 text-blue-400'>100% Satisfaction Guarantee</h3>
                <h3 className='inline-block w-2/6 text-blue-400'>Free Delivery on orders above 2000</h3>
                <h3 className='inline-block w-2/6 text-blue-400'>Dispatch on Same Day</h3>
            </marquee>
        </div>
    )
}

export default TopHeader