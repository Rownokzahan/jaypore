import { Link } from "react-router-dom";
import { useScreenSize } from "../../hooks/useScreenSize";
import ProductDesktop from "./ProductDesktop";
import ProductMobile from "./ProductMobile";

const Product = () => {
  const { isDesktopScreen } = useScreenSize();
  return (
    <>
      {/* Breadcrumb */}
      <div className="container">
        <ul className="flex flex-wrap gap-2 divide-dark text-dark">
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          {">"}
          <li>
            <Link to={`/c/jaypore-label`}>Jaypore Label</Link>
          </li>
          {">"}
          <li>
            <Link to={`/c/jaypore-silver-jewelry`}>Silver Jewelry</Link>
          </li>
          {">"}
          <li>
            <Link to={`/c/jaypore-women-silver-earrings`}>Earrings</Link>
          </li>
          {">"}
          <li className="text-dark-deep">
            Women Silver Push Back Silver Studs
          </li>
        </ul>
      </div>

      {isDesktopScreen ? <ProductDesktop /> : <ProductMobile />}
    </>
  );
};

export default Product;
