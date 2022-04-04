import React, { useState } from "react";

const Input = ({ type = "text" }) => {
  const [inputValue, setInputValue] = useState(""); //[v,setVF]
  return (
    <div>
      <p>{inputValue}</p>
      <input
        type={type}
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(inputValue);
        }}
      />
    </div>
  );
};

export default Input;
