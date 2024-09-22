import { Link } from "react-router-dom";
import recommendedData from "../../../data/recommendedData";
import RecommendedCard from "../../../components/card/RecommendedCard";

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
          <RecommendedCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedCollectionMobile;
