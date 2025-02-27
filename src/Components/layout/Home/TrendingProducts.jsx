import HeadingSection from "../../Common/HeadingSection";
import TrendingProductCard from "../../Product/TrendingProductCard"
function TrendingProducts() {
  return (
    <div className="w-full h-fit px-28 my-[100px] flex flex-col gap-[60px] max-xl:px-[30px] max-l:px-[20px] max-3:px-[8px] max-2:my-[40px]">
      <HeadingSection title="Trending Products" />
      <TrendingProductCard/>
    </div>
  );
}

export default TrendingProducts;
