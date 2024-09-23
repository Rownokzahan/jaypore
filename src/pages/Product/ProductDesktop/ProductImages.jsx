import Carousel from "../../../components/carousel/Carousel";

const ProductImages = ({images}) => {
    return (
      <div>
        {images?.length !== 0 ? (
          <Carousel displayIndicators={false} slidesToShow={1} autoplay={false}>
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

export default ProductImages;