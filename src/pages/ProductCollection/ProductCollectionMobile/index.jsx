import { useState } from "react";
import { PiSortAscending } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import SortDropdownMobile from "./SortDropdownMobile";

const ProductCollectionMobile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Popular");

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSortSelection = (sortOption) => {
    setSelectedSort(sortOption);
    setIsDropdownOpen(false);
  };

  return (
    <div>
      {/* Sort and Filters Buttons */}
      <div className="w-full fixed bottom-0 left-0 grid grid-cols-2 divide-x divide-dark-deep bg-background-light">
        <button
          onClick={toggleDropdown}
          className="p-2 flex items-center justify-center gap-2"
        >
          <PiSortAscending className="text-3xl" />
          <div className="flex flex-col items-start -space-y-1">
            <span className="uppercase">Sort By</span>
            <span className="text-xs">{selectedSort}</span>
          </div>
        </button>

        <button className="p-2 flex items-center justify-center gap-2">
          <VscSettings className="text-2xl" />
          <div>
            <span className="uppercase">Filters</span>
          </div>
        </button>
      </div>

      <SortDropdownMobile
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        selectedSort={selectedSort}
        onSortSelect={handleSortSelection}
      />
    </div>
  );
};

export default ProductCollectionMobile;
