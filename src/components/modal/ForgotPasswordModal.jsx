import Modal from "./Modal";
import Logo from "../shared/Logo";
import useAuthModal from "../../hooks/useAuthModal";
import ForgotPasswordForm from "../form/ForgotPasswordForm";

const ForgotPasswordModal = () => {
  const {
    setLoginSignupModalVisibility,
    isForgotPasswordModalVisible,
    setForgotPasswordModalVisibility,
  } = useAuthModal();

  const handleRememberPasswordClick = () => {
    setForgotPasswordModalVisibility(false);
    setLoginSignupModalVisibility(true);
  };

  return (
    <Modal
      isVisible={isForgotPasswordModalVisible}
      onClose={() => setForgotPasswordModalVisibility(false)}
    >
      <div className="my-12">
        <div className="px-6 space-y-2">
          <div className="w-max mx-auto">
            <Logo />
          </div>
          <p className="text-center text-sm">
            Enter your email to receive a password reset link
          </p>
        </div>

        <hr className="my-6" />

        <div className="px-8">
          {/* Email Input Form */}
          <ForgotPasswordForm />

          <div className="mt-6 flex items-center justify-center gap-1">
            <p>Remember your password?</p>
            <button
              type="button"
              className="text-primary underline underline-offset-1"
              onClick={handleRememberPasswordClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
