"use client";
import {
  ShoppingBag,
  ShoppingCart,
  Star,
  StarHalf,
  Star as StarOutline,
} from "lucide-react";
import Product1 from "@/assets/images/products/1.jpg";
import Product2 from "@/assets/images/products/3.jpg";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { getDiscount, getAverageRating } from "../../../../utils/helpers";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

import { DatePicker } from "antd";

function StarRating({ rating }: { rating: any }) {
  const fullStars = Math.floor(rating); // Full stars
  const hasHalfStar = rating % 1 !== 0; // Half star if decimal exists
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="text-yellow-400 flex">
      {/* Render Full Stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <Star key={`full-${index}`} className="fill-current" size={20} />
        ))}

      {/* Render Half Star */}
      {hasHalfStar && <StarHalf className="fill-current" size={20} />}

      {/* Render Empty Stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <StarOutline
            key={`empty-${index}`}
            className="stroke-current"
            size={20}
          />
        ))}
    </div>
  );
}

function RightForm(props: any) {
  const [date, setDate] = React.useState<Date>();
  const { product_details } = props;
  return (
    <>
      <div>
        <h3 className="text-3xl font-semibold text-gray-800">
          {product_details?.product_name}
        </h3>
        <div className="mt-3 flex items-center gap-x-3">
          <StarRating
            rating={getAverageRating(product_details.product_ratings)}
          />
          <h4 className="text-gray-700 font-semibold text-base">
            {getAverageRating(product_details.product_ratings)}{" "}
            <span className="ml-2 text-gray-500 font-medium">
              {product_details.product_ratings.length} Reviews
            </span>
          </h4>
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-medium text-gray-800">
            ₹{product_details?.price}
            <span className="text-base ml-2 line-through text-gray-400">
              ₹{product_details?.offer_price}
            </span>
            <span className="text-orange-500 ml-3 font-semibold text-base">
              (
              {getDiscount(
                product_details.offer_price,
                product_details.price
              ).toFixed(1)}
              % OFF)
            </span>
          </h3>
        </div>
      </div>
      {/* form part start */}
      <div className="mt-5">
        {/* single item */}
        <div>
          <h5>Select the Frame Color:</h5>
          <div className="flex gap-x-5">
            <div className="cursor-pointer">
              <div className="mt-3">
                <Image className="h-32 w-32 rounded-md" src={Product1} alt="" />
                <h4 className="mt-1 text-center text-sm font-semibold text-gray-600">
                  Green
                </h4>
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="mt-3">
                <Image className="h-32 w-32 rounded-md" src={Product2} alt="" />
                <h4 className="mt-1 text-center text-sm font-semibold text-gray-600">
                  Red
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-x-4">
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
        <div className="mt-5">
          <h5>Radio option testing:</h5>
          <RadioGroup defaultValue="option-one" className="flex gap-x-4 mt-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="h-5 w-5"
                value="option-one"
                id="option-one"
              />
              <Label htmlFor="option-one">Small</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="h-5 w-5"
                value="option-two"
                id="option-two"
              />
              <Label htmlFor="option-two">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="h-5 w-5"
                value="option-three"
                id="option-three"
              />
              <Label htmlFor="option-three">Large</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="mt-5">
          <h5>Check button option testing:</h5>
          <div className="mt-3 flex items-center gap-x-4">
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
        <div className="mt-5 flex items-center gap-x-4">
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
        <div className="mt-5 flex items-center gap-x-4">
          <h5>Pick The Date:</h5>
          <DatePicker className="w-[200px] bg-white h-[45px] font-semibold text-sm hover:border-gray-500 focus:border-gray-500 outline-0" />
        </div>
        <div className="mt-5">
          <h5>Single Upload Photos:</h5>
          <div className="border w-[300px] mt-3">
            <input type="file" className="px-2 py-2 rounded-md" />
          </div>
          <p className="text-red-600 text-sm mt-2">Max Photos: 1</p>
        </div>
        <div className="mt-5">
          <h5>Multiple Upload Photos:</h5>
          <div className="border w-[300px] mt-3">
            <input type="file" className="px-2 py-2 rounded-md" />
          </div>
          <p className="text-red-600 text-sm mt-2">Max Photos: 8</p>
        </div>
      </div>
    </>
  );
}

export default RightForm;
