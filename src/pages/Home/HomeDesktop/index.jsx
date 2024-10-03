import Brands from "../Shared/Brands";
import FeaturedCollections from "../Shared/FeaturedCollections";
import FinestCollection from "../Shared/FinestCollection";
import NewArrivalsDesktop from "./NewArrivalsDesktop";
import PopularCategoriesDesktop from "./PopularCategoriesDesktop";
import RecommendedCollectionDesktop from "./RecommendedCollectionDesktop";
import CollectionHighlights from "./CollectionHighlights";
import BannerCarousel from "./BannerCarousel";

const HomeDesktop = () => {
  return (
    <>
      <BannerCarousel />
      <PopularCategoriesDesktop />
      <NewArrivalsDesktop />
      <CollectionHighlights />
      <FeaturedCollections />
      <FinestCollection />
      <RecommendedCollectionDesktop />
      <Brands />
    </>
  );
};

export default HomeDesktop;
