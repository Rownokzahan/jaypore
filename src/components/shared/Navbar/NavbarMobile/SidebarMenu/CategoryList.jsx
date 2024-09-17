import { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import menuData from "../../../../../data/menuData";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [openCategories, setOpenCategories] = useState([]); // Track open categories
  const [openSubCategories, setOpenSubCategories] = useState({}); // Track open subcategories

  // Handle category click to toggle open/closed state
  const handleCategoryClick = (index) => {
    setOpenCategories(
      (prevOpenCategories) =>
        prevOpenCategories.includes(index)
          ? prevOpenCategories.filter((i) => i !== index) // Close if already open
          : [...prevOpenCategories, index] // Open if not already open
    );
  };

  // Handle subcategory click to toggle open/closed state
  const handleSubCategoryClick = (categoryIndex, subCategoryIndex) => {
    setOpenSubCategories((prevOpenSubCategories) => ({
      ...prevOpenSubCategories,
      [categoryIndex]: prevOpenSubCategories[categoryIndex]?.includes(
        subCategoryIndex
      )
        ? prevOpenSubCategories[categoryIndex].filter(
            (i) => i !== subCategoryIndex
          ) // Close if already open
        : [...(prevOpenSubCategories[categoryIndex] || []), subCategoryIndex], // Open if not already open
    }));
  };

  return (
    <ul className="p-4 space-y-2 border-b">
      {menuData.map((item, index) => (
        <li key={index}>
          {item.categories ? (
            // Category item with expandable subcategories
            <div
              className="flex items-center justify-between cursor-pointer py-2"
              onClick={() => handleCategoryClick(index)}
            >
              <span className="font-semibold">{item.title}</span>
              <button className="text-xl transition-transform duration-300">
                <IoChevronForward
                  className={`transition-transform duration-300 ${
                    openCategories.includes(index) ? "rotate-90" : ""
                  }`}
                />
              </button>
            </div>
          ) : (
            // Link item without subcategories
            <Link
              to={item.url}
              className="flex items-center justify-between py-2"
            >
              <span className="font-semibold">{item.title}</span>
            </Link>
          )}
          {item.categories && (
            <ul
              className={`pl-3 overflow-hidden transition-all duration-300 ${
                openCategories.includes(index) ? "max-h-96" : "max-h-0"
              }`}
            >
              {item.categories.map((category, catIndex) => (
                <li key={catIndex} className="mt-2 space-y-2">
                  {category.subcategories ? (
                    // Subcategory item with expandable sub-subcategories
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => handleSubCategoryClick(index, catIndex)}
                    >
                      <span>{category.title}</span>
                      <button className="text-xl transition-transform duration-300">
                        <IoChevronForward
                          className={`transition-transform duration-300 ${
                            openSubCategories[index]?.includes(catIndex)
                              ? "rotate-90"
                              : ""
                          }`}
                        />
                      </button>
                    </div>
                  ) : (
                    // Link item without subcategories
                    <Link
                      to={category.url}
                      className="flex items-center justify-between py-2"
                    >
                      <span>{category.title}</span>
                    </Link>
                  )}
                  {category.subcategories && (
                    <ul
                      className={`pl-4 space-y-2 mt-2 overflow-hidden transition-all duration-300 ${
                        openSubCategories[index]?.includes(catIndex)
                          ? "max-h-96"
                          : "max-h-0"
                      }`}
                    >
                      {category.subcategories.map((subcat, subIndex) => (
                        <li key={subIndex}>
                          <Link to={subcat.url}>{subcat.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
