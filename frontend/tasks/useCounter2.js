import { useCallback, useState } from "react";

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((value) => value + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((value) => value - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  const setValue = useCallback((value) => {
    setCount(value);
  }, []);

  return { count, increment, decrement, reset, setValue };
}
