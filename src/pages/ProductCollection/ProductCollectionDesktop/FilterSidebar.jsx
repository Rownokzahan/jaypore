import { useState, useRef } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import filtersData from "../../../data/filtersData";

const FilterSidebar = () => {
  const [expandedFilters, setExpandedFilters] = useState({});
  const [appliedFilters, setAppliedFilters] = useState([]);
  const heightRefs = useRef({});

  const toggleFilter = (filterName) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const handleCheckboxChange = (optionId) => {
    setAppliedFilters((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const clearAllAppliedFilters = () => {
    setAppliedFilters([]);
  };

  // Helper function to get the label for applied filters
  const getAppliedFilterLabel = (id) => {
    for (const item of filtersData) {
      const option = item.options.find((opt) => opt.id === id);
      if (option) {
        return option.label;
      }
    }
    return id; // Fallback to id if label not found
  };

  return (
    <div className="bg-background-light border-t">
      {appliedFilters?.length !== 0 && (
        <>
          <div className="flex items-center justify-between pt-4">
            <p className="uppercase text-sm">Applied Filters</p>
            <button
              className="underline underline-offset-2"
              onClick={clearAllAppliedFilters}
            >
              Clear All
            </button>
          </div>

          <div className="mt-2 pb-4 border-b border-dark-light flex gap-3 flex-wrap">
            {appliedFilters?.map((item, index) => (
              <button
                key={index}
                onClick={() => handleCheckboxChange(item)}
                className="px-2 py-1 border flex gap-3 items-center"
              >
                <span>{getAppliedFilterLabel(item)}</span>
                <HiOutlineXMark />
              </button>
            ))}
          </div>
        </>
      )}

      <div>
        {filtersData?.map((filter) => (
          <div key={filter.name}>
            <button
              onClick={() => toggleFilter(filter.name)}
              className="w-full py-3 border-b border-dark-light text-lg flex justify-between items-center"
            >
              <span className="uppercase">{filter.name}</span>
              <IoIosArrowForward
                className={`text-dark ${
                  expandedFilters[filter.name] ? "rotate-90" : ""
                } transition-transform duration-300`}
              />
            </button>

            <div
              ref={(el) => (heightRefs.current[filter.name] = el)}
              style={{
                height: expandedFilters[filter.name]
                  ? `${heightRefs.current[filter.name]?.scrollHeight}px`
                  : "0px",
              }}
              className={`overflow-hidden transition-all ease-in-out duration-300`}
            >
              <div className="border-b -mt-px ps-1 py-3">
                {filter.options.length > 0 ? (
                  filter.options.map((option) => (
                    <div key={option.id} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={option.id}
                        checked={appliedFilters.includes(option.id)}
                        onChange={() => handleCheckboxChange(option.id)}
                        aria-labelledby={option.label}
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
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No options available</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
