import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import footerData from "../../../../data/footerData ";

const ExpandableLinks = () => {
  const [expandedSections, setExpandedSections] = useState([]);

  // Toggle section expansion
  const toggleSection = (title) => {
    setExpandedSections((prev) =>
      prev.includes(title)
        ? prev.filter((section) => section !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="bg-[#f9eddf] pb-5 divide-y divide-background-light">
      {footerData.map((section) => (
        <div key={section.title} className="container !mt-0 bg-[#f9eddf] py-2">
          <button
            onClick={() => toggleSection(section.title)}
            className="w-full font-semibold flex items-center justify-between"
          >
            <span>{section.title}</span>
            <IoIosArrowForward
              className={`transition-transform ${
                expandedSections.includes(section.title) ? "rotate-90" : ""
              }`}
            />
          </button>

          <ul
            className={`list-none space-y-2 overflow-hidden transition-all duration-300 mt-2 ${
              expandedSections.includes(section.title)
                ? "max-h-[1000px]"
                : "max-h-0"
            }`}
          >
            {section.links.map((link) => (
              <li key={link.name} className="flex items-center gap-2">
                <IoIosArrowForward className="text-gray-400" />
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExpandableLinks;
