import IconMenu from "../IconMenu";
import ServiceLinks from "./ServiceLinks";
import SearchBar from "./SearchBar";
import Logo from "../../Logo";


const TopBar = () => {
  return (
    <div className="grid grid-cols-3 items-center justify-between ps-2 pe-5 py-5">
      <ServiceLinks />

      <div className="w-max mx-auto">
        <Logo />
      </div>

      <div className="flex items-center gap-6 justify-end">
        <SearchBar />
        <div className="flex items-center gap-6 text-xl">
          <IconMenu />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
