import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Menu = lazy(() => import("../pages/Menu"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Reservation = lazy(() => import("../pages/Reservation"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Cart = lazy(() => import("../pages/Cart"));



const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/menu", element: <Menu /> },
    { path: "/menu/:category", element: <Menu /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/reservation", element: <Reservation /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/cart", element: <Cart /> },
];

export default routes;
