import { LiaTruckMovingSolid } from "react-icons/lia";
import DropdownSelector from "../../dropdown/DropdownSelector";

const ProductInfo = ({
  brand,
  name,
  price,
  sizes,
  selectedSize,
  handleSizeClick,
  selectedQty,
  handleQtyClick,
}) => (
  <>
    <div className="mb-1 flex gap-1 items-center justify-between">
      <h5 className="font-semibold">{brand}</h5>
      <p className="text-dark hidden md:flex items-center gap-2 text-sm ">
        <LiaTruckMovingSolid className="text-lg scale-x-125" />
        <span>Free delivery by {"21st October"}</span>
      </p>
    </div>
    <p className="text-dark mb-2">{name}</p>
    <p className="text-lg mb-3">₹{price?.current}</p>

    <div className="flex flex-wrap gap-4 text-sm">
      <div className="flex items-center gap-2">
        <p className="font-semibold text-lg text-dark">Size</p>
        <div className="w-14">
          <DropdownSelector
            selected={selectedSize}
            list={sizes}
            onSelect={handleSizeClick}
            defaultText="Select Size"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-semibold text-lg text-dark">Qty</p>
        <div className="w-12">
          <DropdownSelector
            selected={selectedQty}
            list={["1", "2", "3", "4", "5"]}
            onSelect={handleQtyClick}
            defaultText="Select Qty"
          />
        </div>
      </div>
    </div>

    <p className="mt-3 text-dark flex md:hidden items-center gap-2 text-sm">
      <LiaTruckMovingSolid className="text-lg scale-x-125" />
      <span>Free delivery by {"21st October"}</span>
    </p>
  </>
);

export default ProductInfo;
