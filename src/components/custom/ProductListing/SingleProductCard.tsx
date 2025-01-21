"use client"

import Image from "next/image";
import Link from "next/link";

interface Product {
    title: string;
    image: string;
    price: number;
    offerPrice: number;
}

function SingleProductCard({ product }: { product: Product }) {
    const {
        title,
        image,
        price,
        offerPrice,
    } = product;
    return (
        <Link href="/">
            <div className="bg-white h-full rounded-md overflow-hidden shadow-sm">
                <Image src={image} alt="" />
                <div className="p-4 text-center">
                    <h4 className="text-lg font-medium text-gray-700">{title}</h4>
                    <h5 className="text-base font-medium">₹ {offerPrice} <span className="text-red-500 line-through ml-1 text-sm">₹ {price}</span></h5>
                </div>

            </div>
        </Link>
    )
}

export default SingleProductCard