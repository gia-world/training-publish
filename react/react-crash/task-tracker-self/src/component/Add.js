import React, { useRef, useState } from "react";

const Add = ({ setTasks }) => {
  const [inputValue, setInputValue] = useState(null);
  const id = useRef(0);
  return (
    <form
      className="add-form form-control"
      onSubmit={(e) => {
        e.preventDefault();
        setTasks((prev) => {
          id.current++;
          return [...prev, { name: inputValue, id: id.current }];
        });
        setInputValue("");
      }}
    >
      <label>Subject</label>
      <input
        type="text"
        value={inputValue}
        placeholder="Text here"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <input type="submit" value="submit" className="btn btn-block" />
    </form>
  );
};

export default Add;
