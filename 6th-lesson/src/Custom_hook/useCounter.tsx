import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCounter] = useState(0);
  const increment = useCallback(() => setCounter(count + 1), [count]);
  return { count, increment };
};
