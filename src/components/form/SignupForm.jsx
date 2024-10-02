import { useState } from "react";
import { PiEye, PiEyeClosed } from "react-icons/pi";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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
            placeholder="Create a password"
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
      </div>
      <div>
        <label className="block mb-1">Confirm Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm your password"
            className="form-input"
          />
        </div>
      </div>
      <button type="submit" className="btn-primary">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
