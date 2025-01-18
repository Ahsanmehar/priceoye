import DiscountProduct from "../../Common/DiscountProduct";

function Discount() {
  return (
    <div className="w-[100%] h-[90vh] px-28 flex flex-col justify-between">
      <div className="w-[100%] h-[40vh] relative">
        <img
          src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/11/banner-7.jpg"
          alt="Error-Image"
          className="w-[100%] h-[100%] object-cover rounded-[20px] "
        />
        <div className="absolute top-[50%] translate-y-[-50%] left-[5%] flex flex-col gap-[25px]">
          <p className="text-[16px]">EXCLUSIVE HEADPHONE</p>
          <h1 className="text-[52px] w-[60%] leading-[60px] font-semibold">
            Discounts 50% On All Headphone
          </h1>
          <button className="button">Shop Now</button>
        </div>
      </div>
      <div className="w-[100%] h-[43vh] flex gap-[30px]">
        <DiscountProduct />
      </div>
    </div>
  );
}

export default Discount;
