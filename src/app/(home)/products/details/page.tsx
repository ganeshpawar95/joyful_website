import DetailsSlider from "@/components/custom/DetailsPreview/DetailsSlider";
import Footer from "@/components/custom/Footer/Footer";
import Header from "@/components/custom/Header/Header";
import ProductListing from "@/components/custom/ProductListing/ProductListing";
import WorkProcess from "@/components/custom/WorkProcess/WorkProcess";
import RightForm from "./RightForm";

import GiftImage from '@/assets/images/banner/gift-image.jpg'
import Image from "next/image";







function ProductDetails() {
  return (
    <>
      <Header />
      <div className="bg-[#41C2EC] py-5">
        <div className="row">
          <div className="col-lg-12">
            <div className=" text-center">
              <h3 className="text-3xl font-semibold text-[#fff]">Details</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-10 mt-10 pb-10">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <DetailsSlider />
          </div>
          <div className="max-h-[700px] overflow-y-auto">
            <RightForm />
          </div>
        </div>
        <div className="px-4 sm:px-20 mt-10">
          <p className="text-gray-600 leading-6 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quisquam! Recusandae corporis adipisci eum laborum labore nesciunt cumque, earum, eaque tempore facere dignissimos id consequuntur, quasi corrupti praesentium magnam velit obcaecati quibusdam. Magni, ipsum! Quasi ex quis magnam natus, tenetur iste non consequatur commodi asperiores? A nisi sed, optio repudiandae magni rerum facere deleniti sapiente dolorem ducimus pariatur eveniet, laboriosam aperiam adipisci! Minus fugit ipsum natus consequatur voluptatem laboriosam cumque voluptates cupiditate consequuntur quod nam quae alias totam itaque, molestias eum earum nulla sunt excepturi numquam dolor officiis perspiciatis. Fugiat impedit quam in sed reiciendis dolorum vero nemo natus nam.</p>
          <p className="text-gray-600 leading-6 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate fugit eum amet voluptates necessitatibus nulla iusto velit, accusantium illo iure voluptate asperiores accusamus ipsa reprehenderit, atque cumque earum laboriosam, odit temporibus assumenda quasi facere saepe. Libero placeat nobis quod voluptatem expedita, reiciendis, ut, corrupti voluptate eius error beatae. Nostrum!</p>
          <Image className="w-2/3 mt-5 mb-5" src={GiftImage} alt="" />
          <p className="text-gray-600 leading-6 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate fugit eum amet voluptates necessitatibus nulla iusto velit, accusantium illo iure voluptate asperiores accusamus ipsa reprehenderit, atque cumque earum laboriosam, odit temporibus assumenda quasi facere saepe. Libero placeat nobis quod voluptatem expedita, reiciendis, ut, corrupti voluptate eius error beatae. Nostrum!</p>
          <p className="text-gray-600 leading-6 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a className="text-blue-500 underline font-medium ml-2" href="#">joyfulsuprise@gmail.com</a></p>
          <p className="text-gray-600 leading-6 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. atus consequatur voluptatem laboriosam cumque voluptates cupiditate consequuntur quod nam quae alias totam itaque, molestias eum earum nulla sunt excepturi numquam dolor officiis perspiciatis. Fugiat impedit quam </p>
        </div>
      </div>







      <div className="container mx-auto px-1">
        <div className="py-4">
          <ProductListing title="" />
        </div>
      </div>

      <div className="px-4 sm:px-10 mt-10 pb-10">
        <WorkProcess />
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
