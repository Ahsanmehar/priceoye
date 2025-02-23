import { isClickCart, isClickQuickView } from "../../Redux Toolkit/PopUpSlice";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { addtocart } from "../../Redux Toolkit/ProductSlice";
import { increasecount, decreasecount } from "../../Redux Toolkit/ProductSlice";

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

function QuikViewPopUp() {
  let [ishover, setIsHover] = useState(false);
  let QuickView = useSelector((state) => state.popup.quikviewpopup);
  let quickviewdata = useSelector((state) => state.products.quickviewdata);
  let dispatch = useDispatch();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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

  useEffect(() => {
    if (QuickView) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [QuickView]);

  let productcount = useSelector((state) => state.products.productcount) || {};
  let productid = quickviewdata?.id;
  let count = productcount[productid] || 1;
  // console.log("id:", productid, "count:", count);

  function handleClick(quickviewdata) {
    let updateDate = { ...quickviewdata, count };
    dispatch(addtocart(updateDate));
    dispatch(isClickQuickView());
    dispatch(isClickCart());
  }

  function increment() {
    dispatch(increasecount({ productid }));
  }
  function decrement() {
    dispatch(decreasecount({ productid }));
  }
  return (
    <div>
      {QuickView ? (
        <div className="w-[100%] bg-black/75 fixed z-40 top-0 left-0 bottom-0 right-0 flexcenter">
          <div className="w-[60%] max-xxxl:w-[65%] max-xl:w-[70%] h-fit bg-white px-[22px] py-[32px] flex justify-between items-center animate-my-anim">
            <div
              className="w-[50%] h-[100%] cursor-grab"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <Slider {...settings}>
                <img
                  src={quickviewdata.images[0]}
                  alt="Error-Image"
                  className="object-cover w-[50%] h-[100%]"
                />
                <img
                  src={quickviewdata.images[1]}
                  alt="Error-Image"
                  className="object-cover w-[50%] h-[100%]"
                />
              </Slider>
            </div>
            <div className="w-[47%] h-[100%] bg-pink-20 flex flex-col gap-[10px]">
              <i
                className="ri-close-large-line text-[19px] font-medium pointer ml-auto text-myblue"
                onClick={() => dispatch(isClickQuickView())}
              ></i>
              <h2 className="text-[24px] text-myblack1 font-medium leading-[35px] pointer">
                {quickviewdata.name}
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
                  {`Rs ${quickviewdata.oldPrice}`}
                </span>
                <span className="text-[21px] text-myblack1 font-normal">
                  {`Rs ${quickviewdata.newPrice}`}
                </span>
              </div>
              <h5 className="text-[14px] text-myblack1 w-[50%] text-center mx-auto leading-[26px] font-medium my-[17px]">
                {quickviewdata.ptaApproval}
              </h5>
              <ul className="space-y-[7px] list-disc ml-[20px] marker:text-myblue">
                <li className="text-[15px] text-myblack">
                  {quickviewdata.size}
                </li>
                <li className="text-[15px] text-myblack">
                  {quickviewdata.model}
                </li>
                <li className="text-[15px] text-myblack">
                  {quickviewdata.spec}
                </li>
                <li className="text-[15px] text-myblack">
                  {quickviewdata.camera}
                </li>
                <li className="text-[15px] text-myblack">
                  {quickviewdata.battery}
                </li>
              </ul>
              <div className="flex flex-col gap-[15px] my-[15px] w-fit">
                <div className="flex items-center gap-[15px]">
                  <div className="w-[130px] h-[44px] border border-myblue rounded-full flex items-center justify-between overflow-hidden">
                    <i
                      className="ri-subtract-line w-10 h-10 flex items-center justify-center cursor-pointer text-myblue text-xs font-semibold hover:bg-[#eef1f6]"
                      onClick={decrement}
                    ></i>
                    <span className="text-[#4e5562] text-[13px]">{count}</span>
                    <i
                      className="ri-add-line w-10 h-10 flex items-center justify-center cursor-pointer text-myblue text-xs font-semibold hover:bg-[#eef1f6]"
                      onClick={increment}
                    ></i>
                  </div>
                  <button
                    class="px-[35px] py-[12px] border-none outline-none cursor-pointer rounded-full text-[16px] text-white bg-myblue whitespace-nowrap"
                    onClick={() => handleClick(quickviewdata)}
                  >
                    ADD TO CART
                  </button>
                  <i className="bi bi-heart w-[47px] h-[47px] flexcenter text-[21px] rounded-[50%] pointer border-[1px] border-myblue text-myblack"></i>
                </div>
                <div className="flex items-center gap-[15px]">
                  <button className="bg-myblue w-full py-[10px] rounded-[50px] text-white">
                    BUY IT NOW
                  </button>
                </div>
              </div>
              <button className="no-underline text-myblack text-[15px] flexcenter gap-[10px] w-fit">
                View full details
                <i className="bi bi-arrow-right text-lg text-myblue"></i>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default QuikViewPopUp;
