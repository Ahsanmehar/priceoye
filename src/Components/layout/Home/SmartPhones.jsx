import HeadingSection from "../../Common/HeadingSection";
import SmartPhoneCard from "../../Product/SmarPhoneCard";
function SmartPhones() {
  return (
    <div className="w-full px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] max-l:px-[20px] max-3:px-[8px] my-[100px] max-2:my-[40px] flex flex-col gap-[50px]">
      <HeadingSection title="Smart Phones" />
      <SmartPhoneCard />
    </div>
  );
}

export default SmartPhones;
