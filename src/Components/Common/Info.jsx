function Info() {
  return (
    <div className="w-[100%] h-[40vh] bg-myblack px-28 ">
      <div className="w-[272px] h-[282px] bg-myblue rounded-[10px] text-white relative">
        <div className="flexcenter flex-col gap-[20px] bg-white">
          <img
            src="./src/shield.svg"
            alt=""
            className="absolute bottom-[0] right-[0] opacity-[50%]"
          />
          <img src="./src/shield.svg" alt="Error-Image" />
          <h4 className="text-[24px] font-medium">PTA Approved</h4>
          <h5 className="text-[16px] text-center">
            Ensures compliance with local regulations and device authenticity.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Info;
