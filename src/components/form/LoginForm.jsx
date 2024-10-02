import { useState } from "react";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import useAuthModal from "../../hooks/useAuthModal";

const LoginForm = () => {
  const { setForgotPasswordModalVisibility, setLoginSignupModalVisibility } =
    useAuthModal();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleForgotPasswordClick = () => {
    setLoginSignupModalVisibility(false);
    setForgotPasswordModalVisibility(true);
  };

  return (
    <form className="space-y-4">
      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="form-input"
        />
      </div>
      <div>
        <label className="block mb-1">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="form-input"
          />
          <button
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <PiEye /> : <PiEyeClosed />}
          </button>
        </div>

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
      <div className="flex justify-between items-center">
        <button type="submit" className="btn-primary">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
