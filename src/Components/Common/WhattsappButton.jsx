import { useEffect, useState } from "react";

function WhattsappButton() {
  let [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function handleClick() {
    let number = "+923097230656";
    let message = "Hello, I need assistance!";
    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleClick);
    };
  }, []);

  return (
    <div>
      <img
        src="https://store-images.s-microsoft.com/image/apps.8453.13655054093851568.4a371b72-2ce8-4bdb-9d83-be49894d3fa0.7f3687b9-847d-4f86-bb5c-c73259e2b38e"
        alt="Error-Image"
        className={`whattsappbutton ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
        onClick={handleClick}
      />
    </div>
  );
}

export default WhattsappButton;
