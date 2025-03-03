import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../../Pages/Home";
import AboutUs from "../../../Pages/AboutUs";
import StoreLocator from "../../../Pages/StoreLocator";
import PaymentShipping from "../../../Pages/PaymentShipping";
import ContactUs from "../../../Pages/ContactUs";
import Header from "../Home/Header";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import SignIn from "../Form/SignIn";
import SignUp from "../Form/SignUp";
import ForgetPassword from "../Form/ForgotPassword";
import DeliveryData from "../Home/DeliveryData";
import BackToTop from "../../Common/BackToTop";
import WhattsappButton from "../../Common/WhattsappButton";
import RightNavbar from "../../Common/RightNavbar";
import ProductAddRemove from "../../Common/ProductAddRemove";

let router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Navbar />
        <Home />
        <DeliveryData />
        <Footer />
        <BackToTop />
        <WhattsappButton />
        <RightNavbar />
        <ProductAddRemove />
      </div>
    ),
  },
  {
    path: "/aboutus",
    element: (
      <div>
        <Header />
        <Navbar />
        <AboutUs />
        <DeliveryData />
        <Footer />
        <BackToTop />
        <WhattsappButton />
        <RightNavbar />
        <ProductAddRemove />
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
        <DeliveryData />
        <Footer />
        <BackToTop />
        <WhattsappButton />
        <RightNavbar />
        <ProductAddRemove />
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
        <DeliveryData />
        <Footer />
        <BackToTop />
        <WhattsappButton />
        <RightNavbar />
        <ProductAddRemove />
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
        <DeliveryData />
        <Footer />
        <BackToTop />
        <WhattsappButton />
        <RightNavbar />
        <ProductAddRemove />
      </div>
    ),
  },
  {
    path: "/signin",
    element: (
      <div>
        <SignIn />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <SignUp />
      </div>
    ),
  },
  {
    path: "/forgotpassword",
    element: (
      <div>
        <ForgetPassword />
      </div>
    ),
  },
]);

function Routers() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default Routers;
