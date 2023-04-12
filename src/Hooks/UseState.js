import { useState } from "react";
export default function UseState() {
  const [count, setCount] = useState(0);
  const plusCount = () => {setCount((current)=>current+1);};
  const minusCount = () => {setCount((current)=>current-1);};
  return (
    <samp>
      <h3>{"1. useState()"}</h3>
      
      <div>
        <button onClick={plusCount}>Up</button>
        <h2>{count}</h2>
        <button onClick={minusCount}>Down</button>
      </div>
    </samp>
  );
}
