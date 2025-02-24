import { useNavigate } from "react-router-dom";

function LoveToHear() {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] flexbox flex-col gap-[30px] items-center my-[80px]">
      <h1 className="text-[46px] max-l:text-[35px] font-semibold">We’d love to hear from you!</h1>
      <p className="text-[16px] text-myblac text-center leading-[26px]">
        We’d love to hear from you! If you have any questions about your trip,
        need details about historical places, or want to share your travel
        experiences, we’re here to help. Just fill out the contact form below
        with your questions or comments, and we’ll get back to you as soon as
        possible. Thank you for choosing PakExplore to discover Pakistan’s
        beauty and history!
      </p>
      <button
        className="w-fit bg-myblue max-l:text-[15px] py-[15px] px-[50px] max-l:px-[35px] rounded-[10px] text-white"
        onClick={() => navigate("/contactus")}
      >
        CONTACT US
      </button>
    </div>
  );
}

export default LoveToHear;
