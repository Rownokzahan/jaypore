import { useState } from "react";
import SizeSelector from "../shared/SizeSelector";
import ProductInfo from "../shared/ProductInfo";
import ProductDetails from "../shared/ProductDetails";
import ProductImages from "./ProductImages";

const product = {
  id: "39575662",
  name: "Women Black Cotton Round Neck Regular Fit Kurta",
  brand: "Jaypore",
  price: {
    current: 1495,
    original: 2990,
    discountPercent: 50,
  },
  sizes: ["S", "M"],
  images: [
    "https://imagescdn.jaypore.com/img/app/product/3/39575662-11323481.jpg",
    "https://imagescdn.jaypore.com/img/app/product/3/39575662-11323482.jpg",
    "https://imagescdn.jaypore.com/img/app/product/3/39575662-11323483.jpg",
  ],
  url: "/p/women-black-cotton-embroidered-round-neck-regular-fit-kurta-39575662.html",
  wishlist: false,
};

const ProductDesktop = () => {
  const { sizes, images } = product || {};

  const [activeSize, setActiveSize] = useState(null); // Track selected size

  const handleSizeClick = (size) => {
    if (product.sizes.includes(size)) {
      setActiveSize(size); // Set active size only if it's available
    }
  };

  return (
    <div className="container !pt-0 flex items-stretch gap-12">
      <div className="w-[60%]">
        <ProductImages images={images} />
      </div>

      <div className="flex-1 space-y-8">
        <ProductInfo product={product} />
        <SizeSelector
          sizes={sizes}
          activeSize={activeSize}
          handleSizeClick={handleSizeClick}
        />

        {/* Add To Bag Button */}
        <div className="w-10/12 mx-auto">
          <button className="btn-primary">Add To Bag</button>
        </div>

        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductDesktop;
