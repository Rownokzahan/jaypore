import { useEffect } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import sortData from "../../../data/sortData";

const SortDropdownMobile = ({
  isDropdownOpen,
  setIsDropdownOpen,
  selectedSort,
  onSortSelect,
}) => {
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.id === "sort-by-overlay") {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isDropdownOpen, setIsDropdownOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        id="sort-by-overlay"
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-50 ${
          isDropdownOpen
            ? "opacity-40 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Sort Dropdown */}
      <div
        className={`fixed bottom-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out transform ${
          isDropdownOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="p-4 border-b flex items-center justify-between rounded-t-xl bg-background-light">
          <h4 className="text-lg font-semibold">Sort By</h4>
          <HiOutlineXMark
            className="text-xl cursor-pointer"
            onClick={() => setIsDropdownOpen(false)}
          />
        </div>

        <ul className="px-4 py-2 w-full bg-background-light">
          {sortData.map((item, index) => (
            <div
              key={index}
              className={`plp_sortItemsContainer__XzrNa MuiBox-root css-0 ${
                selectedSort === item ? "bg-gray-200" : ""
              }`}
            >
              <li
                onClick={() => onSortSelect(item)}
                className={`p-2 w-full cursor-pointer ${
                  selectedSort === item ? "font-bold bg-[#f9eddf]" : ""
                }`}
              >
                <span>{item}</span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SortDropdownMobile;
