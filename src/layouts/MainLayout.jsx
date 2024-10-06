import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="fixed top-0 bg-background-light z-50 w-full">
        <Navbar />
      </div>

      <div className="min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-80px)] pt-[63px] lg:pt-[123px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
