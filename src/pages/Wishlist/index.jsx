import ProductCard from "../../components/card/ProductCard";
import similarProductsData from "../../data/similarProductsData";

const Wishlist = () => {
  return (
    <main className="container !mt-2 lg:!mt-6">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-semibold">Wishlist</h3>
        <p className="text-dark">{5} items</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-8">
        {similarProductsData?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Wishlist;
