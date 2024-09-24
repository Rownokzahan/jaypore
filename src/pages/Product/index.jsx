import { Link } from "react-router-dom";
import SimilarProducts from "./SimilarProducts";
import PeopleViewedProducts from "./PeopleViewedProducts";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import ProductInfo from "./ProductInfo";
import SizeSelector from "./SizeSelector";
import ProductImagesDesktop from "./ProductImagesDesktop";
import ProductImagesMobile from "./ProductImagesMobile";
import WishlistButton from "../../components/button/WishListButton";

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

const Product = () => {
  const { sizes, images } = product || {};
  const [activeSize, setActiveSize] = useState(null); // Track selected size

  const handleSizeClick = (size) => {
    if (product.sizes.includes(size)) {
      setActiveSize(size); // Set active size only if it's available
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="container">
        <ul className="flex flex-wrap gap-2 divide-dark text-dark">
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          {">"}
          <li>
            <Link to={`/c/jaypore-label`}>Jaypore Label</Link>
          </li>
          {">"}
          <li>
            <Link to={`/c/jaypore-silver-jewelry`}>Silver Jewelry</Link>
          </li>
          {">"}
          <li>
            <Link to={`/c/jaypore-women-silver-earrings`}>Earrings</Link>
          </li>
          {">"}
          <li className="text-dark-deep">
            Women Silver Push Back Silver Studs
          </li>
        </ul>
      </div>

      {/* For larger screen */}
      <div className="container !pt-0 hidden lg:flex lg:gap-12">
        <div className="w-[60%]">
          <div className="relative">
            <ProductImagesDesktop images={images} />
            <WishlistButton />
          </div>
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

      {/* For smaller screen */}
      <div className="lg:hidden container relative">
        <div className="relative">
          <ProductImagesMobile images={images} />
          <WishlistButton />
        </div>
        <ProductInfo product={product} />
        <Divider />
        <SizeSelector
          sizes={sizes}
          activeSize={activeSize}
          handleSizeClick={handleSizeClick}
        />
        <Divider marginBottom={false} />
        <ProductDetails />
        <Divider />

        {/*Sticky Add To Bag Button */}
        <div
          className="bg-background-light w-full py-2 px-2 sticky bottom-0"
          style={{
            boxShadow: "11px 0px 0px 0px #f9f6f2, -11px 0px 0px 0px #f9f6f2",
          }}
        >
          <button className="btn-primary">Add To Bag</button>
        </div>
      </div>

      <SimilarProducts />
      <PeopleViewedProducts />
    </>
  );
};

// Divider component to avoid code repetition
const Divider = ({ marginBottom = true }) => (
  <span
    className={`block h-1 ${
      marginBottom ? "my-5" : "mt-5"
    }  bg-dark-light bg-opacity-55 shadow`}
    style={{
      boxShadow: "11px 0px 0px 0px #e9e7e5, -11px 0px 0px 0px #e9e7e5",
    }}
  ></span>
);

export default Product;
