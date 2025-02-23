import { useDispatch, useSelector } from "react-redux";
import { addtowishlist } from "../Redux Toolkit/WishlistSlice";
import { useEffect, useState } from "react";

function ProductAddRemove() {
  let addtowishlistdata = useSelector(
    (state) => state.wishlist.addtowishlistdata
  );

  let [message, setMessage] = useState(null);

  useEffect(() => {
    if (addtowishlistdata.length > 0) {
      setMessage("Product added to wishlist successfully!");
    } else {
      setMessage("Product removed from wishlist successfully!");
    }

    let timer = setTimeout(() => {
      setMessage(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [addtowishlistdata]);

  return (
    <div>
      {message && (
        <div className="w-[500px] h-[60px] bg-white rounded-[8px] flex items-center justify-end gap-[80px] px-[10px] border-l-[4px] border-myblue shadow-lg shadow-black-500 fixed bottom-[7%] left-[50%] translate-x-[-50%]">
          <div className="flex items-center gap-[10px]">
            <i className="bi bi-check-circle text-myblue"></i>
            <h3 className="text-[14px] font-normal">{message}</h3>
          </div>
          <i
            className="bi bi-x-lg cursor-pointer text-myblue"
            onClick={() => setMessage(null)}
          ></i>
        </div>
      )}
    </div>
  );
}

export default ProductAddRemove;
