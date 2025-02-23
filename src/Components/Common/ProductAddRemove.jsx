import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

function ProductAddRemove() {
  let addtowishlistdata = useSelector(
    (state) => state.wishlist.addtowishlistdata
  );
  let [showPop, setShowPop] = useState(false);
  let [status, setStatus] = useState("");
  let isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (addtowishlistdata.length > 0) {
      setShowPop(true);
      setStatus("added");
    } else {
      setShowPop(true);
      setStatus("removed");
    }
    let timer = setTimeout(() => {
      setShowPop(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [addtowishlistdata]);
  return (
    <>
      {showPop && (
        <div className="w-[500px] h-[60px] bg-white rounded-[8px] flex items-center justify-end gap-[80px] px-[10px] border-l-[4px] border-myblue shadow-lg shadow-black-500 fixed bottom-[7%] left-[50%] translate-x-[-50%]">
          <div className="flex items-center gap-[10px]">
            <i className="bi bi-check-circle text-myblue"></i>
            <h3 className="text-[14px] font-normal">
              {status === "added"
                ? "Product added to wishlist successfully!"
                : "Product removed from wishlist successfully!"}
            </h3>
          </div>
          <i
            className="bi bi-x-lg cursor-pointer text-myblue"
            onClick={() => setShowPop(false)}
          ></i>
        </div>
      )}
    </>
  );
}

export default ProductAddRemove;
