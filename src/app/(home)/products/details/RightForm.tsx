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

import { DatePicker, Radio } from 'antd';




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
                    <h5>Select Certificate Color:</h5>
                    <div className='flex gap-x-5'>


                    </div>
                    <div>
                        <Radio.Group
                            //   onChange={onChange}
                            //   value={value}
                            className='selectRadioBoxCustom'
                            options={[
                                {
                                    value: 1,
                                    label: (
                                        <div className='cursor-pointer'>
                                            <div className='mt-3'>
                                                <Image className='h-32 w-32 rounded-md border-3 border-red-500' src={Product1} alt='' />
                                                {/* <h4 className='mt-1 text-center text-sm font-semibold text-gray-600'>Green</h4> */}
                                            </div>
                                        </div>
                                    ),
                                },
                                {
                                    value: 2,
                                    label: (
                                        <div className='cursor-pointer'>
                                            <div className='mt-3'>
                                                <Image className='h-32 w-32 rounded-md border-3 border-green-500' src={Product2} alt='' />
                                                {/* <h4 className='mt-1 text-center text-sm font-semibold text-gray-600'>Red</h4> */}
                                            </div>
                                        </div>
                                    ),
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className='mt-3'>
                    <h5>Select Frame Color:</h5>
                    <div className='flex gap-x-5'>
                    </div>
                    <div>
                        <Radio.Group defaultValue="a" size="large" className='mt-2' buttonStyle="solid">
                            <Radio.Button value="a">Black</Radio.Button>
                            <Radio.Button value="b">White</Radio.Button>
                            <Radio.Button value="c">Blue</Radio.Button>
                            <Radio.Button value="d">Red</Radio.Button>
                        </Radio.Group>
                    </div>
                </div>
                <div className='mt-3'>
                    <h5>Select Frame Size (INCH):</h5>
                    <div className='flex gap-x-5'>
                    </div>
                    <div>
                        <Radio.Group defaultValue="b" size="large" className='mt-2' buttonStyle="solid">
                            <Radio.Button value="a">8 x 12</Radio.Button>
                            <Radio.Button value="b">10 x 14</Radio.Button>
                            <Radio.Button value="c">12 x 17</Radio.Button>
                            <Radio.Button value="d">16 x 16</Radio.Button>
                        </Radio.Group>
                    </div>
                </div>
                <div className='mt-3'>
                    <h5>Select Thickness:</h5>
                    <div className='flex gap-x-5'>
                    </div>
                    <div>
                        <Radio.Group defaultValue="c" size="large" className='mt-2' buttonStyle="solid">
                            <Radio.Button value="a">3mm</Radio.Button>
                            <Radio.Button value="b">4mm</Radio.Button>
                            <Radio.Button value="c">5mm</Radio.Button>
                        </Radio.Group>
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
                    <DatePicker className="w-[200px] bg-white h-[45px] font-semibold text-sm hover:border-gray-500 focus:border-gray-500 outline-0" />
                </div>
                <div className='mt-5'>
                    <h5>Single Upload Photos:</h5>
                    <div className="border w-[300px] mt-3">
                        <input type="file" className='px-2 py-2 rounded-md' />
                    </div>
                    <p className='text-red-600 text-sm mt-2'>Max Photos: 1</p>
                </div>
                <div className='mt-5'>
                    <h5>Multiple Upload Photos:</h5>
                    <div className="border w-[300px] mt-3">
                        <input type="file" className='px-2 py-2 rounded-md' />
                    </div>
                    <p className='text-red-600 text-sm mt-2'>Max Photos: 8</p>
                </div>
            </div>
        </>
    )
}

export default RightForm