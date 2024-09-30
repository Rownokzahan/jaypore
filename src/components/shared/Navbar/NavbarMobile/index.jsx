import { useState } from "react";
import IconMenu from "../IconMenu";
import { IoMenu } from "react-icons/io5";
import SearchBar from "./SearchBar";
import SidebarMenu from "./SidebarMenu";
import Logo from "../../Logo";

const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <div className="relative">
      <div className="py-4 flex justify-between">
        <div className="flex items-center gap-4 ps-2">
          <button className="text-3xl" onClick={toggleMenu}>
            <IoMenu />
          </button>

          <div className="w-[120px] mt-1">
            <Logo />
          </div>
        </div>

        <div className="flex items-center gap-4 pe-4 text-xl">
          <SearchBar />
          <IconMenu />
        </div>
      </div>

      <SidebarMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default NavbarMobile;
