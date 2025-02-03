import TrendingProduct from "./TrendingProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const CustomNextArrow = ({ onClick, hover }) => {
  return (
    <button onClick={onClick}>
      <i
        className={`ri-arrow-right-s-line arrowright  ${
          hover ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      ></i>
    </button>
  );
};
const CustomPrevArrow = ({ onClick, hover }) => {
  return (
    <button onClick={onClick}>
      <i
        className={`ri-arrow-left-s-line arrowleft ${
          hover ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      ></i>
    </button>
  );
};

function SliderCarousel() {
  let [hover, setHover] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    rows: 2,
    nextArrow: <CustomNextArrow hover={hover} />,
    prevArrow: <CustomPrevArrow hover={hover} />,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const products = [
    {
      id: 1,
      title: "Samsung Galaxy S24 FE",
      price: 205990,
      image:
        "https://cellmart.pk/wp-content/uploads/2024/10/sam-s24-fe-mint-cellmart-300x300.jpg",
    },
    {
      id: 2,
      title: "iPhone 14 Pro Max",
      price: 480000,
      image: "https://example.com/iphone.jpg",
    },
    {
      id: 3,
      title: "Xiaomi Redmi Note 12",
      price: 75000,
      image: "https://example.com/redmi.jpg",
    },
    {
      id: 4,
      title: "OnePlus 11",
      price: 140000,
      image: "https://example.com/oneplus.jpg",
    },
    {
      id: 5,
      title: "OnePlus 11",
      price: 140000,
      image: "https://example.com/oneplus.jpg",
    },
    {
      id: 6,
      title: "OnePlus 11",
      price: 140000,
      image: "https://example.com/oneplus.jpg",
    },
    {
      id: 7,
      title: "OnePlus 11",
      price: 140000,
      image: "https://example.com/oneplus.jpg",
    },
    {
      id: 8,
      title: "OnePlus 11",
      price: 140000,
      image: "https://example.com/oneplus.jpg",
    },
  ];
  return (
    <div
      className="bg-mygra1 w-[100%] h-[fit]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Slider {...settings}>
        {products.map((data) => {
          return <TrendingProduct key={data.id} />;
        })}
      </Slider>
    </div>
  );
}

export default SliderCarousel;
