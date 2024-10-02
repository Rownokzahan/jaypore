import { useState } from "react";
import { useForm } from "react-hook-form";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import useAuthModal from "../../hooks/useAuthModal";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const LoginForm = () => {
  const { setForgotPasswordModalVisibility, setLoginSignupModalVisibility } =
    useAuthModal();
  const [showPassword, setShowPassword] = useState(false);

  // Using react-hook-form for form validation with mode onChange
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleForgotPasswordClick = () => {
    setLoginSignupModalVisibility(false);
    setForgotPasswordModalVisibility(true);
  };

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    // Handle login logic here
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
            placeholder="Enter your password"
            className={`form-input ${errors.password ? "border-red-500" : ""}`}
            {...register("password", {
              required: "Password is required",
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
        <div className="text-end">
          <button
            type="button"
            className="text-sm mt-1 text-primary underline underline-offset-1"
            onClick={handleForgotPasswordClick}
          >
            Forgot Password?
          </button>
        </div>
      </div>

      <label htmlFor="rememberMe" className="w-max flex gap-2 items-center">
        <input
          type="checkbox"
          id="rememberMe"
          className="hidden peer"
          {...register("rememberMe")}
        />
        <MdCheckBox className="text-primary text-xl hidden peer-checked:block" />
        <MdCheckBoxOutlineBlank className="text-primary-light text-xl peer-checked:hidden" />
        <span>Remember me</span>
      </label>

      <div className="flex justify-between items-center">
        <button type="submit" className="btn-primary" disabled={!isValid}>
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
