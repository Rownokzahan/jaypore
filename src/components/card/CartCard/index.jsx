import { useState } from "react";
import ActionButtons from "./ActionButtons";
import ProductInfo from "./ProductInfo";

const CartCard = ({ product }) => {
  const { images, name, brand, price, sizes } = product || {};
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQty, setSelectedQty] = useState("1");

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleQtyClick = (size) => {
    setSelectedQty(size);
  };

  return (
    <div className="bg-background-light">
      <div className="flex gap-4 pt-4 px-2 sm:p-4">
        <img src={images[0]} alt={name} className="w-20 md:w-28 h-full object-cover" />

        <div className="flex-1 flex flex-col justify-between">
          <ProductInfo
            brand={brand}
            name={name}
            price={price}
            sizes={sizes}
            selectedSize={selectedSize}
            handleSizeClick={handleSizeClick}
            selectedQty={selectedQty}
            handleQtyClick={handleQtyClick}
          />
          <div className="hidden sm:block">
            <ActionButtons />
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        <ActionButtons />
      </div>
    </div>
  );
};

export default CartCard;
