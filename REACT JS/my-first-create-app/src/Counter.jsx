import React, { useState } from 'react';

let Counter = () => {
  let [count, setCount] = useState(0);  

  let handleCount = () => {
    setCount(count + 9);
    console.log("count:", count + 9);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default Counter;

