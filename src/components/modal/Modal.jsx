import { IoClose } from "react-icons/io5";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-[#7A7A7A] bg-opacity-70 flex justify-center items-center z-50">
      <div className="w-full h-screen md:h-auto md:w-96 bg-background-light relative">
        <button
          className="absolute top-3 right-3 text-2xl"
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
