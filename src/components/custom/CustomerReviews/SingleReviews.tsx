import { Star } from "lucide-react"
import Image from "next/image"
import Product1 from '@/assets/images/products/p1.jpg'
import Product2 from '@/assets/images/products/p2.jpg'

function SingleReviews() {
    return (
        <div className="shadow-sm p-4 rounded-md bg-white">
            <div className="flex gap-1">
                <Star size={20} className="fill-green-600 stroke-none" />
                <Star size={20} className="fill-green-600 stroke-none" />
                <Star size={20} className="fill-green-600 stroke-none" />
                <Star size={20} className="fill-green-600 stroke-none" />
                <Star size={20} className="fill-green-600 stroke-none" />
            </div>
            <h4 className="text-gray-600 font-medium mt-2">Timeless Memories</h4>
            <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At asperiores pariatur aliquid maiores accusantium ratione et facilis culpa qui dolores?</p>
            <div className="grid grid-cols-3 gap-4 mt-3">
                <Image className="h-14 object-cover rounded-sm" src={Product1} alt="" />
                <Image className="h-14 object-cover rounded-sm" src={Product1} alt="" />
                <Image className="h-14 object-cover rounded-sm" src={Product1} alt="" />
            </div>
            <div className="flex justify-between mt-3">
                <h4 className="text-sm font-medium text-gray-600">Shiva</h4>
                <h4 className="text-sm font-medium text-gray-600">Jan 07, 2025</h4>
            </div>
        </div>
    )
}

export default SingleReviews