import { Link } from "react-router-dom";
import ProductCard from "../../../components/card/ProductCard";
import Carousel from "../../../components/carousel/Carousel";
import recommendedData from "../../../data/recommendedData";

const RecommendedCollectionDesktop = () => {
  return (
    <section className="bg-[#f4f4f4]">
      <header className="container lg:pb-0 mb-4 text-right">
        <h3 className="text-3xl text-center">Recommended For You</h3>
        <Link to={"/"} className="underline">
          View All &gt;
        </Link>
      </header>

      <div className="container lg:pt-0 lg:px-6 overflow-hidden">
        <Carousel
          displayIndicators={false}
          slidesToShow={4}
          autoplay={false}
          infinite={false}
        >
          {recommendedData?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default RecommendedCollectionDesktop;
