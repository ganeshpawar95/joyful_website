"use client";
import DetailsSlider from "@/components/custom/DetailsPreview/DetailsSlider";
import Footer from "@/components/custom/Footer/Footer";
import Header from "@/components/custom/Header/Header";
import ProductListing from "@/components/custom/ProductListing/ProductListing";
import WorkProcess from "@/components/custom/WorkProcess/WorkProcess";
import RightForm from "./RightForm";

import GiftImage from '@/assets/images/banner/gift-image.jpg'
import Image from "next/image";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { useMediaQuery } from 'react-responsive'
import { useState } from "react";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';




function ProductDetails() {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })
  const [isExpanded, setIsExpanded] = useState(false);


  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Product description',
      children: <>
        <div className={`overflow-hidden ${isMobile && !isExpanded ? 'max-h-[200px]' : ''}`}>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Description</h2>
          <p className="text-gray-600 leading-6 text-base mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quisquam! Recusandae corporis adipisci eum laborum labore nesciunt cumque, earum, eaque tempore facere dignissimos id consequuntur, quasi corrupti praesentium magnam velit obcaecati quibusdam. Magni, ipsum! Quasi ex quis magnam natus, tenetur iste non consequatur commodi asperiores? A nisi sed, optio repudiandae magni rerum facere deleniti sapiente dolorem ducimus pariatur eveniet, laboriosam aperiam adipisci! Minus fugit ipsum natus consequatur voluptatem laboriosam cumque voluptates cupiditate consequuntur quod nam quae alias totam itaque, molestias eum earum nulla sunt excepturi numquam dolor officiis perspiciatis. Fugiat impedit quam in sed reiciendis dolorum vero nemo natus nam.</p>
          <p className="text-gray-600 leading-6 text-base mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate fugit eum amet voluptates necessitatibus nulla iusto velit, accusantium illo iure voluptate asperiores accusamus ipsa reprehenderit, atque cumque earum laboriosam, odit temporibus assumenda quasi facere saepe. Libero placeat nobis quod voluptatem expedita, reiciendis, ut, corrupti voluptate eius error beatae. Nostrum!</p>
          <Image className="w-2/3 mt-5 mb-5" src={GiftImage} alt="" />
          <p className="text-gray-600 leading-6 text-base mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate fugit eum amet voluptates necessitatibus nulla iusto velit, accusantium illo iure voluptate asperiores accusamus ipsa reprehenderit, atque cumque earum laboriosam, odit temporibus assumenda quasi facere saepe. Libero placeat nobis quod voluptatem expedita, reiciendis, ut, corrupti voluptate eius error beatae. Nostrum!</p>
          <p className="text-gray-600 leading-6 text-base mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a className="text-blue-500 underline font-medium ml-2" href="#">joyfulsuprise@gmail.com</a></p>
          <p className="text-gray-600 leading-6 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. atus consequatur voluptatem laboriosam cumque voluptates cupiditate consequuntur quod nam quae alias totam itaque, molestias eum earum nulla sunt excepturi numquam dolor officiis perspiciatis. Fugiat impedit quam </p>
        </div>
        {isMobile &&
          <button className="mt-2 text-base text-blue-500 underline" type="button" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Show less..." : "Read more..."}
          </button>
        }
      </>,
    },
    {
      key: '2',
      label: 'Delivery Information',
      children: <>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Delivery Information</h2>
          <ul className="pl-5">
            <li className="list-disc list-outside text-[16px] text-[#1c1601] mb-1">Once you place your order, you will receive a Tracking Number to help you track the order.</li>
            <li className="list-disc list-outside text-[16px] text-[#1c1601] mb-1">ncase of a manufacturing defect in the product, kindly ask for a replacement and our team will get in touch with you.</li>
            <li className="list-disc list-outside text-[16px] text-[#1c1601] mb-1">Once the product has been purchased, we follow a strict “No exchange and return policy”.</li>
            <li className="list-disc list-outside text-[16px] text-[#1c1601] mb-1">Deliveries on sundays and national holidays isn't possible.</li>
            <li className="list-disc list-outside text-[16px] text-[#1c1601] mb-1">Once the order has been placed, the delivery cannot be redirected to any other address.</li>
            <li className="list-disc list-outside text-[16px] text-[#1c1601] mb-1">Sometimes your purchase may be delivered prior to or after the expected date of delivery.</li>
            <li className="list-disc list-outside text-[16px] text-[#1c1601]">Once the item is shipped out our delivery partners will not be able to contact you, we request you to ensure the presence of a representative to collect the order.</li>
          </ul>
        </div>
      </>,
    },
    {
      key: '3',
      label: 'Additional Information',
      children: <>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Additional Information</h2>
          <div className="pl-5 py-2">
            <h2 className="text-2xl font-bold text-[#2e3368]">Star Finder App</h2>
            <p className="text-[17px] mt-1">The time has come, you have received a personal <a href="#" className="!text-blue-400">Name a Star</a> Certificate and are on your way to find your star in the sky. Among all the sparkling beauties it is sometimes difficult to find the star with your name right away. Thanks to the <a href="#" className="!text-blue-400">Web Software</a> and the <a href="#" className="!text-blue-400">iOS</a> and <a href="#" className="!text-blue-400">Android App</a> it will now be easy for you on any device whilst home or on the go!</p>
            <a href="#" className="inline-block mt-3">
              <div className="flex items-center gap-2">
                <img className="w-[150px]" src="https://cdn.shopify.com/s/files/1/0361/9248/5508/files/Download_on_the_App_Store_Badge_US-UK_blk_092917.png?v=1606846546" alt="" />
                <p className="font-medium text-base text-blue-400">Get it on Google Play</p>
              </div>
            </a>
            <h2 className="text-2xl font-bold text-[#2e3368] mt-2">How does the App work?</h2>
            <p className="text-[17px] mb-2">lt's so easy to find your star!</p>
            <ul className="pl-5">
              <li className="list-disc list-outside text-[16px] text-[#1c1601] mb-1">Enter your registration number</li>
              <li className="list-disc list-outside text-[16px] text-[#1c1601] mb-1">Pan your phone along the sky</li>
              <li className="list-disc list-outside text-[16px] text-[#1c1601] mb-1">Find your star</li>
              <li className="list-disc list-outside text-[16px] text-[#2e3368] font-bold mb-1">Find your star easily in the night sky</li>
            </ul>
            <p className="text-[17px] mb-1 mt-2">Save time and organization effort and just download the app! After entering the registration number, the data of your star will be displayed. Follow the arrow on the screen and when you find the star, just look up at the sky!</p>
            <p className="text-[17px] mb-2">If you don't have a smartphone, we can recommend the desktop version <a href="#" className="!text-blue-400">Star Finder from Star Register</a>. You can use it online.</p>
          </div>
          <h2 className="text-2xl font-bold text-[#2e3368] mt-2">How does the software work?</h2>
          <p className="text-[17px] mb-1">First enter your registration number above and your star will be displayed. With the cursor you can change the viewing angle by moving the image and scrolling the distance.</p>
          <p className="text-[17px] mb-1">For orientation on earth, the points of the compass are displayed, in the sky an azimuthal and an equatorial grid facilitate localization if desired. An azimuth is the horizontal angle oriented to the points of the compass, the equatorial grid is a geocentric coordinate system on the celestial sphere. These coordinates can be found on the certificate of your star naming. In the lower menu you can select the grid and also display the constellations (first symbol).</p>
          <h2 className="text-2xl font-bold text-[#2e3368] mt-2">How do I find my named star online?</h2>
          <p className="text-[17px] mb-1">After you have entered the registration number, your star will be displayed automatically. It is marked by a crosshair. On the left side a window opens with interesting information about your named star. Enter the date and time at which you would like to view the stars on the bottom of the display. Thus you see the sky on the screen in such a way, as it extends in reality at your place over you.</p>
          <h2 className="text-2xl font-bold text-[#2e3368] mt-2">How do I then find my named star in the night sky?</h2>
          <p className="text-[17px] mb-1">There is a simple trick to find your star in the night sky. Adjust the timeline in the software, so that the star you are looking for is directly above a point of the compass (north, east, south, west). Take a note of the time and remember which constellations are close to your named star. An example: According to the software your named star is located at 10:15 p.m. exactly in the north below the constellation Ursa Major. In the evening, at 10:15 p.m., look north into the sky with the help of a compass and orientate yourself on the constellation of the Great Bear. You can now see the previously displayed image of the software in sparkling reality. It's that easy to enjoy the sight of your named star!</p>
        </div>
      </>,
    },
  ];





  return (
    <>
      <Header />
      <div className="py-14 bg-[url(https://plus.unsplash.com/premium_photo-1672883552384-087b8a7acdb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat relative z-10">
        <div className="absolute inset-0 bg-black opacity-15 -z-10"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className=" text-center">
              <h3 className="text-3xl font-semibold text-[#fff]">Details</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 sm:px-10 mt-10 pb-10">
        <Row>
          <Col xl={6}>
            <DetailsSlider />
          </Col>
          <Col xl={6}>
            <div className="max-h-[670px] overflow-y-auto">
              <RightForm />
            </div>
            <div className='mt-5 fixed bottom-0 left-0 w-full z-40 px-2 pb-2 sm:px-0 sm:relative sm:left-0 '>
              <div className='grid grid-cols-2 gap-2 sm:gap-4'>
                <div>
                  <Button className='w-full sm:rounded-md'>
                    <ShoppingCart />
                    Add to Cart
                  </Button>
                </div>
                <div>
                  <Button variant='orange' className='w-full sm:rounded-md'>
                    <ShoppingBag className='h-5 w-5' />
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-4">
          <Tabs className="productDetailsTabCard" defaultActiveKey="1" type="card" items={items} />
        </div>
      </div>







      <div className="py-4 px-4 sm:px-10">
        <ProductListing title="" />
      </div>

      <div className="px-4 sm:px-10 mt-10 pb-10">
        <WorkProcess />
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
