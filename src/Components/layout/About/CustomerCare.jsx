function CustomerCare() {
  return (
    <div className="w-[100%] h-[41vh] px-28">
      <div className="w-[100%] h-[100%] bg-myblue rounded-[50px] flexbox flex-col px-[20px] py-[30px]">
        <h1 className="text-[40px] font-semibold text-white">Customer Care</h1>
        <p className="text-center w-[90%] text-white leading-[25px]">
          We provide 24/7 customer care support. You can a contact us at any
          time because your problem is our problem and for that problem our
          highly professional team is present with all possible solutions
        </p>

        <div className="flex gap-[35px] mt-[30px]">
          <div className="w-[337px] h-[148px] bg-white flexcenter flex-col gap-[10px] rounded-tr-[20px] rounded-bl-[20px] pointer">
            <i className="bi bi-chat text-[50px] text-myblue"></i>
            <h5 className="text-[17px]">Ahsanmeharj@gmail.com</h5>
          </div>
          <div className="w-[337px] h-[148px] bg-white flexcenter flex-col gap-[10px] rounded-tr-[20px] rounded-bl-[20px] pointer">
            <i className="bi bi-telephone text-[50px] text-myblue"></i>
            <h5 className="text-[17px]">+92 309 7230656</h5>
          </div>
          <div className="w-[337px] h-[148px] bg-white flexcenter flex-col gap-[10px] rounded-tr-[20px] rounded-bl-[20px] pointer">
            <i className="bi bi-whatsapp text-[50px] text-myblue"></i>
            <h5 className="text-[17px]">Whatsapp</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCare;
