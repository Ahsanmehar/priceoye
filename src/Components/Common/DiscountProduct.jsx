import BannerData from "./BannerData";

function DiscountProduct() {
  const bannerData = BannerData();
  return (
    <>
      {bannerData.map((data, index) => {
        return (
          <div
            key={index}
            className="w-[400px] max-xl3:w-[100%] max-xl3:h-[650px] max-2:h-[400px] relative rounded-[10px] overflow-hidden"
          >
            <img
              src={data.image}
              alt="Error-Image"
              className="w-[100%] h-[100%] object-fit"
            />

            <div className="flex flex-col gap-[15px] max-l:gap-[5px] max-xxl2:gap-[13px] max-2:gap-[11px] absolute top-[20px] left-[20px]">
              <span className="text-[12px] w-fit bg-[#dd283] bg-myblue font-medium text-white py-[5px] max-l:py-[3px] max-xxl2:py-[5px] px-[12px] rounded-tr-[8px] rounded-br-[0px] rounded-bl-[8px]">
                {data.title}
              </span>
              <h2 className="text-[24px] max-xl:text-[22px] max-xxl2:text-[25.5px] max-l:text-[18px] max-xl3:text-[30px] max-2:text-[20px] font-medium leading-[27px]">
                {data.subtitle}
              </h2>
              <h3 className="text-[16px] max-l:text-[14px] max-xl3:text-[16px] max-2:text-[14px] text-myblack1 font-medium">
                {data.offer}
              </h3>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default DiscountProduct;
