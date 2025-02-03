import HeadingSection from "../../Common/HeadingSection";
import SmartPhoneCard from "../../Product/SmarPhoneCard";
function SmartPhones() {
  return (
    <div className="w-full h-[53vh] px-28 my-[100px] flex flex-col justify-between">
      <HeadingSection title="Smart Phones" />
      <SmartPhoneCard />
    </div>
  );
}

export default SmartPhones;
