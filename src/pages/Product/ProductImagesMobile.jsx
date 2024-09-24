import Carousel from "../../components/carousel/Carousel";

const ProductImagesMobile = ({ images }) => {
  return (
    <div className="mb-12 relative">
      {images?.length !== 0 ? (
        <Carousel slidesToShow={1} autoplay={false}>
          {images?.map((item) => (
            <img
              key={item}
              src={item}
              alt={name}
              className="w-full h-full object-cover"
            />
          ))}
        </Carousel>
      ) : (
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default ProductImagesMobile;
