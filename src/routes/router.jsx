import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/contact";
import NotFound from "../pages/Error/NotFound";
import StoreLocator from "../pages/StoreLocator";
import CustomerSupport from "../pages/CustomerSupport";
import ProductCollection from "../pages/ProductCollection";
import Product from "../pages/Product";
import Blog from "../pages/Blog";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";

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
          {
            path: "customer-support",
            element: <CustomerSupport />,
          },
          {
            path: "product-collection",
            element: <ProductCollection />,
          },
          {
            path: "product",
            element: <Product />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
          {
            path: "blog",
            element: <Blog />,
          },
        ],
      },
    ],
  },
]);

export default router;
