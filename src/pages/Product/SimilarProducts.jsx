import SimilarProductCard from "../../components/card/SimilarProductCard";
import Carousel from "../../components/carousel/Carousel";
import similarProductsData from "../../data/similarProductsData";

const SimilarProducts = () => {
  return (
    <section className="container">
      <h3 className="mb-6 text-lg font-semibold">Similar Products</h3>

      {/* For larger screen */}
      <div className="overflow-hidden hidden lg:block">
        <Carousel
          displayIndicators={false}
          slidesToShow={5}
          autoplay={false}
          infinite={false}
        >
          {similarProductsData?.map((product, index) => (
            <SimilarProductCard key={index} product={product} />
          ))}
        </Carousel>
      </div>

      {/* For smaller screen */}
      <div className="flex hide-scrollable lg:hidden">
        {similarProductsData?.map((product) => (
          <SimilarProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default SimilarProducts;
