import { useEffect, useState } from "react";

function HappyCustomer({ num, unit, title, color }) {
  let [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < num) {
        setCount(count + 1);
      }
    }, 80);

    return () => {
      clearInterval(interval);
    };
  }, [count, num]);

  return (
    <div className="flexcenter flex-col w-fit">
      <h1 className="text-[32px] max-l:text-[26px] max-2:text-[24px] font-semibold" style={{ color: color }}>
        {count}
        {unit}
      </h1>
      <h5 className="text-[14px] text-myblack1">{title}</h5>
    </div>
  );
}

export default HappyCustomer;
