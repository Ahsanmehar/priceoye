import HeadingSection from "../../Common/HeadingSection";
import TabletIpadCard from "../../Product/TabletsIpadCard";

function TabletIpads() {
  return (
    <div className="w-full px-28 max-xxxl:px-[80px] max-xxl:px-[60px] max-xl:px-[30px] max-l:px-[20px] max-3:px-[8px] my-[100px] max-2:my-[50px] flex flex-col gap-[50px] max-xl:px-[30px]">
      <HeadingSection title="Tablets & iPads" />
      <TabletIpadCard />
    </div>
  );
}

export default TabletIpads;
