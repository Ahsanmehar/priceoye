import HeadingSection from "../../Common/HeadingSection";
import ProductCard from "../../Product/SmarPhonetCard";
function SmartPhones() {
  return (
    <div className="w-full h-[53vh] px-28 my-[100px] flex flex-col justify-between">
      <HeadingSection title="Smart Phones" />
      <ProductCard />
    </div>
  );
}

export default SmartPhones;
