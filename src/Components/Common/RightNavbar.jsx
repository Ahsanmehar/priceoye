import { useDispatch, useSelector } from "react-redux";
import { isRightNavbar } from "../Redux Toolkit/PopUpSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RightNavbar() {
  let dispatch = useDispatch();
  let rightnavbar = useSelector((state) => state.popup.rightnavbar);
  let navigate = useNavigate();

  useEffect(() => {
    {
      rightnavbar 
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "unset");
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [rightnavbar]);

  return (
    <>
      {rightnavbar && (
        <div className="h-[100vh] w-[100%] fixed z-50 top-0 left-0 bottom-0 right-0 flex hidden max-l:block">
          <div
            className="w-[100%] h-full bg-black/75"
            onClick={() => dispatch(isRightNavbar())}
          >
            <div
              className={`w-[29%] max-xl3:w-[40%] max-1:w-[50%] max-2:w-[60%] max-3:w-[70%] h-full bg-white py-[20px] px-[17px] fixed left-0  ${
                rightnavbar
                  ? "animate-slide-left"
                  : "animate-slide-left-reverse"
              }`}
            >
              <div className="flexbox">
                <div
                  className="w-[130px] max-3:w-[110px] bg-myblue py-[10px] px-[14px] rounded-[10px]"
                  onClick={() => navigate("/")}
                >
                  <img
                    src="https://static.priceoye.pk/images/logo.svg"
                    alt="Error-Image"
                    className="object-cover pointer"
                  />
                </div>
                <i
                  className="ri-close-large-line text-[19px] font-medium pointer text-myblue"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(isRightNavbar());
                  }}
                ></i>
              </div>

              <div className="mt-[40px] max-3:mt-[30px]">
                <div className="text-nowrap max-3:text-[15px] flex flex-col mb-[30px] max-3:mb-[20px]">
                  Browse Categories
                </div>
                <div className="flex flex-col w-full gap-[30px] max-3:gap-[20px]">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "isActive rightnavbar text-sm"
                        : "navbarhover rightnavbar text-sm"
                    }
                  >
                    مَاشَااللہُ لَا قُوَّہَ اِلَّا بِاللہِ
                  </NavLink>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "isActive rightnavbar text-sm"
                        : "navbarhover rightnavbar text-sm"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                      isActive
                        ? "isActive rightnavbar text-sm"
                        : "navbarhover rightnavbar text-sm"
                    }
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to="/storelocator"
                    className={({ isActive }) =>
                      isActive
                        ? "isActive rightnavbar text-sm"
                        : "navbarhover rightnavbar text-sm"
                    }
                  >
                    Store Locator
                  </NavLink>
                  <NavLink
                    to="/paymentshipping"
                    className={({ isActive }) =>
                      isActive
                        ? "isActive rightnavbar text-sm"
                        : "navbarhover rightnavbar text-sm"
                    }
                  >
                    Payment & Shipping
                  </NavLink>
                  <NavLink
                    to="/contactus"
                    className={({ isActive }) =>
                      isActive
                        ? "isActive rightnavbar text-sm"
                        : "navbarhover rightnavbar text-sm"
                    }
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RightNavbar;
