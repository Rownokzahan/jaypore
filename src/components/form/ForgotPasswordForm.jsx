import { useForm } from "react-hook-form";

const ForgotPasswordForm = () => {
  // Using react-hook-form for form validation with mode onTouched
  const {
    register,
    handleSubmit,
    formState: { errors,isValid },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log("Password recovery email sent to:", data.email);
    alert(
      "If this email is registered, you will receive a password reset link."
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <input
          type="email"
          placeholder="Email"
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

      <button type="submit" disabled={!isValid} className="btn-primary">
        Send Reset Link
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
