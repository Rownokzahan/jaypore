import { useState, useRef, useEffect } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const DropdownSelector = ({
  selected,
  list,
  onSelect,
  defaultText = "Select",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown open/close state
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  // Handle item selection and close dropdown after selecting
  const handleSelect = (item) => {
    if (!disabled) {
      onSelect(item);
      setIsOpen(false);
    }
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="w-full relative bg-background-light"
      aria-label="Dropdown selector"
    >
      {/* Button to toggle dropdown */}
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between border p-2 ${
          isOpen && "outline outline-2 outline-dark-deep rounded relative z-10"
        } ${
          disabled
            ? "bg-gray-200 bg-opacity-50 text-gray-400 cursor-default"
            : "bg-background-light"
        }`}
      >
        <span className="truncate">{selected || defaultText}</span>
        {/* Dropdown arrow icon */}
        <TiArrowSortedDown
          className={`${isOpen ? "rotate-180" : ""} ${
            disabled ? "text-gray-400" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown list of items */}
      <ul
        className={`absolute right-0 z-20 w-full mt-1 py-1 origin-top bg-background-light border border-dark-light rounded shadow-lg ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } transition-transform duration-300 ${
          disabled ? "pointer-events-none" : ""
        }`}
        role="listbox"
        aria-hidden={!isOpen}
      >
        {list.map((item) => (
          <li key={item} role="option" aria-selected={item === selected}>
            <button
              onClick={() => handleSelect(item)}
              className={`block px-4 py-2 w-full text-left ${
                item === selected
                  ? "bg-primary-dark text-background-light"
                  : "hover:bg-gray-300 hover:bg-opacity-30"
              } ${disabled ? "cursor-not-allowed" : ""}`}
              disabled={disabled}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownSelector;
