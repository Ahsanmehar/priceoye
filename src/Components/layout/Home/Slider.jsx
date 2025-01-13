import { useEffect, useState } from "react";

function Slider() {
  let [count, setCount] = useState(0);
  let [animationKey, setAnimationKey] = useState(0);

  const slides = [
    "./public/slider/slide1.jpg",
    "./public/slider/slide2.jpg",
    "./public/slider/slide3.jpg",
    "./public/slider/slide4.jpg",
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
    <div className="w-full h-[58vh] relative">
      <img
        key={animationKey}
        src={slides[count]}
        className="w-full h-full object-cover animate-fade-in"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => {
          return (
            <div
              key={i}
              onClick={() => setCount(i)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                i == count ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
