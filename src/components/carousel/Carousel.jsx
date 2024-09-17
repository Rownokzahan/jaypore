import Slider from "react-slick";
import { CgShapeRhombus } from "react-icons/cg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "../../styles/carousel.css";

// Custom Previous Arrow
const PrevArrow = ({ className, style, onClick }) => (
  <div className={`${className} custom-prev`} style={style} onClick={onClick}>
    <IoIosArrowBack />
  </div>
);

// Custom Next Arrow
const NextArrow = ({ className, style, onClick }) => (
  <div className={`${className} custom-next`} style={style} onClick={onClick}>
    <IoIosArrowForward />
  </div>
);

const Carousel = ({
  children,
  displayIndicators = true,
  slidesToShow = 1,
  autoplay = true,
  infinite= true
}) => {
  const settings = {
    dots: displayIndicators,
    infinite: infinite,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow

    // Custom dot indicators
    appendDots: (dots) => (
      <div
        style={{
          bottom: "-30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0", padding: "0", display: "flex" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CgShapeRhombus />
      </div>
    ),
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
