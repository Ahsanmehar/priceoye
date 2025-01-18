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
        <h1 className="text-[48px] font-semibold">{heading}</h1>
        <h4 className="text-[19px] w-[70%] text-center leading-[28px]">
          {subHeading}
        </h4>
        <button
          className="bg-white py-[15px] px-[50px] rounded-[10px] text-black"
          onClick={buttonAction}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}

export default FormRightSection;
