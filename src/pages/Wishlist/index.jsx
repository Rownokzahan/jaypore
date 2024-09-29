import ProductCard from "../../components/card/ProductCard";
import similarProductsData from "../../data/similarProductsData";

const Wishlist = () => {
  return (
    <div className="container">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-semibold">Wishlist</h3>
        <p>{5} items</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-6">
        {similarProductsData?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
