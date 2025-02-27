import { useEffect, useState } from "react";

function Slider() {
  let [count, setCount] = useState(0);
  let [animationKey, setAnimationKey] = useState(0);

  const slides = [
    "https://cellmart.pk/wp-content/uploads/2024/10/apple-iphone-16-banner-cellmart.png", 
    "https://cellmart.pk/wp-content/uploads/2024/09/Apple-Watch-series-10-Banner-cellmart.png", 
    "https://cellmart.pk/wp-content/uploads/2025/01/POCO-X7-Pro-Banner-cellmart.jpg", 
    "https://cellmart.pk/wp-content/uploads/2024/09/Apple-AirPods-4-Banner-cellmart.png", 
  ];

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((preval) => (preval + 1) % slides.length);
      setAnimationKey((prekey) => prekey + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }),
    [count];

  return (
    <div className="w-full h-[59vh] max-xxxl1:h-[50vh] max-xl3:h-[40vh] max-1:h-[30vh] max-3:h-[18vh]  relative">
      <img
        key={animationKey}
        src={slides[count]}
        className="w-full h-full object-cover animate-fade-in"
      />
      <div className="absolute bottom-4 max-3:bottom-[6px]  left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => {
          return (
            <div
              key={i}
              onClick={() => setCount(i)}
              className={`w-[8px] max-1:w-[6px] h-[8px] max-3:h-[6px]  rounded-full cursor-pointer ${
                i == count ? "bg-myblue" : "bg-gray-400"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
