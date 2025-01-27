import { useState } from "react";

function TrendingProduct() {
  let [hover, setHover] = useState(false);
  return (
    <div
      className="w-[424px] h-[204px] flexcenter gap-[40px] bg-gray-30 "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="bg-mygra w-[40%] h-[170px] relative pointer">
        <img
          src="https://cellmart.pk/wp-content/uploads/2024/10/sam-s24-fe-mint-cellmart-300x300.jpg"
          alt="Error-Image"
          className="w-[100%] h-[100%] object-cover"
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

      <div className="flex flex-col gap-[8px]">
        <h2 className="text-[17.25px] text-myblack1 font-medium leading-5 pointer">
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
}

export default TrendingProduct;
