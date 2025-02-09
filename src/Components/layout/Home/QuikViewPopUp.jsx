import { isClickQuickView } from "../../Redux Toolkit/PopUpSlice";
import { useDispatch, useSelector } from "react-redux";

function QuikViewPopUp() {
  let QuickView = useSelector((state) => state.popup.quikviewpopup);
  let dispatch = useDispatch();
  return (
    <div>
      {QuickView ? (
        <div className="min-h-screen w-[100%] bg-black/75 absolute z-40 top-0 left-0 bottom-0 right-0"></div>
      ) : (
        ""
      )}
    </div>
  );
}

export default QuikViewPopUp;
