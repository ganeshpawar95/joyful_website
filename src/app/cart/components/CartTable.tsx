import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Trash2 } from "lucide-react"
import Product1 from '@/assets/images/products/1.jpg'
import Image from "next/image"

function CartTable() {
    return (
        <div className='container mx-auto py-10'>
            <Table>
                <TableHeader>
                    <TableRow className="bg-blue-400 text-center hover:bg-blue-400">
                        <TableHead className="w-[100px] text-white text-center border-r border-gray-300">Remove</TableHead>
                        <TableHead className="text-white text-center border-r border-gray-300">Image</TableHead>
                        <TableHead className="text-white text-center border-r border-gray-300">Product Name</TableHead>
                        <TableHead className="text-white text-center border-r border-gray-300">Quantity</TableHead>
                        <TableHead className="text-white text-center">Total</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="text-center">
                        <TableCell className="border-r border-gray-300">
                            <Button variant="outline" size="icon" className="hover:bg-red-500 hover:text-white hover:border-red-500 rounded-full">
                                <Trash2 />
                            </Button>
                        </TableCell>
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
                    <TableRow className="text-center">
                        <TableCell className="border-r border-gray-300">
                            <Button variant="outline" size="icon" className="hover:bg-red-500 hover:text-white hover:border-red-500 rounded-full">
                                <Trash2 />
                            </Button>
                        </TableCell>
                        <TableCell className="border-r border-gray-300">
                            <Image className="h-10 w-10 rounded-sm mx-auto" src={Product1} alt="" />
                        </TableCell>
                        <TableCell className="border-r border-gray-300">
                            <span>Personalized Anniversary Keepaske Box</span>
                        </TableCell>
                        <TableCell className="border-r border-gray-300">
                            <span>1</span>
                        </TableCell>
                        <TableCell>
                            <span>₹1299.00</span>
                        </TableCell>
                    </TableRow>
                    <TableRow className="text-center">
                        <TableCell className="border-r border-gray-300">
                            <Button variant="outline" size="icon" className="hover:bg-red-500 hover:text-white hover:border-red-500 rounded-full">
                                <Trash2 />
                            </Button>
                        </TableCell>
                        <TableCell className="border-r border-gray-300">
                            <Image className="h-10 w-10 rounded-sm mx-auto" src={Product1} alt="" />
                        </TableCell>
                        <TableCell className="border-r border-gray-300">
                            <span>Timeless Memories Photo Freame Set</span>
                        </TableCell>
                        <TableCell className="border-r border-gray-300">
                            <span>1</span>
                        </TableCell>
                        <TableCell>
                            <span>₹699.00</span>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default CartTable