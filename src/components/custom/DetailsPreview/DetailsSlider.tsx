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
                </Col>
            </Row>









            <div className="flex-col-reverse sm:flex-col flex items-center gap-x-5">
                <div className="max-w-[300px] sm:max-w-[160px]">

                </div>
                <div className="max-w-[700px] overflow-hidden rounded-md">

                </div>
                {/* <div className="max-w-2/6">
                    <Slider
                        asNavFor={nav1}
                        ref={slider => (sliderRef2 = slider)}
                        slidesToShow={4}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        vertical={true}
                        arrows={false}
                        centerMode={true}
                        centerPadding={20}

                    >
                        <div>
                            <Image className="h-[120px] w-[120px] rounded-md" src={Product1} alt="" />
                        </div>
                        <div>
                            <Image className="h-[120px] w-[120px] rounded-md" src={Product2} alt="" />
                        </div>
                        <div>
                            <Image className="h-[120px] w-[120px] rounded-md" src={Product3} alt="" />
                        </div>
                        <div>
                            <Image className="h-[120px] w-[120px] rounded-md" src={Product4} alt="" />
                        </div>
                    </Slider>
                </div>
                <div className="col-span-1">
                    <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} arrows={false}>
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
                </div> */}
            </div>
        </div>
    )
}

export default DetailsSlider