import HeadingSection from "../../Common/HeadingSection";
import TrendingProductCard from "../../Product/TrendingProductCard"
function TrendingProducts() {
  return (
    <div className="w-full h-fit px-28 my-[100px] flex flex-col gap-[60px]">
      <HeadingSection title="Trending Products" />
      <TrendingProductCard/>
    </div>
  );
}

export default TrendingProducts;
