import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MiniCartCard = ({ item }) => {
  const { name, brand, price, images } = item || {};
  return (
    <li className="grid grid-cols-3 gap-4 py-3">
      <Link to={"/product"} title={name}>
        <img
          src={images[0]}
          alt={name}
          className="block w-full h-full object-cover"
        />
      </Link>

      <div className="col-span-2 text-xs relative">
        <div className="space-y-2">
          <p className="font-bold me-6">{brand}</p>
          <p>{name}</p>

          <p className="font-semibold">₹ {price?.current}</p>
          <p className="space-x-2 text-dark">
            <span>Size: {`S`}</span>
            <span>Qty: {`1`}</span>
          </p>
        </div>
        <button className="text-lg absolute top-0 right-1">
          <RiDeleteBinLine />
        </button>
      </div>
    </li>
  );
};

export default MiniCartCard;
