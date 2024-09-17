import { Link } from "react-router-dom";
import { LuStore } from "react-icons/lu";
import { FiPackage } from "react-icons/fi";
import { RiCustomerService2Line } from "react-icons/ri";

const ServiceLinks = () => {
  return (
    <div className="flex items-center">
      <Link className="flex items-center gap-1" to={"/store-locator"}>
        <LuStore className="ms-2 text-xl" />
        <span>Locate Stores</span>
      </Link>
      <span className="ms-2">|</span>
      <Link className="flex items-center gap-1" to={"/"}>
        <FiPackage className="ms-2 text-xl" />
        <span>Track Orders</span>
      </Link>
      <span className="ms-2">|</span>
      <Link className="flex items-center gap-1" to={"/"}>
        <RiCustomerService2Line className="ms-2 text-xl" />
        <span>Customer Support</span>
      </Link>
    </div>
  );
};

export default ServiceLinks;