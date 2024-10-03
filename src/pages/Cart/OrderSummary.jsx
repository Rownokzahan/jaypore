import CheckoutButton from "../../components/button/CheckoutButton";

const OrderSummary = () => {
  return (
    <div
      className="sm:min-w-[300px] h-max p-3 space-y-3 bg-background-light"
      id="order-summary"
    >
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold">Order Summary</h5>
        <p className="text-dark">{5} items</p>
      </div>

      <div className="flex items-center justify-between">
        <h5 className="text-dark">Order Value</h5>
        <p className="font-semibold">₹ {1400}</p>
      </div>

      <div className="flex items-center justify-between">
        <h5 className="text-dark">Shipping Charges</h5>
        <p className="uppercase font-semibold">Free</p>
      </div>

      <hr />

      <div className="flex items-center justify-between !mb-5">
        <h5 className="text-lg font-semibold text-dark">Grand Total</h5>
        <p className="font-semibold text-lg">₹ {"560,000"}</p>
      </div>

      {/* Show only in larger screen */}
      <div className="hidden sm:block">
        <CheckoutButton />
      </div>
    </div>
  );
};

export default OrderSummary;
