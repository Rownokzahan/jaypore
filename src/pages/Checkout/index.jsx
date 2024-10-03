import { useForm } from "react-hook-form";
import DeliveryInfoForm from "../../components/form/DeliveryInfoForm";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    // Handle form submission here
  };

  return (
    <div className="md:container">
      <div className="md:p-8 bg-[#eeecea]">
        <div className="mb-3 md:mb-6 p-2 text-center flex justify-center items-center gap-2 bg-background-light">
          <h3 className="text-2xl font-semibold">Checkout</h3>
          <h4 className="text-dark text-xl">( {5} items)</h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-8">
          <div className="lg:col-span-2 p-4 md:p-6 bg-background-light">
            <h4 className="text-lg font-semibold mb-4">Delivery Information</h4>
            <DeliveryInfoForm register={register} errors={errors} />
          </div>

          <div className="flex flex-col gap-3 md:gap-6">
            <div className="p-4 md:p-6 bg-background-light">
              <h5 className="text-lg font-semibold mb-3">Payment Method</h5>

              <div className="w-full px-4 py-2 border border-gray-300 rounded text-dark relative">
                <span>Cash On Delivery</span>
                <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="space-y-4 p-4 md:p-6 bg-background-light">
              <div className="flex items-center justify-between">
                <h5 className="text-lg font-semibold">Order Summary</h5>
                <Link
                  to={"/cart"}
                  className="text-primary underline underline-offset-1"
                >
                  Edit Cart
                </Link>
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

              <button
                onClick={handleSubmit(onSubmit)}
                className="btn-primary uppercase"
                disabled={!isValid}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
