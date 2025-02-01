import { useNavigate } from "react-router-dom";

function LoveToHear() {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-[30vh] px-28 flexbox flex-col items-center mt-[80px] mb-[80px]">
      <h1 className="text-[46px] font-semibold">We’d love to hear from you!</h1>
      <p className="text-[16px] text-myblac text-center leading-[26px]">
        We’d love to hear from you! If you have any questions about your trip,
        need details about historical places, or want to share your travel
        experiences, we’re here to help. Just fill out the contact form below
        with your questions or comments, and we’ll get back to you as soon as
        possible. Thank you for choosing PakExplore to discover Pakistan’s
        beauty and history!
      </p>
      <button
        className="w-fit bg-myblue py-[15px] px-[50px] rounded-[10px] text-white"
        onClick={() => navigate("/contactus")}
      >
        CONTACT US
      </button>
    </div>
  );
}

export default LoveToHear;
