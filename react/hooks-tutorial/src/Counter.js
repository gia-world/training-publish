import React, { useState,useReducer } from "react";

function reducer(state, action) {
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };

      break;
    case "DECREMENT":
      return { value: state.value - 1 };

    default:
      break;
  }
}

const Counter = () => {
  // const [value, setValue] = useState(0);
  // return <div>
  //     <p>현재 카운터 값 : <strong>{value}</strong></p>
  //     <button onClick={()=>setValue(value+1)}>+1</button>
  //     <button onClick={()=>setValue(value-1)}>-1</button>
  // </div>;
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터 값 : <strong>{state.value}</strong>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
