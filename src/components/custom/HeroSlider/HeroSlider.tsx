import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/utils/constants";

function HeroSlider({ banner_list = [] }) {
  return (
    <Carousel className="relative">
      <CarouselContent>
        {banner_list
          // .sort((a, b) => a.banner_priority - b.banner_priority)
          .map((res: any) => (
            <CarouselItem key={res.id}>
              <Image
                src={IMAGE_BASE_URL + res.banner_name}
                className="w-full"
                width={800}
                height={400}
                alt="image"
              />
            </CarouselItem>
          ))}
        {/* <CarouselItem>
          <Image src={BannerImage2} className="w-full" alt="image" />
        </CarouselItem>
        <CarouselItem>
          <Image src={BannerImage3} className="w-full" alt="image" />
        </CarouselItem> */}
      </CarouselContent>
      {/* <CarouselPrevious className="absolute left-4 h-10 w-10 bg-transparent border-0 text-gray-950" />
      <CarouselNext className="absolute right-4  h-10 w-10 bg-transparent border-0 text-gray-950" /> */}
    </Carousel>
  );
}

export default HeroSlider;
