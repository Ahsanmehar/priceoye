import Slider from "../Components/layout/Home/Slider";
import SmartPhones from "../Components/layout/Home/SmartPhones";
import Discount from "../Components/layout/Home/Discount";
import TabletIpads from "../Components/layout/Home/TabletIpads";
import MobileAccessorie from "../Components/layout/Home/MobileAccessories";
import Info from "../Components/Common/Info";

function Home() {
  return (
    <>
      <Slider />
      <SmartPhones />
      <Discount />
      <TabletIpads />
      <MobileAccessorie />
      <Info />
    </>
  );
}

export default Home;
