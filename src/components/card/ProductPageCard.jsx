import { Link } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import WishlistButton from "../button/WishListButton";
import { useScreenSize } from "../../hooks/useScreenSize";

const ProductPageCard = ({ product }) => {
  const { isDesktopScreen } = useScreenSize();
  const { name, brand, price, sizes, images } = product || {};

  return (
    <div className="relative" title={name}>
      <Link to={`/product`} className="relative">
        <div className="w-full aspect-[8/12] relative overflow-hidden group z-0">
          {/* Display a carousel if the screen is large and multiple images are available */}
          {isDesktopScreen && images?.length > 1 ? (
            <>
              <Carousel
                slidesToShow={1}
                autoplaySpeed={1000}
                autoplayOnHover={true}
                showArrows={false}
                displayIndicators={false}
              >
                {images?.map((item) => (
                  <figure key={item}>
                    <img
                      src={item}
                      alt={name}
                      className="w-full aspect-[8/12] object-cover rounded"
                    />
                  </figure>
                ))}
              </Carousel>
            </>
          ) : (
            // If not a desktop screen or there's only one image, show the first image statically
            <figure className="w-full h-full">
              <img
                src={images[0]}
                alt={name}
                className="w-full h-full object-cover rounded"
              />
            </figure>
          )}

          {/* Show size options on desktop screens only, when hovering over the card */}
          {isDesktopScreen && (
            <div className="py-5 hidden group-hover:flex justify-center items-center bg-primary-light bg-opacity-60 absolute bottom-0 left-0 right-0 z-10">
              <div className="w-max bg-background-light">
                {sizes.map((item, index) => (
                  // Size selection buttons
                  <button
                    key={index}
                    className="px-2 py-1 hover:bg-primary-dark hover:text-background-light"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Product details section */}
        <div className="mt-2 sm:px-2">
          <p className="uppercase sm:text-lg font-semibold text-dark">
            {brand}
          </p>
          <h3 className="mb-2 truncate">{name}</h3>
          <p className="flex flex-wrap items-center gap-1">
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
      <WishlistButton />
    </div>
  );
};

export default ProductPageCard;
