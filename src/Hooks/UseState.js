import { useState } from "react";
export default function UseState() {
  const [count, setCount] = useState(0);
  const plusCount = () => {setCount((current)=>current+1);};
  const minusCount = () => {setCount((current)=>current-1);};
  return (
    <section>
      <span>{"1. useState() Hook => "}</span>
      {count}
      <button onClick={plusCount}>Up</button>
      <button onClick={minusCount}>Down</button>
    </section>
  );
}
