import { CgProfile } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import MiniCart from "./NavbarDesktop/MiniCart";
import { useScreenSize } from "../../../hooks/useScreenSize";

const IconMenu = () => {
  const { isDesktopScreen } = useScreenSize();
  return (
    <>
      {/* Profile icon with dropdown menu for login and sign up options */}
      <div className="relative group hidden lg:block" role="button">
        <CgProfile />

        {/* Dropdown menu shown on hover */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10 pt-4 hidden group-hover:block">
          <ul className="p-4 border bg-background-light space-y-3 w-36 relative">
            <li>
              <Link
                to={"/"}
                className="w-full block py-2 border border-primary rounded text-lg font-semibold text-primary text-center"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="w-full block py-2 border border-primary rounded text-lg font-semibold text-primary text-center"
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {/* Triangle pointer for dropdown menu */}
          <span className="w-4 h-4 bg-background-light border border-e-0 border-b-0 absolute left-1/2 -translate-x-1/2 top-2 z-30 rotate-45"></span>
        </div>
      </div>

      {/* Heart icon*/}
      <Link to={"/"} className="relative">
        <FiHeart />
      </Link>

      {/* Handbag icon*/}
      <Link to={"cart"} className="relative group">
        <BsHandbag />
        {/* Badge indicating item count */}
        <span className="w-4 h-4 p-2 mt-7 border border-white rounded-full absolute -bottom-2 left-2 flex items-center justify-center bg-primary text-white text-xs">
          {1}
        </span>
        {isDesktopScreen && <MiniCart />}
      </Link>
    </>
  );
};

export default IconMenu;
