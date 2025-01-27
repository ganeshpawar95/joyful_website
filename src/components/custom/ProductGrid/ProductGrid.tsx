import ProductImage1 from "@/assets/images/products/1.jpg";
import ProductImage2 from "@/assets/images/products/2.jpg";
import ProductImage3 from "@/assets/images/products/3.jpg";
import ProductImage4 from "@/assets/images/products/4.jpg";
import ProductImage5 from "@/assets/images/products/5.jpg";
import Image from "next/image";
import Link from "next/link";

function ProductGrid() {
  return (
    <div
      //   className="container mx-auto py-4 px-0"
      className="py-4 px-0"
    >
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="grid grid-cols-2 gap-4 sm:block">
          <div>
            <Link href="/">
              <Image
                className="rounded-md h-[200px] sm:h-[340px]"
                src={ProductImage2}
                alt="product"
              />
            </Link>
          </div>
          <div className="sm:mt-4">
            <Link href="/">
              <Image
                className="rounded-md h-[200px] sm:h-[340px]"
                src={ProductImage3}
                alt="product"
              />
            </Link>
          </div>
        </div>
        <div className="order-2 sm:-order-none">
          <Link href="/">
            <Image
              className="h-full rounded-md"
              src={ProductImage1}
              alt="product"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:block">
          <div>
            <Link href="/">
              <Image
                className="rounded-md h-[200px] sm:h-[340px]"
                src={ProductImage4}
                alt="product"
              />
            </Link>
          </div>
          <div className="sm:mt-4">
            <Link href="/">
              <Image
                className="rounded-md h-[200px] sm:h-[340px]"
                src={ProductImage5}
                alt="product"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
