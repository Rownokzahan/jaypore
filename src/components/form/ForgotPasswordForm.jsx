import { useState } from "react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password recovery logic here
    console.log("Password recovery email sent to:", email);
    setMessage(
      "If this email is registered, you will receive a password reset link."
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="form-input"
      />
      {message && (
        <p className="text-sm text-green-600 text-center">{message}</p>
      )}
      <button
        type="submit"
        className="btn-primary"
      >
        Send Reset Link
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
