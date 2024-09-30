import { Link } from "react-router-dom";
import menuData from "../../../../data/menuData";

const NavigationBar = () => {
  return (
    <div className="relative text-base">
      <ul className="flex items-center justify-center px-4 border-y">
        {menuData.map((link, index) => (
          <li key={index} className="group px-4">
            {/* Main menu link */}
            <Link to={link.url} className="py-4 block font-semibold relative">
              {link.title}

              {/* Underline on hover */}
              <span className="hidden group-hover:block w-full h-[2px] bg-primary absolute -bottom-px z-20"></span>
            </Link>

            {/* Dropdown for categories (if available) */}
            {link.categories && (
              <div className="absolute top-full w-screen left-0 px-8 pt-4 pb-8 bg-background-light shadow-lg z-10 hidden group-hover:block">
                <div className="flex flex-wrap gap-12">
                  {link.categories.map((category, catIndex) => (
                    <div key={catIndex} className="space-y-2">
                      <h4 className="font-semibold">{category.title}</h4>
                      <ul>
                        {category.subcategories.map((subcat, subcatIndex) => (
                          <li key={subcatIndex}>
                            <Link
                              to={subcat.url}
                              className="text-gray-700 hover:text-primary"
                            >
                              {subcat.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;
