import { useState } from "react";
import DropdownSelector from "../../../components/dropdown/DropdownSelector";
import FilterSidebar from "./FilterSidebar";
import sortData from "../../../data/sortData";

const ProductCollectionDesktop = () => {
  const [selectedSort, setSelectedSort] = useState("Popular");

  // onSelect function to handle sort changes
  const handleSort = (item) => {
    setSelectedSort(item); // Update the selected sort state
    console.log("Selected Sort:", item); // You can also handle any additional logic here
  };

  return (
    <section className="relative">
      <div className="py-2 flex items-center justify-between sticky top-[139px] bg-background-light">
        <h3 className="uppercase text-xl font-bold">Filter by</h3>
        <div className="flex items-center gap-2">
          <h4 className="uppercase text-nowrap text-lg font-semibold">
            Sort By{" "}
          </h4>
          <div className="w-60">
            <DropdownSelector
              selected={selectedSort}
              list={sortData}
              onSelect={handleSort}
              defaultText="Sort by"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-1">
          <FilterSidebar />
        </div>
        <div className="col-span-3 grid">products</div>
      </div>
    </section>
  );
};

export default ProductCollectionDesktop;
