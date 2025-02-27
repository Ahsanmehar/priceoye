import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quickview } from "../Redux Toolkit/ProductSlice";
import { isClickQuickView } from "../Redux Toolkit/PopUpSlice";
import { addtowishlist, removewishlist } from "../Redux Toolkit/WishlistSlice";

function TrendingProduct() {
  let [hover, setHover] = useState(null);
  let trending = useSelector((state) => state.products.trending);
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

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="bg-mygra1 w-max h-[fit] flex gap-[50px]">
        {trending.map((data, index) => {
          return (
            <div
              key={index}
              className="w-[424px] h-[204px] flexcenter gap-[40px] max-l4:gap-[20px]"
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
            >
              <div className="w-[40%] h-[170px] relative pointer">
                <img
                  src={data.images[0]}
                  alt="Error-Image"
                  className="w-[100%] h-[100%] object-cover"
                />
                <div className="absolute top-[5px] right-[-9px] flex flex-col gap-[15px]">
                  {/* Heart Icon */}
                  <div
                    className="relative group inline-block"
                    onClick={() => addwishlist(data)}
                  >
                    <i
                      className={`ri-heart-line heart hearthover ${
                        addtowishlistdata.some((item) => item.id == data.id)
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

              <div className="flex flex-col gap-[8px]">
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
      </div>
    </div>
  );
}

export default TrendingProduct;
