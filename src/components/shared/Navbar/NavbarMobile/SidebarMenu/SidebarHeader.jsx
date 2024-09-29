import { IoClose } from "react-icons/io5";

const SidebarHeader = ({ toggleMenu }) => {
  return (
    <div className="text-end px-4 py-2 border-b sticky top-0 z-10 bg-background-light">
      <button className="text-2xl" onClick={toggleMenu}>
        <IoClose />
      </button>
    </div>
  );
};

export default SidebarHeader;