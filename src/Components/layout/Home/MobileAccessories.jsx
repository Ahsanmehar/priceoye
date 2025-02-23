import HeadingSection from "../../Common/HeadingSection";
import MobibleAccessoriesCard from "../../Product/MobileAccessoriesCard";

function MobileAccessorie() {
  return (
    <div className="w-full px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] max-l:px-[20px] my-[100px] flex flex-col gap-[70px]">
      <HeadingSection title="Mobile Accessories" />
      <MobibleAccessoriesCard />
    </div>
  );
}

export default MobileAccessorie;
