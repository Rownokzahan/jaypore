import { useState } from "react";
import { PiSortAscending } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import SortDropdownMobile from "./SortDropdownMobile";
import FilterSidebarMobile from "./FilterSidebarMobile/FilterSidebarMobile";
import productData from "../../../data/productData";
import ProductCardMobile from "../../../components/card/ProductCard/ProductCardMobile";
import Pagination from "../shared/Pagination";

const ProductCollectionMobile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Popular");
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false); // State for sidebar
  const [appliedFilters, setAppliedFilters] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleFilterSidebar = () => {
    setIsFilterSidebarOpen((prev) => !prev);
  };

  const handleSortSelection = (sortOption) => {
    setSelectedSort(sortOption);
    setIsDropdownOpen(false);
  };

  return (
    <section className="relative">
      {/* Sort and Filters Buttons */}
      <div className="sticky top-[63px] z-40 pb-1 border-t grid grid-cols-2 divide-x divide-dark-deep bg-background-light">
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

        <button
          onClick={toggleFilterSidebar} // Open sidebar on click
          className="p-2 flex items-center justify-center gap-2"
        >
          <VscSettings className="text-2xl" />
          <div>
            <span className="uppercase">Filters</span>
          </div>
        </button>
      </div>

      {/* Dropdown for Sorting */}
      <SortDropdownMobile
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        selectedSort={selectedSort}
        onSortSelect={handleSortSelection}
      />

      {/* Sidebar for Filters */}
      <FilterSidebarMobile
        isFilterSidebarOpen={isFilterSidebarOpen}
        setIsFilterSidebarOpen={setIsFilterSidebarOpen}
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
      />

      <div className="container !pt-0 grid grid-cols-2 gap-x-2 gap-y-10">
        {productData?.map((product) => (
          <ProductCardMobile key={product.id} product={product} />
        ))}
      </div>

      <Pagination totalProducts={1216} onViewMore={()=>{}} />
    </section>
  );
};

export default ProductCollectionMobile;
