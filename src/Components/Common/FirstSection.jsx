import HappyCustomer from "./HappyCustomer";

function FirstSection({ title, subtitle, description, img }) {
  return (
    <div className="w-[100%] px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] max-l:px-[20px] flexbox max-xxl2:flex-col max-xxl2:items-start max-xxl2:gap-[50px] mt-[90px] mb-[90px] max-2:mb-[40px] max-l:mt-[40px]">
      <div className="w-[50%] max-xxl2:w-[85%] max-2:w-[100%] h-[100%] flex flex-col gap-[25px]">
        <h5 className="text-[15px] font-medium text-myblue">{title}</h5>
        <h1 className="text-[56px] max-l:text-[41px] max-2:text-[25px] font-semibold">{subtitle}</h1>
        <p className="text-[16px] max-2:text-[15px] text-myblack leading-[26px]">{description}</p>
        <div className="flexbox max-3:flex-col max-3:gap-[30px] mt-[30px] max-3:mt-[15px] px-[40px] max-xxxl1:px-[10px] max-xxl2:px-[60px] max-l4:px-[0px]">
          <HappyCustomer
            unit="k+"
            num={12}
            title="Happy Customers"
            color="#48AFFF"
          />
          <HappyCustomer
            unit="k+"
            num={14}
            title="Success Project"
            color="#48AFFF"
          />
          <HappyCustomer
            unit="%"
            num={16}
            title="Conversion Rate Increased"
            color="#48AFFF"
          />
        </div>
      </div>
      <div className="w-[46%] max-xxl2:w-[100%]">
        <img
          src={img}
          alt="Error-Image"
          className="w-[100%] h-[550px] max-2:h-[300px] object-cover rounded-[30px]"
        />
      </div>
    </div>
  );
}

export default FirstSection;
