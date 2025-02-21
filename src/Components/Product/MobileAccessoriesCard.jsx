import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isClickQuickView } from "../Redux Toolkit/PopUpSlice";
import { quickview } from "../Redux Toolkit/ProductSlice";

function MobibleAccessoriesCard() {
  let [hover, setHover] = useState(null);
  let accessories = useSelector((e) => e.products.accessories);
  let dispatch = useDispatch();

  function handleClick(data) {
    dispatch(isClickQuickView());
    dispatch(quickview(data));
  }
  return (
    <div className="bg-mygra1 w-full h-fit px-5 flexbox">
      {accessories.map((data, index) => {
        return (
          <div
            className="w-[234px] h-fit flex flex-col gap-[19px] px-4"
            key={data.id}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <div className="bg-mygra w-[100%] h-[214px] relative pointer">
              <img
                src={data.images[0]}
                alt="Error-Image"
                className="w-[214px] h-[100%] object-cover"
              />
              <div className="absolute top-[5px] right-[-17px] flex flex-col gap-[15px]">
                {/* Heart Icon */}
                <div className="relative group inline-block">
                  <i className="ri-heart-line heart hearthover"></i>
                  <span className="hearttooltip">Add to Wishlist</span>
                </div>

                {/* Eye Icon */}
                <div className="relative group inline-block">
                  <i
                    className={`ri-eye-line heart transition-transform duration-300 hearthover ${
                      hover == index
                        ? "translate-x-0 opacity-100 delay-100"
                        : "translate-x-4 opacity-0"
                    }`}
                    onClick={() => handleClick(data)}
                  ></i>
                  <span className="hearttooltip">Quick View</span>
                </div>
                {/* Plus Icon */}
                <div className="relative group inline-block">
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
              <h2 className="text-[17.25px] text-myblack1 font-medium leading-5 pointer">
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
                <span className="text-[15px] text-mygray1 font-normal text-decoration: line-through">
                  {`Rs ${data.oldPrice}`}
                </span>
                <span className="text-[16.5px] text-myblack1 font-normal">
                  {`Rs ${data.newPrice}`}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MobibleAccessoriesCard;
