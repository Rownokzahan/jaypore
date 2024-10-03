import img1 from "../../../assets/images/banner-carousel/desktop/banner1.jpg";
import img2 from "../../../assets/images/banner-carousel/desktop/banner2.jpg";
import img3 from "../../../assets/images/banner-carousel/desktop/banner3.jpg";
import img4 from "../../../assets/images/banner-carousel/desktop/banner5.jpg";
import img5 from "../../../assets/images/banner-carousel/desktop/banner6.jpg";
import img6 from "../../../assets/images/banner-carousel/desktop/banner7.jpg";
import Carousel from "../../../components/carousel/Carousel";

const imagesArray = [img1, img2, img3, img4, img5, img6];

const BannerCarousel = () => {
  return (
    <section>
      <Carousel>
        {imagesArray?.map((image, index) => (
          <figure key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover h-[400px] md:h-[800px] lg:h-auto"
            />
          </figure>
        ))}
      </Carousel>
    </section>
  );
};

export default BannerCarousel;
