import SidebarHeader from "./SidebarHeader";
import CategoryList from "./CategoryList";
import SidebarFooter from "./SidebarFooter";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SidebarMenu = ({ isOpen, toggleMenu }) => {
  const location = useLocation();

  // Handle disabling main page scrolling when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable main page scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling when sidebar closes
    }

    // Cleanup on component unmount or when closing
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close the sidebar on route change
  useEffect(() => {
    if (isOpen) {
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#f9eddf] bg-opacity-50 z-50"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 overflow-y-auto w-64 bg-background-light shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } h-full z-50`}
      >
        <SidebarHeader toggleMenu={toggleMenu} />
        <CategoryList />
        <SidebarFooter />
      </div>
    </>
  );
};

export default SidebarMenu;
