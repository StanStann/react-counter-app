import React, { useState } from "react";
const FunctionCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    return setCount(count + 1);
  };

  const handleDecrease = () => {
    return setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase Count</button>
      <button onClick={handleDecrease}>Decrease Count</button>
    </div>
  );
};

export default FunctionCounter;
