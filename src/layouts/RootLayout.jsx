import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="text-dark-deep text-base bg-background-light">
      <Outlet />
    </div>
  );
};

export default RootLayout;