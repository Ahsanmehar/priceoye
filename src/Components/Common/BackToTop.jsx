import { useEffect, useState } from "react";

function BackToTop() {
  let [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <i
      className={`ri-arrow-up-line backtotop ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 rounded-[10px]`}
      onClick={scrollToTop}
    ></i>
  );
}

export default BackToTop;
