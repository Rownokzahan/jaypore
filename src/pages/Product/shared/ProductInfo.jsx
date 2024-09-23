import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductInfo = ({ product }) => {
  const { name, brand, price } = product || {};
  return (
    <div>
      <h4 className="text-lg font-semibold mb-3">{name}</h4>

      <div className="flex gap-4 items-center text-dark mb-2">
        <Link className="text-lg">Showing Shop Only</Link>
        <Link to={``} className="hover:text-primary flex items-center gap-1">
          <span>View Full Collection</span>
          <IoIosArrowForward className="text-lg" />
        </Link>
      </div>

      <p className="uppercase text-dark font-semibold mb-8">{brand}</p>

      <p className="flex items-center gap-2 text-lg">
        <span>₹{price?.current}</span>

        {price.original > price.current && (
          <span className="text-dark text-opacity-70 line-through">
            ₹{price?.original}
          </span>
        )}

        {price.discountPercent > 0 && (
          <span className="text-primary">{price?.discountPercent}% off</span>
        )}
      </p>
    </div>
  );
};

export default ProductInfo;