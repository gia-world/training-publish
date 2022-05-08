import React, { useState } from "react";
import Add from "./Add";

const Header = ({ setTasks }) => {
  const [isAddShow, setIsAddShow] = useState(false);
  return (
    <>
      <header className="header">
        <h1>Task Tracker</h1>
        <button
          className="btn"
          onClick={() => {
            setIsAddShow(!isAddShow);
          }}
        >
          {isAddShow ? "Close" : "Add"}
        </button>
      </header>
      {isAddShow ? <Add setTasks={setTasks} /> : null}
    </>
  );
};

export default Header;
