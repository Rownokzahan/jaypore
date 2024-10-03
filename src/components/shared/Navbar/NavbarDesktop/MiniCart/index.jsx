import productData from "../../../../../data/productData";
import CheckoutButton from "../../../../button/CheckoutButton";
import MiniCartCard from "../../../../card/MiniCartCard";

const MiniCart = () => {
  return (
    <div className="hidden group-hover:block absolute w-80 p-3  top-8 -right-2 z-50 border border-dark-light bg-background-light">
      <div className="relative">
        <ul className="h-96 overflow-y-auto divide-y divide-dark-light">
          {productData.map((item) => (
            <MiniCartCard key={item.id} item={item} />
          ))}
        </ul>
        <div className="w-full pt-2 bg-background-light space-y-4">
          <p className="pt-2 border-t border-dark-light flex justify-center gap-1 font-semibold text-lg">
            <span>Total payable:</span>
            <span>₹ {`5200`}</span>
          </p>
          <CheckoutButton />
        </div>

        <div className="pt-3 w-3 absolute right-0 -top-[31px] z-10 ">
          <div className="w-3 h-3 bg-background-light border border-e-0 border-b-0 border-dark-light rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;