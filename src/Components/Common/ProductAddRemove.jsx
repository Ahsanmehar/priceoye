import { useState, useEffect } from "react";

function ProductAddRemove({ isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000); // 3 sec baad hide
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null; // Agar visible nahi hai to render na ho

  return (
    <div className="w-[500px] h-[60px] bg-white rounded-[8px] flex items-center justify-end gap-[80px] px-[10px] border-l-[4px] border-myblue shadow-lg shadow-black-500 fixed bottom-[7%] left-[50%] translate-x-[-50%]">
      <div className="flex items-center gap-[10px]">
        <i className="bi bi-check-circle text-myblue"></i>
        <h3 className="text-[14px] font-normal">
          Product added to wishlist successfully!
        </h3>
      </div>
      <i className="bi bi-x-lg cursor-pointer text-myblue" onClick={onClose}></i>
    </div>
  );
}

export default ProductAddRemove;
