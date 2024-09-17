import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, price, originalPrice, discount, imageUrl } =
    product || {};

  return (
    <div className="relative mx-2 md:mx-6">
      {/* Wishlist Button */}
      <button
        className="absolute top-2 right-2 text-background-light text-lg"
        style={{ filter: "drop-shadow(0px 0px 1px #000000)" }}
        onClick={() => {}}
      >
        <FaHeart />
      </button>

      <Link to={`/`} title={title}>
        <figure className="min-w-[160px]">
          <img src={imageUrl} className="w-full" title={title} alt={title} />
        </figure>

        <div className="flex justify-between gap-4 text-sm py-3">
          <p>{title}</p>
          <div className="flex flex-col text-nowrap text-right">
            <span>₹ {price}</span>
            {originalPrice && (
              <span className="line-through text-dark">₹ {originalPrice}</span>
            )}
            {discount && <span className="text-primary">{discount}</span>}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
