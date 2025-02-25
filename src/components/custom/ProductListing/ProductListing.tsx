import Product1 from "@/assets/images/products/p1.jpg";
import Product2 from "@/assets/images/products/p2.jpg";
import SingleProductCard from "./SingleProductCard";
import { Button } from "@/components/ui/button";

const Products = [
  {
    title: "Personalized Anniversary Keepsake Box",
    image: Product1,
    price: 1599.0,
    offerPrice: 1299.0,
  },
  {
    title: "Timeless Memories Photo Frame Set",
    image: Product2,
    price: 899.0,
    offerPrice: 699.0,
  },
  {
    title: "Name a star PDF",
    image: Product2,
    price: 500.0,
    offerPrice: 800.0,
  },
  {
    title: "Personalised Birthday Frame",
    image: Product2,
    price: 800.0,
    offerPrice: 599.0,
  },
];

function ProductListing(props: any) {
  const { title } = props;
  return (
    <div>
      <div className="text-center">
        <h3 className="text-xl md:text-3xl font-semibold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-5 mt-3 md:mt-5 sm:grid-cols-2 lg:grid-cols-4">
        {Products.map((product, index) => (
          <SingleProductCard key={index} product={product} />
        ))}
      </div>
      <div className="text-center mt-6">
        <Button className="w-full md:w-auto">Show More</Button>
      </div>
    </div>
  );
}

export default ProductListing;
