import { Link } from "react-router-dom";
import { useScreenSize } from "../../hooks/useScreenSize";
import ProductCollectionDesktop from "./ProductCollectionDesktop";
import ProductCollectionMobile from "./ProductCollectionMobile";

const ProductCollection = () => {
  const { isDesktopScreen } = useScreenSize();

  return (
    <>
      <main className="container !mt-2 lg:!mt-6">
        {/* Breadcrumb should be dynmic for this page */}
        {/* Breadcrumb */}
        <div className="mb-6">
          <ul className="flex gap-2 divide-dark text-dark">
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            {">"}
            <li className="text-dark-deep">
              <Link to={`product-collection`}>{"Product Collection"}</Link>
            </li>
          </ul>
        </div>

        <h3 className="text-lg mb-4">
          {"Sarees for Women"} -{" "}
          <span className="text-base text-dark">{1862} products</span>
        </h3>
      </main>

      {isDesktopScreen ? (
        <ProductCollectionDesktop />
      ) : (
        <ProductCollectionMobile />
      )}
    </>
  );
};

export default ProductCollection;
