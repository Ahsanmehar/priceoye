function CustomerCare() {
  function handleEmail() {
    const email = encodeURIComponent("Ahsanmeharj@gmail.com");
    const subject = encodeURIComponent("hello");
    const body = "Hy! How r u?";

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  function handlePhone() {
    window.location.href = "tel:+923097230656";
  }

  function handleWhatapps() {
    let number = "+923097230656";
    let message = "Hello, I need assistance!";
    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <div className="w-[100%] px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] max-l:px-[20px] max-3:px-[10px]">
      <div className="w-[100%] h-[100%] bg-myblue rounded-[50px] flexbox flex-col gap-[15px] px-[20px] py-[30px]">
        <h1 className="text-[40px] max-l:text-[35px] max-1:text-[30px] max-2:text-[25px] font-semibold text-white">Customer Care</h1>
        <p className="text-center w-[90%] max-1:w-full text-white max-2:text-[15px] leading-[25px]">
          We provide 24/7 customer care support. You can a contact us at any
          time because your problem is our problem and for that problem our
          highly professional team is present with all possible solutions
        </p>

        <div className="w-full flex max-1:flex-col justify-center gap-[35px] max-l:gap-[20px] mt-[30px]">
          <div
            className="w-[337px] max-1:w-full h-[148px] bg-white flexcenter flex-col gap-[10px] rounded-tr-[20px] rounded-bl-[20px] pointer"
            onClick={handleEmail}
          >
            <i className="bi bi-chat text-[50px] max-l:text-[42px] text-myblue"></i>
            <h5 className="text-[17px]">Ahsanmeharj@gmail.com</h5>
          </div>
          <div
            className="w-[337px] max-1:w-full h-[148px] bg-white flexcenter flex-col gap-[10px] rounded-tr-[20px] rounded-bl-[20px] pointer"
            onClick={handlePhone}
          >
            <i className="bi bi-telephone text-[50px] max-l:text-[42px] text-myblue"></i>
            <h5 className="text-[17px]">+92 309 7230656</h5>
          </div>
          <div
            className="w-[337px] max-1:w-full h-[148px] bg-white flexcenter flex-col gap-[10px] rounded-tr-[20px] rounded-bl-[20px] pointer"
            onClick={handleWhatapps}
          >
            <i className="bi bi-whatsapp text-[50px] max-l:text-[42px] text-myblue"></i>
            <h5 className="text-[17px]">Whatsapp</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCare;
