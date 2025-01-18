import HeadingSection from "../../Common/HeadingSection";
import SliderCarousel from "../../Common/SliderCarousel";

function SmartPhones() {
  return (
    <div className="w-full h-[48vh] bg-pink-20 px-28 my-16 flex flex-col justify-between">
      <HeadingSection title="Smart Phones" />
      <SliderCarousel />
    </div>
  );
}

export default SmartPhones;
