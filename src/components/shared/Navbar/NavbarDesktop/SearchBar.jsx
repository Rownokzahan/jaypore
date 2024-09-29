import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

const SearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Manage input value with state

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleInput = () => {
    if (inputValue === "") {
      setShowInput(!showInput);
    }
  };

  return (
    <div className="flex items-center gap-px">
      <div
        className={`flex text-sm text-nowrap relative transition-all duration-300 ease-in-out ${
          showInput ? "w-24" : "w-0"
        } overflow-hidden`}
      >
        <input
          type="text"
          id="desktop-search"
          value={inputValue}
          onChange={handleInputChange}
          autoComplete="off"
          placeholder=""
          className="bg-transparent focus:outline-none peer w-24"
        />

        <label
          htmlFor="desktop-search"
          className={`absolute left-0 transition-all duration-300 ${
            inputValue ? "text-transparent" : ""
          }`}
        >
          Search Here...
        </label>

        <span
          className={`w-24 h-px absolute left-0 bottom-0 bg-dark-deep ${
            inputValue ? "scale-x-100" : "scale-x-0"
          } peer-focus:scale-x-100 transition-transform duration-300`}
        ></span>
      </div>

      <button onClick={toggleInput}>
        <MdOutlineSearch className="text-xl" />
      </button>
    </div>
  );
};

export default SearchBar;
