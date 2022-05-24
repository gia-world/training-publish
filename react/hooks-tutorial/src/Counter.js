import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  return <div>
      <p>현재 카운터 값 : <strong>{value}</strong></p>
      <button onClick={()=>setValue(value+1)}>+1</button>
      <button onClick={()=>setValue(value-1)}>-1</button>
  </div>;
};

export default Counter;
