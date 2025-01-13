import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../../Pages/Home";
import AboutUs from "../../../Pages/AboutUs";
import StoreLocator from "../../../Pages/StoreLocator";
import PaymentShipping from "../../../Pages/PaymentShipping";
import ContactUs from "../../../Pages/ContactUs";
import Header from "../Home/Header";
import Navbar from "../Home/Navbar";

let router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {" "}
        <Header /> <Navbar /> <Home />{" "}
      </div>
    ),
  },
  {
    path: "/aboutus",
    element: (
      <div>
        {" "}
        <Header />
        <Navbar />
        <AboutUs />
      </div>
    ),
  },
  {
    path: "/storelocator",
    element: (
      <div>
        <Header />
        <Navbar />
        <StoreLocator />
      </div>
    ),
  },
  {
    path: "/paymentshipping",
    element: (
      <div>
        <Header />
        <Navbar />
        <PaymentShipping />
      </div>
    ),
  },
  {
    path: "/contactus",
    element: (
      <div>
        <Header />
        <Navbar />
        <ContactUs />
      </div>
    ),
  },
]);

function Routers() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default Routers;
