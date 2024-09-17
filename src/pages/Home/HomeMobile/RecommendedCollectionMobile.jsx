import { Link } from "react-router-dom";
import ProductCard from "../../../components/card/ProductCard";
import recommendedData from "../../../data/recommendedData";

const RecommendedCollectionMobile = () => {
  return (
    <section className="py-4">
      <header className="mb-3 px-2 text-center">
        <h3 className="text-2xl">Recommended For You</h3>
        <Link href="/" className="underline">
          View All &gt;
        </Link>
      </header>

      <div className="flex hide-scrollable">
        {recommendedData?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedCollectionMobile;
