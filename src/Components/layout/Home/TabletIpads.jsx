import HeadingSection from "../../Common/HeadingSection";
import TabletIpadCard from "../../Product/TabletsIpadCard";

function TabletIpads() {
  return (
    <div className="w-full h-[53vh] bg-pink-20 px-28 my-[100px] flex flex-col justify-between">
      <HeadingSection title="Tablets & iPads" />
      <TabletIpadCard />
    </div>
  );
}

export default TabletIpads;
