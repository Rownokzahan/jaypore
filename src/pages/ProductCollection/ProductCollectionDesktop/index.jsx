import { useState } from "react";
import DropdownSelector from "../../../components/dropdown/DropdownSelector";
import sortData from "../../../data/sortData";
import FilterSidebarDesktop from "./FilterSidebarDesktop";
import productData from "../../../data/productData.js";
import ProductCardDesktop from "../../../components/card/ProductCard/ProductCardDesktop.jsx";
import Pagination from "../shared/Pagination.jsx";

const ProductCollectionDesktop = () => {
  const [selectedSort, setSelectedSort] = useState("Popular");

  // onSelect function to handle sort changes
  const handleSort = (item) => {
    setSelectedSort(item); // Update the selected sort state
    console.log("Selected Sort:", item); // You can also handle any additional logic here
  };

  return (
    <section className="container !pt-0 relative">
      <div className="py-2 flex items-center justify-between sticky top-[139px] z-10 bg-background-light">
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
          <FilterSidebarDesktop />
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-2 mt-6">
            {productData?.map((product) => (
              <ProductCardDesktop key={product.id} product={product} />
            ))}
          </div>

          <Pagination totalProducts={1216} viewedProducts={24} />
        </div>
      </div>
    </section>
  );
};

export default ProductCollectionDesktop;
