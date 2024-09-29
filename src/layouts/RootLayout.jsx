import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const { pathname } = useLocation();

  // Scroll to the top of the page whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="text-dark-deep text-base bg-background-light">
      <Outlet />
    </div>
  );
};

export default RootLayout;
