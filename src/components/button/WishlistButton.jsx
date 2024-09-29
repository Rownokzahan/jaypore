import { FaHeart } from "react-icons/fa";

const WishlistButton = ({ productId }) => {
  return (
    <button
      title="Add To Wishlist"
      className="absolute top-3 right-3 text-background-light text-lg"
      style={{ filter: "drop-shadow(0px 0px 1px #000000)" }}
      onClick={() => {}}
    >
      <FaHeart />
    </button>
  );
};

export default WishlistButton;