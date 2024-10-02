import { useContext } from "react";
import { AuthModalContext } from "../contexts/AuthModalContext";

// Custom hook to access modal context
const useAuthModal = () => useContext(AuthModalContext);

export default useAuthModal;
