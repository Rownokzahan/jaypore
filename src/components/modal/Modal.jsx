import { IoClose } from "react-icons/io5";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-[#7A7A7A] bg-opacity-70 flex justify-center items-center z-50">
      <div className="w-96 bg-background-light relative">
        <button
          className="absolute top-3 right-3 text-dark text-xl"
          onClick={onClose}
        >
          <IoClose />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
