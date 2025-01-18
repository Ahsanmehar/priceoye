import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-myblue w-[100%] h-[51vh] px-28 py-[43px] flex flex-col justify-between text-white">
      <div className="w-[100%] h-[80%] flexbox">
        <div className="w-[20%] h-[100%]">
          <img
            src="https://static.priceoye.pk//icons/po-footer-logo-white.svg"
            alt="Error-Image"
            className="w-[190px] h-[74px] mb-[10px]"
          />

          <div className="flex flex-col gap-[6px]">
            <h5 className="text-[17px] flex justify-center gap-[10px]">
              <i class="ri-map-pin-line text-[30px]"></i>Purana Kahana,
              Ferozepur Road, Lahore, Pakistan
            </h5>
            <h5 className="text-[17px] flex items-center gap-[10px]">
              <i class="ri-phone-fill text-[30px]"></i>+92 309 7230656
            </h5>
            <h5 className="text-[17px] flex items-center gap-[10px]">
              <i class="ri-mail-line text-[30px]"></i>Ahsanmeharj@gmail.com
            </h5>
            <div className="flexcenter gap-[17px]">
              <i class="ri-facebook-box-line text-[35px] pointer"></i>
              <i class="ri-instagram-line text-[35px] pointer"></i>
              <i class="ri-telegram-2-line text-[35px] pointer"></i>
              <i class="ri-whatsapp-line text-[35px] pointer"></i>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-[100%] flex flex-col gap-[20px]">
          <h1 className="text-[28px] font-medium font-semibold">
            Stay in touch with us
          </h1>
          <h5 className="text-[16px] font-medium">
            Receive the latest update about our products.
          </h5>
          <form className="w-[100%]">
            <input
              type="email"
              placeholder="Your email"
              className="py-[18px] px-[18px] w-[100%] rounded-[10px] border-[none] text-[#4e5562] placeholder-myblack mb-[10px] focus:outline-none"
            />
            <button className="emailbutton">
              Subscribe
              <i className="ri-arrow-right-line"></i>
            </button>
          </form>
        </div>
        <div className="w-[15%] h-[100%]">
          <h2 className="text-[28px] font-medium font-semibold mb-[19px]">
            Categories
          </h2>
          <div className="flex flex-col gap-[10px]">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? " isActive2" : "navbarhover2"
              }
            >
              Smart Phones
            </NavLink>
            <NavLink
              to={"/aboutus"}
              className={({ isActive }) =>
                isActive ? "isActive2" : "navbarhover2"
              }
            >
              Tablets & iPads
            </NavLink>
            <NavLink
              to={"/storelocator"}
              className={({ isActive }) =>
                isActive ? "isActive2" : "navbarhover2"
              }
            >
              Mobile Accessories
            </NavLink>
            <NavLink
              to={"/paymentshipping"}
              className={({ isActive }) =>
                isActive ? "isActive2" : "navbarhover2"
              }
            >
              New Arrivals
            </NavLink>
          </div>
        </div>
        <div className="w-[19%] h-[100%]">
          <h2 className="text-[28px] font-medium font-semibold mb-[19px]">
            Customer service
          </h2>
          <div className="flex flex-col gap-[10px]">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? " isActive2" : "navbarhover2"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/aboutus"}
              className={({ isActive }) =>
                isActive ? "isActive2" : "navbarhover2"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to={"/storelocator"}
              className={({ isActive }) =>
                isActive ? "isActive2" : "navbarhover2"
              }
            >
              Store Locator
            </NavLink>
            <NavLink
              to={"/paymentshipping"}
              className={({ isActive }) =>
                isActive ? "isActive2" : "navbarhover2"
              }
            >
              Payment & Shipping
            </NavLink>
            <NavLink
              to={"/contactus"}
              className={({ isActive }) =>
                isActive ? "isActive2" : "navbarhover2"
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[15%] flexcenter text-[16px]">
        <h2>© 2025 PriceOye - All Rights Reserved.</h2>
      </div>
    </div>
  );
}

export default Footer;
