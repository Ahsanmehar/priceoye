import Slider from "../Components/layout/Home/Slider";
import SmartPhones from "../Components/layout/Home/SmartPhones";
import Discount from "../Components/layout/Home/Discount";
import TabletIpads from "../Components/layout/Home/TabletIpads";
import MobileAccessorie from "../Components/layout/Home/MobileAccessories";
import TrendingProducts from "../Components/layout/Home/TrendingProducts";
import DeliveryData from "../Components/layout/Home/DeliveryData";

function Home() {
  return (
    <>
      <Slider />
      <SmartPhones />
      <Discount />
      <TabletIpads />
      <MobileAccessorie />
      <TrendingProducts />
      <DeliveryData />
    </>
  );
}

export default Home;
