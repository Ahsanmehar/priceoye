import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] max-l:px-[20px] gap-16">
      <div className=" bg-white text-nowrap	flexcenter">Browse Categories</div>
      <div className="flex items-center w-full gap-16 py-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "isActive navbar text-sm" : "navbarhover navbar text-sm"
          }
        >
          {" "}
          مَاشَااللہُ لَا قُوَّہَ اِلَّا بِاللہِ
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "isActive navbar text-sm 	" : "navbarhover navbar text-sm"
          }
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            isActive ? "isActive navbar text-sm " : "navbarhover navbar text-sm"
          }
        >
          {" "}
          About Us
        </NavLink>
        <NavLink
          to="/storelocator"
          className={({ isActive }) =>
            isActive ? "isActive navbar text-sm " : "navbarhover navbar text-sm"
          }
        >
          {" "}
          Store Locator
        </NavLink>
        <NavLink
          to="/paymentshipping"
          className={({ isActive }) =>
            isActive ? "isActive navbar text-sm " : "navbarhover navbar text-sm"
          }
        >
          {" "}
          Payment & Shipping
        </NavLink>
        <NavLink
          to="/contactus"
          className={({ isActive }) =>
            isActive ? "isActive navbar text-sm " : "navbarhover navbar text-sm"
          }
        >
          {" "}
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
