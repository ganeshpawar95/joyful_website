"use client"
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Product1 from '@/assets/images/products/1.jpg'
import Product2 from '@/assets/images/products/3.jpg'
import Product3 from '@/assets/images/products/4.jpg'
import Product4 from '@/assets/images/products/5.jpg'
import Image from "next/image";
import { useMediaQuery } from 'react-responsive'

import OfferImageDesktop from '@/assets/images/offerImageDesktop.jpg';
import OfferImage1 from '@/assets/images/checkout.png';
import OfferImage2 from '@/assets/images/24x7.png';
import OfferImage3 from '@/assets/images/Satisfaction.jpg';
import OfferImage4 from '@/assets/images/Validity.jpg';
import GifImage from '@/assets/1.gif'




function DetailsSlider() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)'
    })




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
                        className="leftSider"
                        asNavFor={nav1}
                        ref={slider => (sliderRef2 = slider)}
                        slidesToShow={isMobile ? 3 : 4}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        vertical={isMobile ? false : true}
                        arrows={false}
                        centerMode={true}
                        centerPadding={`${isMobile ? '20px' : '100px'}`}

                    >
                        <div>
                            <Image className="sm:w-[150px] sm:h-[150px] rounded-md" src={GifImage} alt="" />
                        </div>
                        <div>
                            <Image className="sm:w-[150px] sm:h-[150px] rounded-md" src={Product1} alt="" />
                        </div>
                        <div>
                            <Image className="sm:w-[150px] sm:h-[150px] rounded-md" src={Product2} alt="" />
                        </div>
                        <div>
                            <Image className="sm:w-[150px] sm:h-[150px] rounded-md" src={Product3} alt="" />
                        </div>
                        <div>
                            <Image className="sm:w-[150px] sm:h-[150px] rounded-md" src={Product4} alt="" />
                        </div>
                    </Slider>
                </Col>
                <Col xl={9}>
                    <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} arrows={false}>
                        <div>
                            <Image className="h-full w-full rounded-md" src={GifImage} alt="" />
                        </div>
                        <div>
                            <Image className="h-full w-full rounded-md" src={Product1} alt="" />
                        </div>
                        <div>
                            <Image className="h-full w-full rounded-md" src={Product2} alt="" />
                        </div>
                        <div>
                            <Image className="h-full w-full rounded-md" src={Product3} alt="" />
                        </div>
                        <div>
                            <Image className="h-full w-full rounded-md" src={Product4} alt="" />
                        </div>
                    </Slider>
                    <div className="mt-2">
                        {!isMobile ? (
                            <>
                                <Image src={OfferImageDesktop} alt="" />
                            </>
                        ) : (
                            <div className="flex justify-center gap-x-5 flex-wrap">
                                <Image className="h-[80px] w-[80px]" src={OfferImage1} alt="" />
                                <Image className="h-[80px] w-[80px]" src={OfferImage2} alt="" />
                                <Image className="h-[80px] w-[80px]" src={OfferImage3} alt="" />
                                <Image className="h-[80px] w-[80px]" src={OfferImage4} alt="" />
                            </div>
                        )}

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default DetailsSlider