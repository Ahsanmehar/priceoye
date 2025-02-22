import Slider from "../Components/layout/Home/Slider";
import SmartPhones from "../Components/layout/Home/SmartPhones";
import Discount from "../Components/layout/Home/Discount";
import TabletIpads from "../Components/layout/Home/TabletIpads";
import MobileAccessorie from "../Components/layout/Home/MobileAccessories";
import TrendingProducts from "../Components/layout/Home/TrendingProducts";
import QuikViewPopUp from "../Components/layout/Home/QuikViewPopUp";
import ProductAddRemove from "../Components/Common/ProductAddRemove";

function Home() {
  return (
    <>
      <Slider />
      <SmartPhones />
      <Discount />
      <TabletIpads />
      <MobileAccessorie />
      <TrendingProducts />
      <QuikViewPopUp />
      <ProductAddRemove />
    </>
  );
}

export default Home;
