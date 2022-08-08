import React, { useEffect } from "react";

const MyHeader = ({ headText, left, right }) => {
  // useEffect(() => {
  //클린업함수
  //   const eventHandler = (e) => {
  //     const header = document.querySelector("header");
  //     header.style.backgroundColor = "red";
  //     header.classList.add("ddd");
  //   };
  //   window.addEventListener("click", eventHandler);
  //   // return () => {
  //   //   window.removeEventListener("click", eventHandler);
  //   // };
  // }, []);
  return (
    <header>
      <div className="head_btn_left">{left}</div>
      <div className="head_text">{headText}</div>
      <div className="head_btn_right">{right}</div>
    </header>
  );
};

export default MyHeader;
