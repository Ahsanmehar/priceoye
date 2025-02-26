import DiscountProduct from "../../Common/DiscountProduct";

function Discount() {
  return (
    <div className="w-[100%] gap-[50px] max-2:gap-[30px] px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] max-l:px-[20px] max-3:px-[8px] flex flex-col">
      <div className="w-[100%] relative">
        <img
          src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/11/banner-7.jpg"
          alt="Error-Image"
          className="w-[100%] h-[100%] max-l4:min-h-[200px] object-cover rounded-[20px] "
        />
        <div className="absolute top-[50%] translate-y-[-50%] left-[5%] flex flex-col gap-[25px] max-l:gap-[17px] max-xl3:gap-[15px]">
          <p className="text-[16px] max-l:text-[14px] max-xl3:text-[13px]">EXCLUSIVE HEADPHONE</p>
          <h1 className="text-[52px] max-l:text-[30px] max-xl3:text-[20px] max-2:text-[16px] w-[60%] max-l:w-[80%] leading-[60px] max-l:leading-[40px] max-xl3:leading-[28px] max-2:leading-[22px] font-semibold">
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
