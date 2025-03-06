"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';

// Import images
import Product1 from '@/assets/images/products/1.jpg';
import Product2 from '@/assets/images/products/3.jpg';
import Product3 from '@/assets/images/products/4.jpg';
import Product4 from '@/assets/images/products/5.jpg';
import OfferImageDesktop from '@/assets/images/offerImageDesktop.jpg';
import OfferImage1 from '@/assets/images/checkout.png';
import OfferImage2 from '@/assets/images/24x7.png';
import OfferImage3 from '@/assets/images/Satisfaction.jpg';
import OfferImage4 from '@/assets/images/Validity.jpg';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="absolute top-1/2 -translate-y-1/2 left-2 h-10 w-10 bg-black/50 !flex justify-center items-center z-[999999999] rounded-lg text-center"
            style={{ ...style, }}
            onClick={onClick}
        >
            <IoIosArrowBack size={23} className="text-white" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="absolute top-1/2 -translate-y-1/2 right-2 h-10 w-10 bg-black/50 !flex justify-center items-center z-[999999999] rounded-lg text-center"
            style={{ ...style, }}
            onClick={onClick}
        >
            <IoIosArrowForward size={23} className="text-white" />
        </div>
    );
}

function DetailsSlider() {
    const [nav1, setNav1] = useState<Slider | undefined>(undefined);
    const [nav2, setNav2] = useState<Slider | undefined>(undefined);
    const sliderRef1 = useRef<Slider>(null);
    const sliderRef2 = useRef<Slider>(null);

    useEffect(() => {
        if (sliderRef1.current && sliderRef2.current) {
            setNav1(sliderRef1.current);
            setNav2(sliderRef2.current);
        }
    }, []);

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const settings: Settings = {
        dots: isMobile ? true : false,
        arrows: isMobile ? true : false,
        asNavFor: nav2,
        prevArrow: <SampleNextArrow />,
        nextArrow: <SamplePrevArrow />,
        appendDots: dots => (
            <ul>
                {dots}
            </ul>
        ),
        customPaging: i => (
            <div
                className="h-4 w-4 bg-brand/35 rounded-full inline-block customDots"
            >

            </div>
        )
    };

    return (
        <div>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
            />
            <Row className="items-center">
                <Col xl={3}>
                    <Slider
                        className="leftSider !hidden sm:!block"
                        asNavFor={nav1}
                        ref={sliderRef2}
                        slidesToShow={isMobile ? 3 : 4}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        vertical={!isMobile}
                        arrows={false}
                        centerMode={true}
                        centerPadding={isMobile ? '20px' : '100px'}
                    >
                        {[Product1, Product2, Product3, Product4].map((product, index) => (
                            <div key={index}>
                                <Image
                                    className="sm:w-[150px] sm:h-[150px] rounded-md"
                                    src={product}
                                    alt={`Product ${index + 1}`}
                                    width={150}
                                    height={150}
                                />
                            </div>
                        ))}
                    </Slider>
                </Col>
                <Col xl={9}>
                    <Slider
                        {...settings}
                        ref={sliderRef1}
                    >
                        {[Product1, Product2, Product3, Product4].map((product, index) => (
                            <div key={index}>
                                <Image
                                    className="h-full w-full rounded-md"
                                    src={product}
                                    alt={`Product ${index + 1}`}
                                    width={800}
                                    height={600}
                                />
                            </div>
                        ))}
                    </Slider>
                    <div className="mt-2">
                        <Image className="mb-3" src={OfferImageDesktop} alt="Offer" width={1200} height={300} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default DetailsSlider;