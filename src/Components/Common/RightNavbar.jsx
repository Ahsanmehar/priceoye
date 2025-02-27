import { useDispatch } from "react-redux";
import isRightNavbar from "../Redux Toolkit/PopUpSlice";

function RightNavbar() {
  let dispatch = useDispatch();

  return (
    <div className="h-[100vh] w-[100%] absolute z-50 top-0 left-0 bottom-0 right-0 flex">
      <div
        className={`w-[100%] h-full bg-black/75`}
        onClick={() => dispatch(isRightNavbar())}
      >
        <div
          className={`w-[29%] max-xxxl:w-[35%] max-xl:w-[40%] max-xxxl1:w-[45%] max-xxl2:w-[50%] max-xl3:w-[55%] max-l4:w-[60%] max-1:w-[70%] max-2:w-[90%] max-3:w-[100%] h-full bg-white p-[27px] max-3:py-[15px] max-3:px-[12px] absolute left-[0]`}
        ></div>
      </div>
    </div>
  );
}

export default RightNavbar;
