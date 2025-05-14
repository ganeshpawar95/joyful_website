import Footer from "@/components/custom/Footer/Footer";
import Header from "@/components/custom/Header/Header";
import ProductListing from "@/components/custom/ProductListing/ProductListing";
import WorkProcess from "@/components/custom/WorkProcess/WorkProcess";

function ProductCategory() {
  return (
    <>
      <Header />
      <div className="py-14 bg-[url(https://plus.unsplash.com/premium_photo-1672883552384-087b8a7acdb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat relative z-10">
        <div className="absolute inset-0 bg-black opacity-15 -z-10"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className=" text-center">
              <h3 className="text-3xl font-semibold text-[#fff]">Shop</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-10">
        <ProductListing title="" />
      </div>

      <div className="px-4 sm:px-10 mt-10 pb-10">
        <WorkProcess />
      </div>
      <Footer />
    </>
  );
}

export default ProductCategory;
