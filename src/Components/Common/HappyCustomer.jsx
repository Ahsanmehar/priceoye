import { useEffect, useState } from "react";

function HappyCustomer({ title,color }) {
  let [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 12) {
        setCount(count + 1);
      }
    }, 80);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div className="flexcenter flex-col w-fit">
      <h1 className={`text-[32px] font-semibold text-${color}`}>{count}k+</h1>
      <h5 className="text-[14px] text-myblack1">{title}</h5>
    </div>
  );
}

export default HappyCustomer;
