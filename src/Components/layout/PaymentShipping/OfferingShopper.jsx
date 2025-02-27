function OfferingShopper() {
  return (
    <div className="w-[100%] px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] max-l:px-[20px] flexbox max-xxl2:flex-col max-xxl2:items-start max-xxl2:gap-[50px] my-[110px] max-2:my-[35px]" >
      <div className="w-[48%] max-xxl2:w-[100%] h-[550px] max-2:h-[350px] flex flex-col gap-[20px]">
        <img
          src="https://static.priceoye.pk//images/about-payment-cards.png"
          alt="Error-Image"
          className="w-[100%] h-[100%] object-cover rounded-[50px]"
        />
      </div>

      <div className="w-[45%] max-l:w-[47%] max-xxl2:w-[78%] max-2:w-[100%] h-[100%] flex flex-col gap-[25px]">
        <h1 className="text-[46px] max-l:text-[34px] max-2:text-[23px] font-semibold text-myblack1">
          Offering Multiple Payment Options
        </h1>
        <p className="text-[16px] max-2:text-[15px] text-myblack">
          We offer multiple payment options to ensure a seamless and convenient
          shopping experience. Choose from a variety of secure payment methods
          and complete your purchase with ease. Your convenience is our
          priority.
        </p>

        <div className="flex flex-col gap-[70px] mt-[30px]">
          <div className="flex max-3:justify-center gap-[100px]">
            <div className="flexcenter flex-col gap-[13px]">
              <div className="border-[2px] border-myblue w-fit px-[20px] py-[25px] flexcenter rounded-[50%]">
                <img
                  src="https://static.priceoye.pk//images/about-payment-debit.png"
                  alt="Error-Image"
                  className="text-[18px]"
                />
              </div>
              <h3 className="text-[16px] text-myblack whitespace-nowrap">Credit/Debit Card</h3>
            </div>
            <div className="flexcenter flex-col gap-[13px]">
              <div className="border-[2px] border-myblue w-fit px-[23px] py-[20px] flexcenter rounded-[50%]">
                <img
                  src="https://static.priceoye.pk//images/about-payment-bank.png"
                  alt="Error-Image"
                  className="text-[18px]"
                />
              </div>
              <h3 className="text-[16px] text-myblack whitespace-nowrap">Bank Transfer</h3>
            </div>
          </div>
          <div className="flex max-3:justify-center gap-[100px]">
            <div className="flexcenter flex-col gap-[13px]">
              <div className="border-[2px] border-myblue w-fit px-[20px] py-[25px] flexcenter rounded-[50%]">
                <img
                  src="https://static.priceoye.pk//images/about-payment-cash.png"
                  alt="Error-Image"
                  className="text-[18px]"
                />
              </div>
              <h3 className="text-[16px] text-myblack whitespace-nowrap">Cash on Delivery</h3>
            </div>
            <div className="flexcenter flex-col gap-[13px]">
              <div className="border-[2px] border-myblue w-fit px-[20px] py-[20px] flexcenter rounded-[50%]">
                <img
                  src="https://static.priceoye.pk//images/about-payment-installment.png"
                  alt="Error-Image"
                  className="text-[18px]"
                />
              </div>
              <h3 className="text-[16px] text-myblack whitespace-nowrap">Installments</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferingShopper;
