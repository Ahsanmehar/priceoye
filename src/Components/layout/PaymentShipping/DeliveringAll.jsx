function DeliveringAll() {
  return (
    <div className="w-[100%] h-[100vh] max-1:h-[70vh] max-2:h-[65vh] relative text-white">
      <img
        src="https://static.priceoye.pk//images/bg-deliver-capitals.png"
        alt="Error-Image"
        className="w-[100%] h-[100%] object-cover"
      />
      <div className="w-[100%] h-[100%] bg-myblue bg-opacity-[10%] absolute top-[0] left-[50%] translate-x-[-50%] flex justify-center pt-[50px] max-2:pt-[30px]">
        <div className="flex flex-col gap-[70px] max-2:gap-[40px]">
          <h1 className="text-[30px] max-1:text-[23px] font-medium text-black text-center text-myblack1">
            Delivering all across Pakistan
          </h1>

          <div className="flex gap-[110px] max-1:gap-[50px] max-2:gap-[0px] max-2:justify-between">
            <div className="flexcenter flex-col gap-[12px]">
              <div className="w-[125px] max-1:w-[100px] h-[125px] max-1:h-[100px] bg-myblue rounded-[50%] flexcenter">
                <h2 className="text-[26px] max-1:text-[21px]">140</h2>
              </div>
              <h3 className="text-[18px] text-myblack">Cites</h3>
            </div>
            <div className="flexcenter flex-col gap-[12px]">
              <div className="w-[125px] max-1:w-[100px] h-[125px] max-1:h-[100px] bg-myblue rounded-[50%] flexcenter">
                <h2 className="text-[26px] max-1:text-[21px]">100</h2>
              </div>
              <h3 className="text-[18px] text-myblack">Districts</h3>
            </div>
            <div className="flexcenter flex-col gap-[12px]">
              <div className="w-[125px] max-1:w-[100px] h-[125px] max-1:h-[100px] bg-myblue rounded-[50%] flexcenter">
                <h2 className="text-[26px] max-1:text-[21px]">5</h2>
              </div>
              <h3 className="text-[18px] text-myblack">Provinces</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveringAll;
