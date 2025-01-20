function PopUp({
  CloseCart,
  showAddToCart,
  title,
  iconClass,
  message,
  description,
}) {
  
  return (
    <div className="h-[100vh] w-[100%] bg-pink-00 absolute z-40 top-0 left-0 bottom-0 right-0 flex">
      <div
        className={`w-[100%] h-full bg-black/75 ${
          showAddToCart ? "animate-slide-left" : "animate-slide-left-reverse"
        }`}
        onClick={CloseCart}
      ></div>

      <div
        className={`w-[29%] h-full bg-white p-[27px] absolute right-[0] ${
          showAddToCart ? "animate-slide-right" : "animate-slide-right-reverse"
        }`}
      >
        <div className="flexbox">
          <h2 className="text-[24px] font-semibold">{title}</h2>
          <i
            className="ri-close-large-line text-[19px] font-medium pointer"
            onClick={CloseCart}
          ></i>
        </div>

        <div className="flex items-center flex-col gap-[16px] mt-[20px]">
          <i className={`text-[70px] font-thin text-myblack1 ${iconClass}`} ></i>
          <h4 className="text-[16px] text-myblack2">{message}</h4>
          <h5 className="text-myblack text-[14px] text-center">
            {description}
          </h5>
          <button className="button">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
