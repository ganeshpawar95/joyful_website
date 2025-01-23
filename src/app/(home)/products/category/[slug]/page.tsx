import CustomerReviews from "@/components/custom/CustomerReviews/CustomerReviews";
import Footer from "@/components/custom/Footer/Footer";
import Header from "@/components/custom/Header/Header";
import HeroSlider from "@/components/custom/HeroSlider/HeroSlider";
import ProductGrid from "@/components/custom/ProductGrid/ProductGrid";
import ProductListing from "@/components/custom/ProductListing/ProductListing";
import WorkProcess from "@/components/custom/WorkProcess/WorkProcess";

function ProductCategory() {
  return (
    <>
      <Header />
      <div className="bg-[#41C2EC] py-5">
        <div className="row">
          <div className="col-lg-12">
            <div className=" text-center">
              <h3 className="text-3xl font-semibold text-[#fff]">Shop</h3>
            </div>
          </div>
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

export default ProductCategory;
