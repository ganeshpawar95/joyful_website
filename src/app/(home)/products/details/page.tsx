import DetailsSlider from "@/components/custom/DetailsPreview/DetailsSlider";
import Footer from "@/components/custom/Footer/Footer";
import Header from "@/components/custom/Header/Header";
import ProductListing from "@/components/custom/ProductListing/ProductListing";
import WorkProcess from "@/components/custom/WorkProcess/WorkProcess";







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
          <div>2</div>
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
