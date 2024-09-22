import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCardMobile = ({ product }) => {
  const { name, brand, price, images } = product || {};

  return (
    <div className="relative group" title={name}>
      <Link to={`/product-collection`} className="relative">
        <div className="w-full">
          <img
            src={images[0]}
            alt={name}
            className="w-full aspect-auto object-cover rounded"
          />
        </div>

        <div className="mt-2 px-2">
          <p className="uppercase font-semibold text-dark">{brand}</p>
          <h3 className="mb-2">{name}</h3>
          <p className="flex items-center gap-1">
            <span>₹{price?.current}</span>

            {price.original > price.current && (
              <span className="text-dark text-opacity-70 line-through">
                ₹{price?.original}
              </span>
            )}

            {price.discountPercent > 0 && (
              <span className="text-primary">
                {price?.discountPercent}% off
              </span>
            )}
          </p>
        </div>
      </Link>

      {/* Wishlist Button */}
      <button
        className="absolute top-3 right-3 text-background-light text-opacity-85 text-xl"
        style={{ filter: "drop-shadow(0px 0px 1px #000000)" }}
        onClick={() => {}}
      >
        <FaHeart />
      </button>
    </div>
  );
};

export default ProductCardMobile;
