import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CartPopUp from "./CartPopUp";
import WishlistPopUp from "./WishlistPopUp";
import { useDispatch, useSelector } from "react-redux";
import { isClickCart, isRightNavbar } from "../../Redux Toolkit/PopUpSlice";
import { isClickWishlist } from "../../Redux Toolkit/PopUpSlice";
import { selectTotalCount } from "../../Redux Toolkit/ProductSlice";
import { selectWislistCount } from "../../Redux Toolkit/WishlistSlice";

function Header() {
  let dispatch = useDispatch();
  let clickCart = useSelector((state) => state.popup.cartpopup);
  let clickWishlist = useSelector((state) => state.popup.wishlistpopup);
  let totalCount = useSelector(selectTotalCount);
  let totalWishlistCount = useSelector(selectWislistCount);

  const navigate = useNavigate();

  useEffect(() => {
    if (clickCart || clickWishlist) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [clickCart, clickWishlist]);

  return (
    <div className="bg-myblue w-full flexbox relative py-3 max-3:py-[7px] px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] max-l:px-[20px] max-3:px-[13px] sticky top-[0] left-[0] right-[0] z-30">
      <div className="flex hidden max-l:block">
        <i
          className="bi bi-list text-[30px] max-3:text-[25px] text-white font-thin mr-[15px] max-3:mr-[10px] cursor-pointer"
          onClick={() => dispatch(isRightNavbar())}
        ></i>
        <i className="bi bi-search text-[20px] max-3:text-[17px] text-white font-thin cursor-pointer"></i>
      </div>
      <img
        src="https://static.priceoye.pk/images/logo.svg"
        alt="Error Image"
        className="w-32 h-12 max-3:w-[110px]"
        // onClick={navigate("/")}
      />

      <form className="position w-96 max-l:hidden">
        <input
          type="text"
          placeholder="I'm shopping for ..."
          className="w-full relative px-3 py-2.5 focus:outline-none rounded-lg placeholder:text-sm caret-myblack"
        />
        <i className="ri-search-line absolute right-2 top-1/2 -translate-y-1/2 text-myblue text-xl pointer"></i>
      </form>
      <div className="flex gap-x-3 max-3:gap-[8px]">
        <i className="ri-sun-line icons"></i>
        <i
          className="ri-user-line icons"
          onClick={() => navigate("/signin")}
        ></i>
        <i
          className="ri-shopping-cart-line icons"
          onClick={() => dispatch(isClickCart())}
        >
          <span className="badge">{totalCount}</span>
        </i>
        <i
          className="ri-heart-3-line icons"
          onClick={() => dispatch(isClickWishlist())}
        >
          <span className="badge">{totalWishlistCount}</span>
        </i>
      </div>
      {clickCart ? <CartPopUp /> : ""}
      {clickWishlist ? <WishlistPopUp /> : ""}
    </div>
  );
}

export default Header;
