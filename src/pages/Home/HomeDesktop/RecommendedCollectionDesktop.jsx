import { Link } from "react-router-dom";
import Carousel from "../../../components/carousel/Carousel";
import ProductCard from "../../../components/card/ProductCard";
import productData from "../../../data/productData";

const RecommendedCollectionDesktop = () => {
  return (
    <section className="mt-responsive py-12 bg-background-gray">
      <header className="container !mt-0 mb-8 text-end">
        <h3 className="text-2xl lg:text-3xl text-center">Recommended For You</h3>
        <Link to={"/"} className="underline">
          View All &gt;
        </Link>
      </header>

      <div className="container !mt-0 overflow-hidden">
        <Carousel
          displayIndicators={false}
          slidesToShow={4}
          autoplay={false}
          infinite={false}
        >
          {productData?.map((product) => (
            <div key={product.id} className="px-4">
              <ProductCard product={product} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default RecommendedCollectionDesktop;
