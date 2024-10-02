import { createContext, useState } from "react";

// Create a context for handling modal visibility
export const AuthModalContext = createContext();

// Provider component
export const AuthModalProvider = ({ children }) => {
  const [isLoginSignupModalVisible, setLoginSignupModalVisibility] =
    useState(false);
  const [isForgotPasswordModalVisible, setForgotPasswordModalVisibility] =
    useState(false);

  return (
    <AuthModalContext.Provider
      value={{
        isLoginSignupModalVisible,
        setLoginSignupModalVisibility,
        isForgotPasswordModalVisible,
        setForgotPasswordModalVisibility,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};
