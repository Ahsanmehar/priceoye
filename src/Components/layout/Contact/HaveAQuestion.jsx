function HaveAQuestion() {
  return (
    <div className="w-100% my-[80px] max-2:my-[60px] px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] max-l:px-[20px] max-3:px-[10px] flexbox max-xxl2:flex-col max-xxl2:items-start max-xxl2:gap-[50px]">
      <div className="w-[44%] max-xxl2:w-[85%] max-2:w-[100%] h-[100%] flex flex-col gap-[20px]">
        <h5 className="text-[15px] font-medium text-myblue">
          HAVE A QUESTIONS
        </h5>
        <h1 className="text-[46px] max-l:text-[35px] max-2:text-[23px] font-semibold">
          Leave Us A Message?
        </h1>
        <p className="text-[16px] max-2:text-[15px] text-myblack">
          Need assistance or have a question? Leave us a message, and our
          dedicated support team will get back to you promptly. We’re here to
          help with all your inquiries.
        </p>

        <form className="flex flex-col gap-[20px] max-2:gap-[12px]">
          <input
            type="text"
            placeholder="Name *"
            className="px-[9px] py-[18px] max-2:py-[15px] max-2:placeholder:text-[14px] rounded-[15px] outline-myblue outline-[1px] border-myblack border-[1px]"
          />
          <input
            type="email"
            placeholder="Email *"
            className="px-[9px] py-[18px] max-2:py-[15px] max-2:placeholder:text-[14px]  rounded-[15px] outline-myblue outline-[1px] border-myblack border-[1px]"
          />
          <textarea
            placeholder="Message *"
            className="px-[9px] py-[18px] rounded-[15px] max-2:placeholder:text-[14px] outline-myblue outline-[1px] border-myblack border-[1px]"
            rows={4}
          ></textarea>
          <button className="w-fit bg-myblue py-[15px] max-3:py-[14px] max-2:px-[30px] px-[50px] max-l:px-[30px] max-3:px-[25px] rounded-[10px] text-white max-2:text-[13px]">
            SEND MESSAGE
          </button>
        </form>
      </div>
      <div className="w-[50%] max-xxl2:w-[100%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.917927445214!2d74.36631107598228!3d31.36124395498601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919a848c0e92689%3A0x9ab08f8418d4e4af!2s5%20Number%20Stop!5e0!3m2!1sen!2s!4v1738244282325!5m2!1sen!2s"
          width="100%"
          height="550px"
          allowfullscreen="full"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="rounded-[30px] max-3:h-[400px]"
        ></iframe>
      </div>
    </div>
  );
}

export default HaveAQuestion;
