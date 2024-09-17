import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { useScreenSize } from "../../../hooks/useScreenSize";

const Navbar = () => {
  const { isDesktopScreen } = useScreenSize();

  return isDesktopScreen ? <NavbarDesktop /> : <NavbarMobile />;
};

export default Navbar;
