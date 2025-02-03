import HeadingSection from "../../Common/HeadingSection";
import MobibleAccessoriesCard from "../../Product/MobileAccessoriesCard";

function MobileAccessorie() {
  return (
    <div className="w-full h-[48vh] px-28 my-[100px] flex flex-col justify-between">
      <HeadingSection title="Mobile Accessories" />
      <MobibleAccessoriesCard />
    </div>
  );
}

export default MobileAccessorie;
