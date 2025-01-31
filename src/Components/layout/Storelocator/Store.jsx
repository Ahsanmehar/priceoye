import HappyCustomer from "../../Common/HappyCustomer";

function Store() {
  return (
    <div className="w-[100%] h-[58vh] flexbox px-28 mt-[90px] mb-[90px]">
      <div className="w-[50%] h-[100%] flex flex-col gap-[25px]">
        <h5 className="text-[15px] font-medium text-myblue">STORE LOCATOR</h5>
        <h1 className="text-[56px] font-semibold">Fast Store Locator Nearby</h1>
        <p className="text-[16px] text-myblack leading-[26px]">
          Our store locator makes it easy to find nearby stores right from your
          mobile device. With a simple and user-friendly interface, you can
          search for locations, get directions, and explore store details
          effortlessly.
        </p>
        <div className="flexbox mt-[30px] px-[40px]">
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
      <div className="w-[46%] h-[100%]">
        <img
          src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Error-Image"
          className="w-[100%] h-[100%] object-cover rounded-[30px]"
        />
      </div>
    </div>
  );
}

export default Store;
