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
        src="https://yt3.googleusercontent.com/sgHvOYIO6-Qg_6UAMJK9bjMHzA3Nf5uneSMAmzUZuZrLqLttTdVwNXf0q5n2nBVecIZ_gsknCH0=s900-c-k-c0x00ffffff-no-rj"
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
