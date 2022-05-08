import React from "react";
import Add from "./Add";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>Task Tracker</h1>
        <button className="btn">Add</button>
      </header>
      <Add />
    </>
  );
};

export default Header;
