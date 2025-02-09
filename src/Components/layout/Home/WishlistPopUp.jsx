import { useDispatch, useSelector } from "react-redux";
import { isClickWishlist } from "../../Redux Toolkit/PopUpSlice";

function WishlistPopUp() {
  let clickWishlist = useSelector((state) => state.popup.wishlistpopup);
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
          <h2 className="text-[24px] font-semibold">Wishlist</h2>
          <i
            className="ri-close-large-line text-[19px] font-medium pointer"
            onClick={() => dispatch(isClickWishlist())}
          ></i>
        </div>

        <div className="flex items-center flex-col gap-[16px] mt-[20px]">
          <i className={`text-[70px] font-thin text-myblack1 bi bi-heart`}></i>
          <h4 className="text-[16px] text-myblack2">
            Your wishlist is currently empty!
          </h4>
          <h5 className="text-myblack text-[14px] text-center">
            Save your favorite items and view them here at any time.
          </h5>
          <button className="button">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}

export default WishlistPopUp;
