import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const ActionButtons = () => {
  return (
    <div className="mt-4 border-t border-dark-light flex divide-x divide-dark-light">
      <button className="py-3 px-2 flex-1 flex gap-1 items-center justify-center sm:uppercase">
        <div className="text-lg text-dark">
          <RiDeleteBinLine />
        </div>
        <span className="font-semibold sm:font-normal">Remove</span>
      </button>

      <button className="py-3 px-2 flex-1 flex gap-2 items-center justify-center sm:uppercase">
        <div className="text-lg text-dark">
          <FaRegHeart />
        </div>
        <span className="font-semibold sm:font-normal">Move To Wishlist</span>
      </button>
    </div>
  );
};

export default ActionButtons;