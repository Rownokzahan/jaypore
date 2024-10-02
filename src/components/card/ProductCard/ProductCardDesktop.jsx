import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from "../../carousel/Carousel";

const ProductCardDesktop = ({ product }) => {
  const { name, brand, price, sizes, images } = product || {};

  return (
    <div className="relative group" title={name}>
      <Link to={`/product`} className="relative">
        <div className="w-full relative overflow-hidden h-80">
          {images.length !== 0 ? (
            <Carousel
              displayIndicators={false}
              slidesToShow={1}
              showArrows={false}
              autoplayOnHover={true}
            >
              {images?.map((item) => (
                <img
                  key={item}
                  src={item}
                  alt={name}
                  className="w-full h-80 object-cover rounded"
                />
              ))}
            </Carousel>
          ) : (
            <img
              src={images[0]}
              alt={name}
              className="w-full h-80 object-cover rounded"
            />
          )}

          <div className="py-5 bg-primary-light bg-opacity-60 absolute bottom-0 left-0 right-0 hidden group-hover:flex justify-center items-center">
            <div className="w-max bg-background-light">
              {sizes.map((item, index) => (
                <button
                  key={index}
                  className="px-2 py-1 hover:bg-primary-dark hover:text-background-light"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2 px-2">
          <p className="uppercase text-lg font-semibold text-dark">{brand}</p>
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

export default ProductCardDesktop;
