import HeadingSection from "../../Common/HeadingSection";
import SliderTrending from "../../Product/SliderTrending";

function TrendingProducts() {
  return (
    <div className="w-full h-fit px-28 my-16 flex flex-col gap-[30px]">
      <HeadingSection title="Trending Products" />
      <SliderTrending />
    </div>
  );
}

export default TrendingProducts;
