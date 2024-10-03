import { Link } from "react-router-dom";
import WishlistButton from "../button/WishListButton";

const ProductCard = ({ product }) => {
  const { id, name, brand, price, images } = product || {};
  return (
    <div className="w-full pb-[46px] border bg-background-light relative group">
      <WishlistButton productId={id} />

      <Link title={name}>
        <figure className="w-full">
          <img
            src={images[0]}
            className="w-full object-cover"
            title={name}
            alt={name}
            style={{
              aspectRatio: "8 / 10",
              width: "100%",
              backgroundColor: "lightblue",
            }}
          />
        </figure>

        <div className="text-sm p-3">
          <p className="uppercase truncate mb-px">{brand}</p>
          <p className="truncate text-dark text-opacity-90">{name}</p>
          <div className="flex flex-wrap text-right gap-2 mt-1">
            <span className="font-semibold">₹ {price?.current}</span>

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
          </div>
        </div>
      </Link>

      <div className="w-full p-2 border-t text-center bg-background-light absolute bottom-0">
        <button className="w-11/12 py-1 uppercase font-semibold rounded border-transparent group-hover:bg-primary-dark text-dark-deep group-hover:text-background-light transition-all duration-300">
          Add To Bag
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
