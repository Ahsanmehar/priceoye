function OfferingShopper() {
  return (
    <div className="w-[100%] h-[75vh] px-28 flexbox my-[110px]">
      <div className="w-[48%] h-[90%] flex flex-col gap-[20px]">
        <img
          src="https://static.priceoye.pk//images/about-payment-cards.png"
          alt="Error-Image"
          className="w-[100%] h-[100%] object-cover rounded-[50px]"
        />
      </div>

      <div className="w-[45%] h-[100%] flex flex-col gap-[25px]">
        <h1 className="text-[46px] font-semibold">
          Offering Multiple Payment Options
        </h1>
        <p className="text-[16px] text-myblack">
          We offer multiple payment options to ensure a seamless and convenient
          shopping experience. Choose from a variety of secure payment methods
          and complete your purchase with ease. Your convenience is our
          priority.
        </p>

        <div className="flex flex-col gap-[70px] mt-[30px]">
          <div className="flex gap-[100px]">
            <div className="flexcenter flex-col gap-[13px]">
              <div className="border-[2px] border-myblue w-fit w-[90px] h-[90px] flexcenter rounded-[50%]">
                <img
                  src="https://static.priceoye.pk//images/about-payment-debit.png"
                  alt="Error-Image"
                  className="text-[18px]"
                />
              </div>
              <h3 className="text-[16px] text-myblack">Credit/Debit Card</h3>
            </div>
            <div className="flexcenter flex-col gap-[13px]">
              <div className="border-[2px] border-myblue w-fit w-[90px] h-[90px] flexcenter rounded-[50%]">
                <img
                  src="https://static.priceoye.pk//images/about-payment-bank.png"
                  alt="Error-Image"
                  className="text-[18px]"
                />
              </div>
              <h3 className="text-[16px] text-myblack">Bank Transfer</h3>
            </div>
          </div>
          <div className="flex gap-[100px]">
            <div className="flexcenter flex-col gap-[13px]">
              <div className="border-[2px] border-myblue w-fit w-[90px] h-[90px] flexcenter rounded-[50%]">
                <img
                  src="https://static.priceoye.pk//images/about-payment-cash.png"
                  alt="Error-Image"
                  className="text-[18px]"
                />
              </div>
              <h3 className="text-[16px] text-myblack">Cash on Delivery</h3>
            </div>
            <div className="flexcenter flex-col gap-[13px]">
              <div className="border-[2px] border-myblue w-fit w-[90px] h-[90px] flexcenter rounded-[50%]">
                <img
                  src="https://static.priceoye.pk//images/about-payment-installment.png"
                  alt="Error-Image"
                  className="text-[18px]"
                />
              </div>
              <h3 className="text-[16px] text-myblack">Installments</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferingShopper;
