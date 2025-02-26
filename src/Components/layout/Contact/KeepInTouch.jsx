function KeepInTouch() {
  return (
    <div className="w-[100%] px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] flexbox max-xxl2:flex-col max-xxl2:items-start max-xxl2:gap-[50px]">
      <div className="w-[45%] max-xxl2:w-[100%] h-[550px] max-1:h-[300px]">
        <img
          src="https://images.unsplash.com/photo-1546795729-f3a5d42087f5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Error-Image"
          className="w-[100%] h-[100%] object-cover rounded-[30px]"
        />
      </div>
      <div className="w-[50%] max-xxl2:w-[85%] h-[100%] flex flex-col gap-[15px]">
        <h5 className="text-[15px] font-medium text-myblue">KEEP IN TOUCH</h5>
        <h1 className="text-[46px] max-l:text-[33px] max-1:text-[25px] font-semibold">
          Do You Have Some Questions?
        </h1>
        <p className="text-[16px] max-1:text-[15px] text-myblack">
          Have questions? Find answers to the most common inquiries about our
          products, services, and policies on our comprehensive FAQ page. Get
          the information you need quickly and easily.
        </p>

        <div className="flex flex-col gap-[25px] mt-[35px]">
          <div className="flex gap-[15px]">
            <div className="w-[43px] h-[43px] bg-myblue rounded-[50%] flexcenter">
              <i className="bi bi-house-door text-[20px] max-1:text-[19px] text-white"></i>
            </div>
            <div>
              <h2 className="text-[24px] max-1:text-[19px] font-medium">Email</h2>
              <h5 className="text-[16px] max-1:text-[15px] text-myblack">
                Ahsanmeharj@gmail.com
              </h5>
            </div>
          </div>
          <div className="flex gap-[15px]">
            <div className="w-[43px] h-[43px] bg-myblue rounded-[50%] flexcenter">
              <i className="bi bi-telephone text-[20px] max-1:text-[19px] text-white"></i>
            </div>
            <div>
              <h2 className="text-[24px] max-1:text-[19px] font-medium">Phone Number</h2>
              <h5 className="text-[16px] max-1:text-[15px] text-myblack">+92 309 7230656</h5>
            </div>
          </div>
          <div className="flex gap-[15px]">
            <div className="w-[43px] h-[43px] bg-myblue rounded-[50%] flexcenter">
              <i className="bi bi-geo-alt text-[20px] max-1:text-[19px] text-white"></i>
            </div>
            <div>
              <h2 className="text-[24px] max-1:text-[19px] font-medium">Location</h2>
              <h5 className="text-[16px] max-1:text-[15px] text-myblack">
                Purana Kahana, Ferozepur Road, Lahore, Pakistan
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeepInTouch;
