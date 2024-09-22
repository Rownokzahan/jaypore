const Pagination = ({ viewedProducts = 24, totalProducts, onViewMore }) => {
  // Calculate the percentage of products viewed
  const progress = (viewedProducts / totalProducts) * 100;

  return (
    <div className="my-8 lg:mt-16">
      <div className="w-8/12 lg:w-6/12 h-1 mx-auto rounded-md bg-primary-light overflow-hidden">
        <span
          className="w-full h-full bg-primary block rounded-md"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        ></span>
      </div>

      <p className="text-dark text-center mb-8 mt-3">
        You have viewed {viewedProducts} of {totalProducts} products
      </p>

      <div className="w-5/12 mx-auto">
        <button className="btn-primary-outline" onClick={onViewMore}>
          View More
        </button>
      </div>
    </div>
  );
};

export default Pagination;
