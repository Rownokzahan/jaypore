import { useState } from "react";
import Modal from "../Modal";
import useAuthModal from "../../../hooks/useAuthModal";
import Logo from "../../shared/Logo";
import LoginForm from "../../form/LoginForm";
import SignupForm from "../../form/SignupForm";
import SocialLoginButtons from "./SocialLoginButtons";
import TabButtons from "./TabButtons";

const LoginSignupModal = () => {
  const { isLoginSignupModalVisible, setLoginSignupModalVisibility } =
    useAuthModal();
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup section

  return (
    <Modal
      isVisible={isLoginSignupModalVisible}
      onClose={() => setLoginSignupModalVisibility(false)}
    >
      <div className="my-12">
        <div className="px-6 space-y-2">
          <div className="w-max mx-auto">
            <Logo />
          </div>
          <p className="text-center text-sm">
            India&apos;s most beautiful products
          </p>
        </div>

        <hr className="my-6" />

        <div className="px-8">
          {/* Tab Buttons */}
          <TabButtons isLogin={isLogin} setIsLogin={setIsLogin} />

          {/* Content: Either Login or Signup based on state */}
          <div className="mt-6">{isLogin ? <LoginForm /> : <SignupForm />}</div>

          <SocialLoginButtons />
        </div>
      </div>
    </Modal>
  );
};

export default LoginSignupModal;
