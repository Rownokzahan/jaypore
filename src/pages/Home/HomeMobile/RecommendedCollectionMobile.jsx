import { Link } from "react-router-dom";
import productData from "../../../data/productData";
import ProductCard from "../../../components/card/ProductCard";

const RecommendedCollectionMobile = () => {
  return (
    <section className="mt-responsive py-8 bg-background-gray">
      <header className="container !mt-0 mb-8 text-center">
        <h3 className="text-2xl lg:text-3xl">Recommended For You</h3>
        <Link to={"/"} className="underline">
          View All &gt;
        </Link>
      </header>

      <div className="container !mt-0 flex gap-4 hide-scrollable">
        {productData?.map((product) => (
          <div key={product.id} className="w-40">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedCollectionMobile;
