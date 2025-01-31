function Contact() {
  return (
    <div className="w-[100%] h-[65vh] flex px-28 mt-[110px] mb-[110px]">
      <div className="w-[48%] h-[100%] flex flex-col justify-center gap-[20px]">
        <h1 className="text-[46px] font-semibold w-fit">CONTACT US</h1>
        <h5 className="text-[16px] text-myblack font-normal">
          Questions, bug reports, feedback – we’re here for it all.
        </h5>
      </div>
      <div className="w-[52%] h-[100%]">
        <img
          src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Error-Image"
          className="w-[100%] h-[100%] object-cover rounded-tl-[30%] border-[1px] border-myblack"
        />
      </div>
    </div>
  );
}

export default Contact;
