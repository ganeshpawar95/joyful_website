import Product1 from "@/assets/images/products/p1.jpg";
import Product2 from "@/assets/images/products/p2.jpg";
import SingleProductCard from "./SingleProductCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function ProductListing(props: any) {
  const { title, results } = props;
  const [is_show_more, set_is_show_more] = useState(false);
  // Show only 4 products when is_show_more is false
  const displayedProducts = is_show_more ? results : results?.slice(0, 4);
  return (
    <div>
      <div className="text-center">
        <h3 className="text-xl md:text-3xl font-semibold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-5 mt-3 md:mt-5 sm:grid-cols-2 lg:grid-cols-4">
        {displayedProducts?.map((product: any, index: any) => (
          <SingleProductCard key={index} product={product} />
        ))}
      </div>
      {/* Show More / Show Less Button */}
      {results?.length > 4 && (
        <div className="text-center mt-6">
          <Button
            className="w-full md:w-auto"
            onClick={() => set_is_show_more(!is_show_more)}
          >
            {is_show_more ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
}

export default ProductListing;
