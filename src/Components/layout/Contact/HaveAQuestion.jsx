function HaveAQuestion() {
  return (
    <div className="w-100% h-[70vh] mt-[80px] mb-[80px] px-28 flexbox">
      <div className="w-[44%] h-[100%] flex flex-col gap-[20px]">
        <h5 className="text-[15px] font-medium text-myblue">
          HAVE A QUESTIONS
        </h5>
        <h1 className="text-[46px] font-semibold">Leave Us A Message?</h1>
        <p className="text-[16px] text-myblack">
          Need assistance or have a question? Leave us a message, and our
          dedicated support team will get back to you promptly. We’re here to
          help with all your inquiries.
        </p>

        <form className="flex flex-col gap-[20px]">
          <input
            type="text"
            placeholder="Name *"
            className="px-[9px] py-[18px] rounded-[15px] outline-myblue outline-[1px] border-myblack border-[1px]"
          />
          <input
            type="email"
            placeholder="Email *"
            className="px-[9px] py-[18px] rounded-[15px] outline-myblue outline-[1px] border-myblack border-[1px]"
          />
          <textarea
            placeholder="Message *"
            className="px-[9px] py-[18px] rounded-[15px] outline-myblue outline-[1px] border-myblack border-[1px]"
            rows={4}
          ></textarea>
          <button className="w-fit bg-myblue py-[15px] px-[50px] rounded-[10px] text-white">
            SEND MESSAGE
          </button>
        </form>
      </div>
      <div className="w-[50%] h-[100%] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.917927445214!2d74.36631107598228!3d31.36124395498601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919a848c0e92689%3A0x9ab08f8418d4e4af!2s5%20Number%20Stop!5e0!3m2!1sen!2s!4v1738244282325!5m2!1sen!2s"
          width="100%"
          height="86%"
          allowfullscreen="full"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="rounded-[30px]"
        ></iframe>
      </div>
    </div>
  );
}

export default HaveAQuestion;
