const deliveryOptions = [
  {
    id: 1,
    icon: "bi bi-rocket-takeoff",
    title: "Fast Delivery",
    description: "Same Day in Lahore",
  },
  {
    id: 2,
    icon: "bi-arrow-repeat",
    title: "7 Days Replacement",
    description: "If goods have problems",
  },
  {
    id: 3,
    icon: "bi bi-credit-card-2-front",
    title: "Secure Payment",
    description: "100% secure payment",
  },
  {
    id: 3,
    icon: "bi bi-chat",
    title: "24/7 Support",
    description: "Dedicated support",
  },
];

function DeliveryData() {
  return (
    <div className="w-[100%] px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] max-l:px-[20px] max-3:px-[8px] py-[40px] border-myblue border-b-[1px] border-t-[1px] mb-[70px] max-2:mb-[40px] flexbox max-xxl2:flex-wrap max-xxl2:gap-y-[25px]">
      {deliveryOptions.map((data, i) => {
        return (
          <div
            className="w-[20%] max-xl:w-[23%] max-xxxl1:w-[24%] max-xxl2:w-[32%] max-xxl2:w-[48%] max-2:w-[100%] border-r-[1px] border-myblue flex items-center gap-[18px]"
            key={i}
          >
            <i
              className={`text-[40px] max-xxxl1:text-[32px] text-myblue ${data.icon}`}
            ></i>
            <div>
              <h3 className="text-[18px] max-xxxl1:text-[16.8px] whitespace-nowrap">
                {data.title}
              </h3>
              <h4 className="text-[14px] text-myblack">{data.description}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeliveryData;
