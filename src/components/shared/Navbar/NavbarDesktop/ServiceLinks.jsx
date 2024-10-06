import { Link } from "react-router-dom";
import { LuStore } from "react-icons/lu";
import { FiPackage } from "react-icons/fi";
import { RiCustomerService2Line } from "react-icons/ri";

const ServiceLinks = () => {
  return (
    <div className="flex items-center w-max">
      <Link to={"/store-locator"} className="flex items-center gap-1">
        <LuStore className="ms-2 text-xl" />
        <span>Locate Stores</span>
      </Link>
      <span className="ms-2">|</span>
      <Link to={"/"} className="flex items-center gap-1">
        <FiPackage className="ms-2 text-xl" />
        <span>Track Orders</span>
      </Link>
      <span className="ms-2">|</span>
      <Link to={"customer-support"} className="flex items-center gap-1">
        <RiCustomerService2Line className="ms-2 text-xl" />
        <span>Customer Support</span>
      </Link>
    </div>
  );
};

export default ServiceLinks;
