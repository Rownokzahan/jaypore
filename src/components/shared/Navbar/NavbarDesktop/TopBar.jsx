import IconMenu from "../IconMenu";
import ServiceLinks from "./ServiceLinks";
import fasionImage from "../../../../assets/images/aditya-birala.webp";
import SearchBar from "./SearchBar";
import Logo from "../Logo";

const TopBar = () => {
  return (
    <div className="grid grid-cols-3 items-center justify-between p-2">
      <ServiceLinks />

      <div className="w-max mx-auto">
        <Logo />
      </div>
      <div className="flex items-center gap-6 justify-end">
        <SearchBar />

        <div className="flex items-center gap-6 text-xl">
          <IconMenu />
        </div>

        <img src={fasionImage} className="w-16" alt="" />
      </div>
    </div>
  );
};

export default TopBar;
