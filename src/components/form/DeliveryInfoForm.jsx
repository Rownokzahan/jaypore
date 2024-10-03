import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const DeliveryInfoForm = ({ register, errors }) => {
  return (
    <form id="delivery-info" className="space-y-4" noValidate>
      {/* Full Name */}
      <div>
        <label className="block mb-1">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          className={`form-input ${errors.name ? "!border-red-500" : ""}`}
          {...register("name", {
            required: "Full name is required",
          })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/*Email and Phone and Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className={`form-input ${errors.email ? "!border-red-500" : ""}`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className={`form-input ${
              errors.phoneNumber ? "!border-red-500" : ""
            }`}
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
      </div>

      {/* City and Country */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label className="block mb-1">City</label>
          <input
            type="text"
            placeholder="Enter your city"
            className={`form-input ${errors.city ? "!border-red-500" : ""}`}
            {...register("city", {
              required: "City is required",
            })}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Country</label>
          <input
            type="text"
            placeholder="Enter your country"
            className={`form-input ${errors.country ? "!border-red-500" : ""}`}
            {...register("country", {
              required: "Country is required",
            })}
          />
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block mb-1">Address</label>
        <input
          type="text"
          placeholder="Enter your address"
          className={`form-input ${errors.address ? "!border-red-500" : ""}`}
          {...register("address", {
            required: "Address is required",
          })}
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
      </div>

      {/* Save Information Checkbox */}
      <label htmlFor="saveInfo" className="w-max flex gap-2 items-center">
        <input
          type="checkbox"
          id="saveInfo"
          className="hidden peer"
          {...register("saveInfo")}
        />
        <MdCheckBox className="text-primary text-xl hidden peer-checked:block" />
        <MdCheckBoxOutlineBlank className="text-primary-light text-xl peer-checked:hidden" />
        <span>Save this information for next time</span>
      </label>
    </form>
  );
};

export default DeliveryInfoForm;
