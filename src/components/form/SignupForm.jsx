import { useState } from "react";
import { useForm } from "react-hook-form";
import { PiEye, PiEyeClosed } from "react-icons/pi";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  // Using react-hook-form for form validation with mode onChange
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    // Handle signup logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className={`form-input ${errors.email ? "border-red-500" : ""}`}
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
        <label className="block mb-1">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className={`form-input ${errors.password ? "border-red-500" : ""}`}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          <button
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <PiEye /> : <PiEyeClosed />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">Confirm Password</label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            className={`form-input ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) => {
                if (value !== watch("password")) {
                  return "Passwords do not match";
                }
              },
            })}
          />
          <button
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? <PiEye /> : <PiEyeClosed />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn-primary" disabled={!isValid}>
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
