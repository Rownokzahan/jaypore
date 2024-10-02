import { Link } from "react-router-dom";
import useAuthModal from "../../../../../hooks/useAuthModal";

const SidebarFooter = () => {
  const { setLoginSignupModalVisibility } = useAuthModal();

  return (
    <ul className="p-4 space-y-4">
      <li>
        <button onClick={()=>setLoginSignupModalVisibility(true)}>
          <span>Login / Sign up</span>
        </button>
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
