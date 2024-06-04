import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/common/RootLayout";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

export const rootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
