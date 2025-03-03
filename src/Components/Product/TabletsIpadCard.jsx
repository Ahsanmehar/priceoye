import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { isClickQuickView } from "../Redux Toolkit/PopUpSlice";
import { quickview } from "../Redux Toolkit/ProductSlice";
import { addtowishlist, removewishlist } from "../Redux Toolkit/WishlistSlice";

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

function TabletIpadCard() {
  let [hover, setHover] = useState(null);
  let [ishover, setIsHover] = useState(false);
  let tablet = useSelector((e) => e.products.tablet);
  let dispatch = useDispatch();
  let addtowishlistdata = useSelector(
    (state) => state.wishlist.addtowishlistdata
  );

  function addwishlist(data) {
    const index = addtowishlistdata.findIndex((item) => item.id === data.id);

    if (index !== -1) {
      dispatch(removewishlist(index));
    } else {
      dispatch(addtowishlist(data));
    }
  }

  function handleClick(data) {
    dispatch(isClickQuickView());
    dispatch(quickview(data));
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow ishover={ishover} />,
    prevArrow: <CustomPrevArrow ishover={ishover} />,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2.7,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div
      className=" w-full h-fit"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Slider {...settings}>
        {tablet.map((data, index) => {
          return (
            <div
              key={index}
              className="w-[210px] h-fit flex flex-col gap-[19px] px-4"
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
            >
              <div className="bg-mygra w-[100%] h-[214px] relative pointer">
                <img
                  src={data.images[0]}
                  alt="Error-Image"
                  className="w-[214px] h-[100%] object-cover"
                />
                <div className="absolute top-[5px] right-[-10px] flex flex-col gap-[15px]">
                  {/* Heart Icon */}
                  <div
                    className="relative group inline-block"
                    onClick={() => addwishlist(data)}
                  >
                    <i
                      className={`ri-heart-line heart hearthover ${
                        addtowishlistdata.some((item) => item?.id == data?.id)
                          ? "bi bi-heart-fill text-red-100"
                          : "ri-heart-line"
                      }`}
                    ></i>
                    <span className="hearttooltip">Add to Wishlist</span>
                  </div>

                  {/* Eye Icon */}
                  <div
                    className="relative group inline-block"
                    onClick={() => handleClick(data)}
                  >
                    <i
                      className={`ri-eye-line heart transition-transform duration-300 hearthover ${
                        hover == index
                          ? "translate-x-0 opacity-100 delay-100"
                          : "translate-x-4 opacity-0"
                      }`}
                    ></i>
                    <span className="hearttooltip">Quick View</span>
                  </div>
                  {/* Plus Icon */}
                  <div
                    className="relative group inline-block"
                    onClick={() => handleClick(data)}
                  >
                    <i
                      className={`ri-add-line heart transition-transform duration-300 hearthover ${
                        hover == index
                          ? "translate-x-0 opacity-100 delay-200"
                          : "translate-x-4 opacity-0"
                      }`}
                    ></i>
                    <span className="hearttooltip">Select Options</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[4px] mt-[18px]">
                <h2 className="text-[17.25px] max-2:text-[15px] text-myblack1 font-medium leading-5 pointer">
                  {data.name}
                </h2>
                <div>
                  <i className="ri-star-fill fivestar"></i>
                  <i className="ri-star-fill fivestar"></i>
                  <i className="ri-star-fill fivestar"></i>
                  <i className="ri-star-fill fivestar"></i>
                  <i className="ri-star-fill fivestar"></i>
                </div>
                <div className="flex items-center gap-[10px]">
                  <span className="text-[15px] max-2:text-[13px] text-mygray1 font-normal text-decoration: line-through">
                    {`Rs ${data.oldPrice}`}
                  </span>
                  <span className="text-[16.5px] max-2:text-[15px] text-myblack1 font-normal">
                    {`Rs ${data.newPrice}`}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default TabletIpadCard;
