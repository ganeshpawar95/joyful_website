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






function ProductDetails() {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })
  const [isExpanded, setIsExpanded] = useState(false);


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
      <div className="px-4 sm:px-10 mt-10 pb-10">
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
        <div className={`mt-10 overflow-hidden ${isMobile && !isExpanded ? 'max-h-[200px]' : ''}`}>
          <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">Description</h2>
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
