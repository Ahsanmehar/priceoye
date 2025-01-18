import HeadingSection from "../../Common/HeadingSection";
import ProductCard from "../../Product/ProductCard";

function MobileAccessorie() {
  return (
    <div className="w-full h-[45vh] px-28 my-16  flex flex-col justify-between">
      <HeadingSection title="Mobile Accessories"/>
      <div className="flex">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      </div>
    </div>
  );
}

export default MobileAccessorie;
