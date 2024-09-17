import { useMediaQuery } from "react-responsive";

// Custom hook to determine if the screen is desktop or mobile
export const useScreenSize = (breakpoint = 1024) => {
  const isDesktopScreen = useMediaQuery({ minWidth: breakpoint });
  const isMobileScreen = useMediaQuery({ maxWidth: breakpoint - 1 });

  return { isDesktopScreen, isMobileScreen };
};
