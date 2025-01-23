import CustomerReviews from "@/components/custom/CustomerReviews/CustomerReviews";
import Footer from "@/components/custom/Footer/Footer";
import Header from "@/components/custom/Header/Header";
import HeroSlider from "@/components/custom/HeroSlider/HeroSlider";
import ProductGrid from "@/components/custom/ProductGrid/ProductGrid";
import ProductListing from "@/components/custom/ProductListing/ProductListing";
import WorkProcess from "@/components/custom/WorkProcess/WorkProcess";

function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <ProductGrid />
      <div className="container mx-auto px-1">
        <div className="py-4">
          <ProductListing title="Best Selling Product" />
        </div>
        <div className="py-4">
          <ProductListing title="Trending Product" />
        </div>
      </div>
      <div className="px-4 sm:px-10 mt-5">
        <CustomerReviews />
      </div>
      <div className="px-4 sm:px-10 mt-10 pb-10">
        <WorkProcess />
      </div>
      <Footer />
    </>
  );
}

export default Home;
