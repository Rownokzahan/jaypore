import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/contact";
import NotFound from "../pages/Error/NotFound";
import StoreLocator from "../pages/StoreLocator/StoreLocator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <NotFound />,

    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "store-locator",
            element: <StoreLocator />,
          },
        ],
      },
    ],
  },
]);

export default router;
