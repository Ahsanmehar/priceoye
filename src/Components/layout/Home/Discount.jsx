import DiscountProduct from "../../Common/DiscountProduct";

function Discount() {
  return (
    <div className="w-[100%] gap-[50px] px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] max-l:px-[20px] flex flex-col">
      <div className="w-[100%] relative">
        <img
          src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/11/banner-7.jpg"
          alt="Error-Image"
          className="w-[100%] h-[100%] object-cover rounded-[20px] "
        />
        <div className="absolute top-[50%] translate-y-[-50%] left-[5%] flex flex-col gap-[25px] max-l:gap-[17px]">
          <p className="text-[16px] max-l:text-[14px]">EXCLUSIVE HEADPHONE</p>
          <h1 className="text-[52px] max-l:text-[30px] w-[60%] max-l:w-[80%] leading-[60px] max-l:leading-[40px] font-semibold">
            Discounts 50% On All Headphone
          </h1>
          <button className="button">Shop Now</button>
        </div>
      </div>
      <div className="w-[100%] flex max-xxl2:flex-wrap max-xxl2:justify-between gap-[30px] max-xl:gap-[20px]">
        <DiscountProduct />
      </div>
    </div>
  );
}

export default Discount;
