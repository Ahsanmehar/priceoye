function Contact() {
  return (
    <div className="w-[100%] flex items-center max-xxl2:flex-col max-xxl2:items-start max-xxl2:gap-[70px] max-2:gap-[40px] px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] max-l:px-[20px] max-3:px-[10px] my-[110px] max-2:my-[40px]">
      <div className="w-[48%] max-3:w-[100%] h-[100%] flex flex-col justify-center gap-[20px] max-2:gap-[10px]">
        <h1 className="text-[46px] max-l:text-[35px] max-2:text-[25px] font-semibold w-fit whitespace-nowrap text-myblack1">CONTACT US</h1>
        <h5 className="text-[16px] max-1:text-[15px] text-myblack font-normal whitespace-nowrap max-3:whitespace-normal">
          Questions, bug reports, feedback – we’re here for it all.
        </h5>
      </div>
      <div className="w-[52%] max-xxl2:w-[100%] max-xxl2:h-[550px] max-2:h-[300px]">
        <img
          src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Error-Image"
          className="w-[100%] h-[100%] object-cover rounded-tl-[30%] border-[2px] border-myblack"
        />
      </div>
    </div>
  );
}

export default Contact;
