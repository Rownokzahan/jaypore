import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

const SearchBar = () => {
  const [showInput, setShowInput] = useState(false); // State to manage input visibility

  const toggleInput = () => {
    setShowInput(!showInput); // Toggle the input visibility
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
          autoComplete="off"
          placeholder=" "
          className="bg-transparent focus:outline-none peer w-24"
        />

        <label
          htmlFor="desktop-search"
          className="
            absolute 
            left-0 
            transition-all 
            duration-300
            peer-focus:text-transparent
            peer-focus:after:scale-x-100
            after:absolute 
            after:left-0 
            after:bottom-0 
            after:w-24 
            after:h-[2px] 
            after:bg-black 
            after:scale-x-0 
            after:transition-transform 
            after:duration-300
          "
        >
          Search Here...
        </label>
      </div>

      <button onClick={toggleInput}>
        <MdOutlineSearch className="text-xl" />
      </button>
    </div>
  );
};

export default SearchBar;
