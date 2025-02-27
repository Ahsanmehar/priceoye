import QuikViewPopUp from "./Components/layout/Home/QuikViewPopUp";
import Routers from "./Components/layout/Routers/Routers";
import ProductAddRemove from "./Components/Common/ProductAddRemove";
// import RightNavbar from "./Components/Common/RightNavbar";

function App() {
  return (
    <>
      {/* <RightNavbar /> */}
      <ProductAddRemove />
      <QuikViewPopUp />
      <Routers />
    </>
  );
}

export default App;
