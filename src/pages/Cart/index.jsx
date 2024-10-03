import { FaAngleDown } from "react-icons/fa";
import CartCard from "../../components/card/CartCard";
import productData from "../../data/productData";
import OrderSummary from "./OrderSummary";
import ProductShowcase from "../../components/shared/ProductShowcase";
import similarProductsData from "../../data/similarProductsData";
import CheckoutButton from "../../components/button/CheckoutButton";

const Cart = () => {

const handleScrollToOrderSummary = () => {
  const orderSummary = document.getElementById("order-summary");
  if (orderSummary) {
    const yOffset = -80; // Offset of 80px from the top
    const yPosition =
      orderSummary.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
};

  return (
    <>
      <section className="lg:container lg:py-12 lg:w-max mx-auto">
        <div className="py-3 lg:p-6 bg-[#eeecea] flex flex-col lg:flex-row gap-4 lg:gap-6 relative">
          <div className="w-full lg:max-w-xl space-y-3">
            <div className="p-3 bg-background-light">
              <h3 className="text-2xl">
                <span className="font-semibold">Shopping Bag</span>{" "}
                <span className="text-dark">({5} Items)</span>
              </h3>
            </div>

            {productData?.map((product) => (
              <CartCard key={product.id} product={product} />
            ))}
          </div>

          <OrderSummary />

          <div className="w-full p-3 sticky bottom-0 left-0 bg-background-light sm:hidden">
            <div className="flex justify-between items-center">
              <div className="space-y-px">
                <p className="font-semibold text-lg">₹ {"560,000"}</p>
                <button
                  className="flex items-center gap-1 font-semibold"
                  onClick={handleScrollToOrderSummary}
                >
                  <span>View Summary</span>
                  <FaAngleDown className="mt-px" />
                </button>
              </div>
              <div className="w-40">
                <CheckoutButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Pick */}
      <ProductShowcase
        title="Top Picks For You"
        products={similarProductsData}
      />
    </>
  );
};

export default Cart;
