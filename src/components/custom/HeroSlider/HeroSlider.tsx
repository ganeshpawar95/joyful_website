import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import BannerImage1 from '@/assets/images/banner/1.jpg'
import BannerImage2 from '@/assets/images/banner/2.jpg'
import BannerImage3 from '@/assets/images/banner/3.jpg'
import BannerImage4 from '@/assets/images/banner/4.jpg'

function CustomNextButton() {
    return <button className="custom-next-button">Next</button>
}


function HeroSlider() {
    return (
        <Carousel className="relative">
            <CarouselContent>
                <CarouselItem>
                    <Image src={BannerImage1} className="w-full" alt="image" />
                </CarouselItem>
                <CarouselItem>
                    <Image src={BannerImage2} className="w-full" alt="image" />
                </CarouselItem>
                <CarouselItem>
                    <Image src={BannerImage3} className="w-full" alt="image" />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 h-10 w-10 bg-transparent border-0 text-gray-950" />
            <CarouselNext className="absolute right-4  h-10 w-10 bg-transparent border-0 text-gray-950" />
        </Carousel>
    )
}

export default HeroSlider