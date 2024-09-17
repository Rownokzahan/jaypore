import { useScreenSize } from "../../hooks/useScreenSize";
import HomeDesktop from "./HomeDesktop";
import HomeMobile from "./HomeMobile";

const Home = () => {
  const { isDesktopScreen } = useScreenSize();
  return isDesktopScreen ? <HomeDesktop /> : <HomeMobile />;
};

export default Home;
