import ProductCard from "../card/ProductCard";
import Carousel from "../carousel/Carousel";

const ProductShowcase = ({ title, products }) => {
  return (
    <section className="container">
      <h3 className="mb-6 text-lg font-semibold">{title}</h3>

      {/* For larger screen */}
      <div className="overflow-hidden hidden lg:block mx-2">
        <Carousel
          displayIndicators={false}
          slidesToShow={5}
          autoplay={false}
          infinite={false}
        >
          {products?.map((product) => (
            <div key={product.id} className="px-2">
              <ProductCard product={product} />
            </div>
          ))}
        </Carousel>
      </div>

      {/* For smaller screen */}
      <div className="flex gap-4 hide-scrollable lg:hidden">
        {products?.map((product) => (
          <div key={product.id} className="w-48">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;