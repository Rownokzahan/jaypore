import { Link } from "react-router-dom";

const SidebarFooter = () => {
  return (
    <ul className="p-4 space-y-4">
      <li>
        <Link to={"#"}>
          <span>Login / Sign up</span>
        </Link>
      </li>
      <li>
        <Link to={"store-locator"}>
          <span>Locate Stores</span>
        </Link>
      </li>
      <li>
        <Link to={"#"}>
          <span>Track Orders</span>
        </Link>
      </li>

      <li>
        <Link to={"#"}>
          <span>More</span>
        </Link>
      </li>
    </ul>
  );
};

export default SidebarFooter;
