import { useDispatch, useSelector } from "react-redux";
import {
  isClickQuickView,
  isClickWishlist,
} from "../../Redux Toolkit/PopUpSlice";
import { removewishlist } from "../../Redux Toolkit/WishlistSlice";
import { quickview } from "../../Redux Toolkit/ProductSlice";

function WishlistPopUp() {
  let clickWishlist = useSelector((state) => state.popup.wishlistpopup);
  let addtowishlistdata = useSelector(
    (state) => state.wishlist.addtowishlistdata
  );

  function handleClick(data) {
    dispatch(isClickWishlist());
    dispatch(isClickQuickView());
    dispatch(quickview(data));
  }

  let dispatch = useDispatch();
  return (
    <div className="h-[100vh] w-[100%] bg-pink-00 absolute z-40 top-0 left-0 bottom-0 right-0 flex">
      <div
        className={`w-[100%] h-full bg-black/75 ${
          clickWishlist ? "animate-slide-left" : "animate-slide-left-reverse"
        }`}
        onClick={() => dispatch(isClickWishlist())}
      ></div>

      <div
        className={`w-[29%] h-full bg-white p-[27px] absolute right-[0] ${
          clickWishlist ? "animate-slide-right" : "animate-slide-right-reverse"
        }`}
      >
        <div className="flexbox">
          <h2 className="text-[24px] text-myblue font-medium">Wishlist</h2>
          <i
            className="ri-close-large-line text-[19px] text-myblue font-medium pointer"
            onClick={() => dispatch(isClickWishlist())}
          ></i>
        </div>

        {addtowishlistdata == 0 ? (
          <div className="flex items-center flex-col gap-[16px] mt-[20px]">
            <i
              className={`text-[70px] font-thin text-myblack1 bi bi-heart`}
            ></i>
            <h4 className="text-[16px] text-myblack2">
              Your wishlist is currently empty!
            </h4>
            <h5 className="text-myblack text-[14px] text-center">
              Save your favorite items and view them here at any time.
            </h5>
            <button className="button">Continue Shopping</button>
          </div>
        ) : (
          <>
            <div class="flex flex-col items-center mt-[28px] gap-7 h-[90%] w-full overflow-y-auto">
              {addtowishlistdata.map((data, index) => {
                return (
                  <div
                    class="flex items-center justify-between w-full gap-[10px] h-[110px]"
                    key={index}
                  >
                    <div class="w-1/4 h-full flex items-center justify-center cursor-pointer">
                      <img
                        src={data.images[0]}
                        class="w-[130px] object-cover"
                      ></img>
                    </div>
                    <div class="w-3/4 h-full">
                      <h5 class="text-sm font-medium text-myblack1 my-2 cursor-pointer">
                        {data.name}
                      </h5>
                      <h4 class="text-base text-[#181d25] mb-4">
                        {data.newPrice}
                      </h4>
                      <button
                        className="no-underline text-myblack text-[15px] flexcenter gap-[10px] w-fit"
                        onClick={() => handleClick(data)}
                      >
                        View full details
                        <i className="bi bi-arrow-right text-lg text-myblue"></i>
                      </button>
                    </div>
                    <div class="mt-5">
                      <i
                        class="ri-close-large-line text-myblue cursor-pointer text-lg font-medium"
                        onClick={() => dispatch(removewishlist(index))}
                      ></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default WishlistPopUp;
