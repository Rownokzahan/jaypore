import { Link } from "react-router-dom";
import img1 from "../../../assets/images/banner-carousel/desktop/banner1.jpg";
import img2 from "../../../assets/images/banner-carousel/desktop/banner2.jpg";
import img3 from "../../../assets/images/banner-carousel/desktop/banner3.jpg";
import img4 from "../../../assets/images/banner-carousel/desktop/banner5.jpg";
import img5 from "../../../assets/images/banner-carousel/desktop/banner6.jpg";
import img6 from "../../../assets/images/banner-carousel/desktop/banner7.jpg";
import Carousel from "../../../components/carousel/Carousel";
import Brands from "../Shared/Brands";
import FeaturedCollections from "../Shared/FeaturedCollections";
import FinestCollection from "../Shared/FinestCollection";
import NewArrivalsDesktop from "./NewArrivalsDesktop";
import PopularCategoriesDesktop from "./PopularCategoriesDesktop";
import RecommendedCollectionDesktop from "./RecommendedCollectionDesktop";

const imagesArray = [img1, img2, img3, img4, img5, img6];

const HomeDesktop = () => {
  return (
    <>
      {/* Banner Carousel */}
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

      <PopularCategoriesDesktop />
      <NewArrivalsDesktop />

      {/* Gradient Section */}
      <section
        className="p-10 text-center text-primary flex flex-wrap justify-center items-center gap-16"
        style={{
          backgroundImage:
            "linear-gradient(270deg, rgba(187,65,37,.078), hsla(0,2%,67%,.051), rgba(187,65,37,.078))",
        }}
      >
        <Link to={"/"} title="Unique and exclusive collections">
          <figure>
            <img
              src="https://imagescdn.jaypore.com/img/app/micrositemedia/production/designsIcon_262_16904549538211698333343.png"
              className="mx-auto w-auto h-auto max-w-full"
              alt="Baluchari Benevolence Collection - Unique and exclusive"
              width="100"
              height="100"
            />
            <figcaption className="mt-2">
              Unique and exclusive collections
            </figcaption>
          </figure>
        </Link>

        <Link to={"/"} title="Age old crafts">
          <figure>
            <img
              src="https://imagescdn.jaypore.com/img/app/micrositemedia/production/craftsIcon_262_16904548674881698333281.png"
              className="mx-auto w-auto h-auto max-w-full"
              alt="A Tribal Calling Collection - Age old crafts"
              width="100"
              height="100"
            />
            <figcaption className="mt-2">Age old crafts</figcaption>
          </figure>
        </Link>

        <Link to={"/"} title="Contemporary designs">
          <figure>
            <img
              src="https://imagescdn.jaypore.com/img/app/micrositemedia/production/collectionsIcon_262_16904547695551698333210.png"
              className="mx-auto w-auto h-auto max-w-full"
              alt="Contemporary Collection - Modern and stylish designs"
              width="100"
              height="100"
            />
            <figcaption className="mt-2">Contemporary designs</figcaption>
          </figure>
        </Link>

        <Link to={"/"} title="Artisanal communities">
          <figure>
            <img
              src="https://imagescdn.jaypore.com/img/app/micrositemedia/production/communitiesIcon_262_16904550512851698333394.png"
              className="mx-auto w-auto h-auto max-w-full"
              alt="Artisanal Weaves Collection - Handcrafted by communities"
              width="100"
              height="100"
            />
            <figcaption className="mt-2">Artisanal communities</figcaption>
          </figure>
        </Link>
      </section>

      <FeaturedCollections />
      <FinestCollection />
      <RecommendedCollectionDesktop />
      <Brands />
    </>
  );
};

export default HomeDesktop;
