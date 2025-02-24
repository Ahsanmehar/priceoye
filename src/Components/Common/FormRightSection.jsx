import { useNavigate } from "react-router-dom";

function FormRightSection({ heading, subHeading, buttonText, buttonAction }) {
  const navigate = useNavigate();
  return (
    <>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/036/708/930/small_2x/curve-wave-blue-abstract-background-free-png.png"
        className="w-[100%] h-[100%] object-cover"
      />
      <div className="position flexcenter flex-col gap-[20px] w-full text-white">
        <h1 className="text-[48px] max-l:text-[38px] font-semibold">{heading}</h1>
        <h4 className="text-[19px] max-l:text-[17px] w-[70%] max-l:w-[85%] text-center leading-[28px]">
          {subHeading}
        </h4>
        <button
          className="bg-white max-l:text-[15px] py-[15px] max-l:py-[13px] px-[50px] max-l:px-[40px] rounded-[10px] text-black"
          onClick={buttonAction}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}

export default FormRightSection;
