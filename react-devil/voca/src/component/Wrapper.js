import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const Wrapper = () => {
  const [name, setName] = useState("noname");
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(inputValue);
        }}
        value={inputValue}
      ></input>
      <button
        onClick={() => {
          setName(inputValue);
          setInputValue("");
        }}
      >
        change
      </button>
      <ChildComponent name={name} age={32}></ChildComponent>
    </div>
  );
};

export default Wrapper;
