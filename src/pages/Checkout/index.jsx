import { useForm } from "react-hook-form";
import DeliveryInfoForm from "../../components/form/DeliveryInfoForm";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched", // Validate the fields on touch
  });

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    // Handle form submission here
  };

  return (
    <main className="md:container mx-auto">
      <header className="py-2 flex justify-center items-center gap-2 bg-background-light mb-4">
        <h1 className="text-2xl font-semibold">Checkout</h1>
        <h2 className="text-dark text-xl">( {5} items)</h2>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 md:gap-8">
        {/* Delivery information */}
        <div className="lg:col-span-2 bg-[#eeecea] py-3 md:p-6">
          <div className="p-4 md:p-6 bg-background-light">
            <h3 className="text-lg font-semibold mb-4">Delivery Information</h3>
            <DeliveryInfoForm register={register} errors={errors} />
          </div>
        </div>

        <aside className="flex flex-col gap-3 md:gap-6 bg-[#eeecea] pb-3 md:p-6">
          {/* Payment method*/}
          <div className="p-4 md:p-6 bg-background-light">
            <h4 className="text-lg font-semibold mb-3">Payment Method</h4>
            <div className="w-full px-4 py-2 border border-gray-300 rounded text-dark relative">
              <span>Cash On Delivery</span>
              <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2" />{" "}
            </div>
          </div>

          {/* Order summary */}
          <div className="flex-1 space-y-4 p-4 md:p-6 bg-background-light">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">Order Summary</h4>
              {/* Link to edit the cart */}
              <Link
                to={"/cart"}
                className="text-primary underline underline-offset-1"
              >
                Edit Cart
              </Link>
            </div>

            {/* Order value display */}
            <div className="flex items-center justify-between">
              <span className="text-dark">Order Value</span>
              <p className="font-semibold">₹ {1400}</p>
            </div>

            {/* Shipping charges display */}
            <div className="flex items-center justify-between">
              <span className="text-dark">Shipping Charges</span>
              <p className="uppercase font-semibold">Free</p>
            </div>

            <hr />

            {/* Grand total display */}
            <div className="flex items-center justify-between !mb-5">
              <h4 className="text-lg font-semibold text-dark">Grand Total</h4>
              <p className="font-semibold text-lg">₹ {"560,000"}</p>
            </div>

            {/* Button to place the order */}
            <button
              onClick={handleSubmit(onSubmit)}
              className="btn-primary uppercase"
            >
              Place Order
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Checkout;
