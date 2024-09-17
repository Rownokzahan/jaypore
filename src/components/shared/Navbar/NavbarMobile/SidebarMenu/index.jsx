import SidebarHeader from "./SidebarHeader";
import CategoryList from "./CategoryList";
import SidebarFooter from "./SidebarFooter";

const SidebarMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 left-0 overflow-scroll w-64 bg-background-light shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } h-full z-50`}
    >
      <SidebarHeader toggleMenu={toggleMenu} />

      <CategoryList />

      <SidebarFooter />
    </div>
  );
};

export default SidebarMenu;
