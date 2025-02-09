import { useDispatch, useSelector } from "react-redux";
import { isClickCart } from "../../Redux Toolkit/PopUpSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const CustomNextArrow = ({ onClick, ishover }) => {
  return (
    <button onClick={onClick}>
      <i
        className={`ri-arrow-right-s-line arrowright  ${
          ishover ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      ></i>
    </button>
  );
};
const CustomPrevArrow = ({ onClick, ishover }) => {
  return (
    <button onClick={onClick}>
      <i
        className={`ri-arrow-left-s-line arrowleft ${
          ishover ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      ></i>
    </button>
  );
};

function CartPopUp() {
  let [hover, setHover] = useState(null);
  let [ishover, setIsHover] = useState(false);
  let clickCart = useSelector((state) => state.popup.cartpopup);
  let dispatch = useDispatch();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow ishover={ishover} />,
    prevArrow: <CustomPrevArrow ishover={ishover} />,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="h-[100vh] w-[100%] bg-pink-00 absolute z-40 top-0 left-0 bottom-0 right-0 flex">
      <div
        className={`w-[100%] h-full bg-black/75 ${
          clickCart ? "animate-slide-left" : "animate-slide-left-reverse"
        }`}
        onClick={() => dispatch(isClickCart())}
      ></div>

      <div
        className={`w-[35%] h-full bg-white p-[27px] absolute right-[0] ${
          clickCart ? "animate-slide-right" : "animate-slide-right-reverse"
        }`}
      >
        <div className="flexbox">
          <h2 className="text-[24px] font-semibold">Shopping cart</h2>
          <i
            className="ri-close-large-line text-[19px] font-medium pointer"
            onClick={() => dispatch(isClickCart())}
          ></i>
        </div>

        {/* <div className="flex items-center flex-col gap-[16px] mt-[20px]">
          <i
            className={`text-[70px] font-thin text-myblack1 bi bi-cart-plus`}
          ></i>
          <h4 className="text-[16px] text-myblack2">
            Your shopping cart is currently empty!
          </h4>
          <h5 className="text-myblack text-[14px] text-center">
            Explore our wide range of products and add items to your cart to
            proceed with your purchase.
          </h5>
          <button className="button">Continue Shopping</button>
        </div> */}

        <div className="mt-[20px] flex flex-col gap-[15px]">
          <div
            className="w-[100%] h-[300px]"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <Slider {...settings}>
              <img
                src="https://cellmart.pk/wp-content/uploads/2024/10/sam-s24-fe-blue-cellmart.jpg"
                alt="Error-Image"
                className="object-cover w-[50%] h-[100%]"
              />
              <img
                src="https://cellmart.pk/wp-content/uploads/2024/10/sam-s24-fe-mint-cellmart.jpg"
                alt="Error-Image"
                className="object-cover w-[50%] h-[100%]"
              />
            </Slider>
          </div>
          <h2 className="text-[24px] text-myblack1 font-medium leading-5 pointer">
            Samsung Galaxy S24 FE 256GB
          </h2>
          <div>
            <i className="ri-star-fill fivestar"></i>
            <i className="ri-star-fill fivestar"></i>
            <i className="ri-star-fill fivestar"></i>
            <i className="ri-star-fill fivestar"></i>
            <i className="ri-star-fill fivestar"></i>
          </div>
          <div className="flex items-center gap-[10px]">
            <span className="text-[18.9px] text-mygray1 font-normal text-decoration: line-through">
              ₨ 220,000
            </span>
            <span className="text-[21px] text-myblack1 font-normal">
              ₨ 205,990
            </span>
          </div>
          <h5 className="text-[14px] text-myblack1 w-[50%] text-center m-auto leading-[26px] font-medium">
            1 Year Official Warranty, Non-Active PTA Approved
          </h5>
          <ul className="space-y-[7px] list-disc ml-[20px]">
            <li className="text-[15px] text-myblack">6.7 inches Dynamic AMOLED 2X Display</li>
            <li className="text-[15px] text-myblack">Octa-core Exynos 2400e (4 nm)</li>
            <li className="text-[15px] text-myblack">256GB Storage, 8GB Ram</li>
            <li className="text-[15px] text-myblack">50MP/10MP Cameras</li>
            <li className="text-[15px] text-myblack">4700 mAh battery</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartPopUp;
