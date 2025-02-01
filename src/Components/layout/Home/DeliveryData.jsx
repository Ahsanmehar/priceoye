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
    <div className="w-[100%] h-[17vh] bg-myblac px-28 border-myblue border-b-[1px] border-t-[1px] mb-[70px] flexbox">
      {deliveryOptions.map((data,i) => {
        return (
          <div className="w-[20%] border-r-[1px] border-myblue flex items-center gap-[18px]" key={i}>
            <i className={`text-[40px] text-myblue ${data.icon}`}></i>
            <div>
              <h3 className="text-[18px]">{data.title}</h3>
              <h4 className="text-[14px] text-myblack">{data.description}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeliveryData;
