import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md"; // Make sure to import these
import filtersData from "../../../../data/filtersData";

const FilterSidebarMobile = ({
  isFilterSidebarOpen,
  setIsFilterSidebarOpen,
  appliedFilters = [],
  setAppliedFilters,
}) => {
  const [activeTab, setActiveTab] = useState(filtersData[0]?.name || ""); // Default to the first tab

  const closeSidebar = () => {
    setIsFilterSidebarOpen(false);
  };

  const toggleFilter = (optionId) => {
    setAppliedFilters((prevFilters) =>
      prevFilters.includes(optionId)
        ? prevFilters.filter((id) => id !== optionId)
        : [...prevFilters, optionId]
    );
  };

  return (
    <div
      className={`fixed z-50 inset-0 bg-background-light transition-transform duration-700 ${
        isFilterSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-full py-4 px-3 border-b border-dark-light bg-background-light flex justify-between items-center sticky top-0 left-0">
        <h4 className="text-lg font-semibold">Filter By</h4>

        <button onClick={closeSidebar} className="text-xl">
          <IoClose />
        </button>
      </div>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Vertical Tabs */}
        <div className="w-1/3 overflow-y-auto">
          <ul className="divide-y divide-background-light overflow-y-auto">
            {filtersData?.map((filter) => (
              <li
                key={filter.name}
                className={`cursor-pointer p-4 font-semibold ${
                  activeTab === filter.name
                    ? "bg-background-light"
                    : "bg-dark-light"
                }`}
                onClick={() => setActiveTab(filter.name)}
              >
                {filter.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Filter Options for Active Tab */}
        <div className="flex-1 p-4 overflow-y-auto">
          {filtersData
            .filter((filter) => filter.name === activeTab)
            .map((filter) => (
              <div key={filter.name}>
                <ul>
                  {filter.options.map((option) => (
                    <li key={option.id} className="mb-2">
                      <input
                        type="checkbox"
                        id={option.id}
                        checked={appliedFilters.includes(option.id)}
                        onChange={() => toggleFilter(option.id)}
                        className="hidden"
                      />

                      <label
                        htmlFor={option.id}
                        className="w-full flex gap-2 items-center justify-between"
                      >
                        <span className="flex items-center gap-2 text-2xl text-primary">
                          {appliedFilters.includes(option.id) ? (
                            <MdCheckBox className="text-primary" />
                          ) : (
                            <MdCheckBoxOutlineBlank className="text-primary-light" />
                          )}
                          <span className="text-base text-dark-deep">
                            {option.label}
                          </span>
                        </span>
                        <span className="text-dark text-xs">
                          ({option.count})
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      <div className="w-full py-3 px-4 border-y bg-background-light flex gap-4 fixed bottom-0 left-0">
        <button className="btn-primary-outline">
          Clear All Filters
        </button>

        <button className="btn-primary">
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterSidebarMobile;
