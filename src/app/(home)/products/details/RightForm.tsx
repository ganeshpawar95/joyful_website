"use client"
import { ShoppingBag, ShoppingCart, Star, StarHalf } from 'lucide-react'
import Product1 from '@/assets/images/products/1.jpg'
import Product2 from '@/assets/images/products/3.jpg'
import Image from 'next/image'


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'






function RightForm() {
    const [date, setDate] = React.useState<Date>()
    return (
        <>
            <div>
                <h3 className='text-3xl font-semibold text-gray-800'>Name a Star with frame</h3>
                <div className='mt-3 flex items-center gap-x-3'>
                    <div className='text-yellow-400 flex'>
                        <Star className='fill-current' size={20} />
                        <Star className='fill-current' size={20} />
                        <Star className='fill-current' size={20} />
                        <Star className='fill-current' size={20} />
                        <StarHalf className='fill-current' size={20} />
                    </div>
                    <h4 className='text-gray-700 font-semibold text-base'>4.7 <span className='ml-2 text-gray-500 font-medium'>6 Reviews</span></h4>
                </div>
                <div className='mt-4'>
                    <h3 className='text-2xl font-medium text-gray-800'>₹499.00
                        <span className='text-base ml-2 line-through text-gray-400'>₹599.00</span>
                        <span className='text-orange-500 ml-3 font-semibold text-base'>(17% OFF)</span>
                    </h3>
                </div>
            </div>
            {/* form part start */}
            <div className='mt-5'>
                {/* single item */}
                <div>
                    <h5>Select the Frame Color:</h5>
                    <div className='flex gap-x-5'>
                        <div className='cursor-pointer'>
                            <div className='mt-3'>
                                <Image className='h-32 w-32 rounded-md' src={Product1} alt='' />
                                <h4 className='mt-1 text-center text-sm font-semibold text-gray-600'>Green</h4>
                            </div>
                        </div>
                        <div className='cursor-pointer'>
                            <div className='mt-3'>
                                <Image className='h-32 w-32 rounded-md' src={Product2} alt='' />
                                <h4 className='mt-1 text-center text-sm font-semibold text-gray-600'>Red</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 flex items-center gap-x-4'>
                    <h5>Dropdown option testing:</h5>
                    <Select>
                        <SelectTrigger className="w-[200px] bg-white">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Small</SelectItem>
                            <SelectItem value="dark">Medium</SelectItem>
                            <SelectItem value="system">Large</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='mt-5'>
                    <h5>Radio option testing:</h5>
                    <RadioGroup defaultValue="option-one" className='flex gap-x-4 mt-3'>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem className="h-5 w-5" value="option-one" id="option-one" />
                            <Label htmlFor="option-one">Small</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem className="h-5 w-5" value="option-two" id="option-two" />
                            <Label htmlFor="option-two">Medium</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem className="h-5 w-5" value="option-three" id="option-three" />
                            <Label htmlFor="option-three">Large</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div className='mt-5'>
                    <h5>Check button option testing:</h5>
                    <div className='mt-3 flex items-center gap-x-4'>
                        <div className="flex items-center space-x-2">
                            <Checkbox className="h-5 w-5" id="medium" />
                            <Label htmlFor="medium">Medium</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox className="h-5 w-5" id="large" />
                            <Label htmlFor="large">large</Label>
                        </div>
                    </div>
                </div>
                <div className='mt-5 flex items-center gap-x-4'>
                    <h5>Plan List option testing:</h5>
                    <ToggleGroup variant="outline" type="single">
                        <ToggleGroupItem value="bold" aria-label="Toggle bold">
                            Medium
                        </ToggleGroupItem>
                        <ToggleGroupItem value="italic" aria-label="Toggle italic">
                            Large
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
                <div className='mt-5 flex items-center gap-x-4'>
                    <h5>Pick The Date:</h5>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[280px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className='mt-5'>
                    <h5>Single Upload Photos:</h5>
                    <div className="border w-[300px] mt-3">
                        <input type="file" className='px-2 py-2 rounded-md' />
                    </div>
                    <p className='text-gray-500 text-sm mt-2'>Max Photos: 1</p>
                </div>
                <div className='mt-5'>
                    <h5>Multiple Upload Photos:</h5>
                    <div className="border w-[300px] mt-3">
                        <input type="file" className='px-2 py-2 rounded-md' />
                    </div>
                    <p className='text-gray-500 text-sm mt-2'>Max Photos: 8</p>
                </div>
                <div className='mt-5'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <Button className='w-full rounded-2xl'>
                                <ShoppingCart />
                                Add to Cart
                            </Button>
                        </div>
                        <div>
                            <Button variant='orange' className='w-full rounded-2xl'>
                                <ShoppingBag className='h-5 w-5' />
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RightForm