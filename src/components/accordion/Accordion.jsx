import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Accordion = ({ items }) => {
  const [openSections, setOpenSections] = useState(
    Array(items.length).fill(false)
  );
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setOpenSections((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  useEffect(() => {
    // Update height of open sections
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.height = openSections[index]
          ? `${ref.scrollHeight}px`
          : "0px";
      }
    });
  }, [openSections]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="w-full py-4 border-b flex justify-between items-center text-left uppercase"
            onClick={() => handleToggle(index)}
          >
            {item.title}
            <IoIosArrowForward
              className={`lg:text-lg text-dark transition-transform duration-200 ${
                openSections[index] ? "rotate-90" : ""
              }`}
            />
          </button>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="border-b -mt-px overflow-hidden transition-all duration-300 ease-in-out"
          >
            <div className="p-4 text-dark text-sm">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
