import HeadingSection from "../../Common/HeadingSection";
import SliderTrending from "../../Product/SliderTrending";

function TrendingProducts() {
  return (
    <div className="w-full h-fit px-28 my-[100px] flex flex-col gap-[60px]">
      <HeadingSection title="Trending Products" />
      <SliderTrending />
    </div>
  );
}

export default TrendingProducts;
