// import ProductCard from "../Product/ProductCard";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useState } from "react";
// import ProductData from "../Product/ProductData";

// const CustomNextArrow = ({ onClick, hover }) => {
//   return (
//     <button onClick={onClick}>
//       <i
//         className={`ri-arrow-right-s-line arrowright  ${
//           hover ? "opacity-100" : "opacity-0"
//         } transition-opacity duration-500`}
//       ></i>
//     </button>
//   );
// };
// const CustomPrevArrow = ({ onClick, hover }) => {
//   return (
//     <button onClick={onClick}>
//       <i
//         className={`ri-arrow-left-s-line arrowleft ${
//           hover ? "opacity-100" : "opacity-0"
//         } transition-opacity duration-500`}
//       ></i>
//     </button>
//   );
// };

// function SliderCarousel({}) {
//   let [hover, setHover] = useState(false);
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     nextArrow: <CustomNextArrow hover={hover} />,
//     prevArrow: <CustomPrevArrow hover={hover} />,

//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <div
//       className="bg-mygra1 w-[100%] h-[fit]"
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       <Slider {...settings}>
//         {ProductData.smartPhones.map((product) => {
//           return <ProductCard key={product.id} product={product} />;
//         })}
//       </Slider>
//     </div>
//   );
// }

// export default SliderCarousel;


<Slider {...settings}>
        {ProductData.smartPhones.map((datas) => {
          return (
            <div
              className="w-[234px] h-[340px] flex flex-col justify-between bg-gray-30 "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className="bg-mygra w-[100%] h-[214px] relative pointer">
                <img
                  src="https://cellmart.pk/wp-content/uploads/2024/09/Apple-iPhone-16-Pro-cellmart.webp"
                  alt="Error-Image"
                  className="w-[214px] h-[100%] object-cover"
                />
                <div className="absolute top-[5px] right-[27px] flex flex-col gap-[15px]">
                  {/* Heart Icon */}
                  <div className="relative group inline-block">
                    <i className="ri-heart-line heart hearthover"></i>
                    <span className="hearttooltip">Add to Wishlist</span>
                  </div>

                  {/* Eye Icon */}
                  <div className="relative group inline-block">
                    <i
                      className={`ri-eye-line heart transition-transform duration-300 hearthover ${
                        hover
                          ? "translate-x-0 opacity-100 delay-100"
                          : "translate-x-4 opacity-0"
                      }`}
                    ></i>
                    <span className="hearttooltip">Quick View</span>
                  </div>
                  {/* Plus Icon */}
                  <div className="relative group inline-block">
                    <i
                      className={`ri-add-line heart transition-transform duration-300 hearthover ${
                        hover
                          ? "translate-x-0 opacity-100 delay-200"
                          : "translate-x-4 opacity-0"
                      }`}
                    ></i>
                    <span className="hearttooltip">Select Options</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[4px]">
                <h2 className="text-[17.25px] text-myblack1 font-medium leading-5 pointer">
                  {datas.name}
                </h2>
                <div>
                  <i className="ri-star-fill fivestar"></i>
                  <i className="ri-star-fill fivestar"></i>
                  <i className="ri-star-fill fivestar"></i>
                  <i className="ri-star-fill fivestar"></i>
                  <i className="ri-star-fill fivestar"></i>
                </div>
                <div className="flex items-center gap-[10px]">
                  <span className="text-[15px] text-mygray1 font-normal text-decoration: line-through">
                    Rs 220,000
                  </span>
                  <span className="text-[16.5px] text-myblack1 font-normal">
                    Rs 205,990
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
