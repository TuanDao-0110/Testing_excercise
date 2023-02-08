import React, { FunctionComponent, useState } from "react";

export const Counter: FunctionComponent = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>add one</button>
      <div role={'contentinfo'}> count is {count}</div>
      <div role={'contentinfo'} > count is {count }</div>

    </div>
  );
};
