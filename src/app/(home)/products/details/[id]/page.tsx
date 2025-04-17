"use client";
import DetailsSlider from "@/components/custom/DetailsPreview/DetailsSlider";
import Footer from "@/components/custom/Footer/Footer";
import Header from "@/components/custom/Header/Header";
import ProductListing from "@/components/custom/ProductListing/ProductListing";
import WorkProcess from "@/components/custom/WorkProcess/WorkProcess";
import RightForm from "../RightForm";

import GiftImage from "@/assets/images/banner/gift-image.jpg";
import Image from "next/image";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { useMediaQuery } from "react-responsive";
import { Fragment, useState } from "react";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Tabs, Form } from "antd";
import type { TabsProps } from "antd";
import { useProductDetailsHook } from "@/utils/hooks";
import DOMPurify from "dompurify";

function ProductDetails({ params }: { params: { id: string } }) {
  const { product_details } = useProductDetailsHook();
  console.log("product_details", product_details);
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Product description",
      children: (
        <>
          <div
            className={`overflow-hidden ${
              isMobile && !isExpanded ? "max-h-[200px]" : ""
            }`}
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Description
            </h2>
            {/* content */}
            {/* {product_details?.description} */}
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product_details?.description || ""),
              }}
            />
          </div>
          {isMobile && (
            <button
              className="mt-2 text-base text-blue-500 underline"
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show less..." : "Read more..."}
            </button>
          )}
        </>
      ),
    },
    {
      key: "2",
      label: "Delivery Information",
      children: (
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product_details?.delivery_info || ""),
            }}
          />
        </div>
      ),
    },
    {
      key: "3",
      label: "Additional Information",
      children: (
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: product_details?.care_instructions,
            }}
          />
        </>
      ),
    },
  ];

  console.log("product_details", product_details);

  function handleSubmit() {}
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
      {product_details != null && (
        <Form onFinish={handleSubmit}>
          <div className="px-3 sm:px-10 mt-10 pb-10">
            <Row>
              <Col xl={6}>
                <DetailsSlider
                  product_images={product_details?.product_images}
                />
              </Col>
              <Col xl={6}>
                <div className="max-h-[670px] overflow-y-auto">
                  <RightForm product_details={product_details} />
                </div>
                <div className="mt-5 fixed bottom-0 left-0 w-full z-40 px-2 pb-2 sm:px-0 sm:relative sm:left-0 ">
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    <div>
                      <Button type="submit" className="w-full sm:rounded-md">
                        <ShoppingCart />
                        Add to Cart
                      </Button>
                    </div>
                    <div>
                      <Button
                        type="submit"
                        variant="orange"
                        className="w-full sm:rounded-md"
                      >
                        <ShoppingBag className="h-5 w-5" />
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="mt-4">
              <Tabs
                className="productDetailsTabCard"
                defaultActiveKey="1"
                type="card"
                items={items}
              />
            </div>
          </div>

          <div className="py-4 px-4 sm:px-10">
            <ProductListing title="" />
          </div>

          <div className="px-4 sm:px-10 mt-10 pb-10">
            <WorkProcess />
          </div>
        </Form>
      )}
      <Footer />
    </>
  );
}

export default ProductDetails;
