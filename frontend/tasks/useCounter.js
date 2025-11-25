import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset, setCount };
}

const { count, increment, decrement, reset } = useCounter();

// log :
console.log(count);
