import { useNavigate } from "react-router-dom";

function LoveToHear() {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] max-l:px-[20px] max-3:px-[10px] flexbox flex-col gap-[30px] max-3:gap-[20px] items-center my-[80px] max-2:my-[40px]">
      <h1 className="text-[46px] max-l:text-[35px] max-2:text-[28px] max-3:text-[24px] font-semibold">We’d love to hear from you!</h1>
      <p className="text-[16px] max-2:text-[15px] text-myblack text-center leading-[26px]">
        We’d love to hear from you! If you have any questions about your trip,
        need details about historical places, or want to share your travel
        experiences, we’re here to help. Just fill out the contact form below
        with your questions or comments, and we’ll get back to you as soon as
        possible. Thank you for choosing PakExplore to discover Pakistan’s
        beauty and history!
      </p>
      <button
        className="w-fit bg-myblue max-l:text-[15px] max-2:text-[13px] py-[15px] max-3:py-[13px] px-[50px] max-l:px-[35px] max-2:px-[30px] max-3:px-[20px] rounded-[10px] text-white"
        onClick={() => navigate("/contactus")}
      >
        CONTACT US
      </button>
    </div>
  );
}

export default LoveToHear;
