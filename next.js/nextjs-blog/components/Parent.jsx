import React from "react";
// props
// const Parent = (props) => {
// const props = {
//   obj: {
//     obj2: {
//       obj3: {
//         obj4: {
//           name: "",
//           age: "",
//         },
//       },
//     },
//   },
// };
const Parent = (props) => {
  const { name, age } = props.obj.obj2.obj3.obj4;
  //   return <div style={{ background: "red" }}>{props.children}</div>;
  return (
    <div style={{ background: "red" }}>
      {name}
      {age}
      {props.children}
    </div>
  );
};
// @contents;
export default Parent;

// rface
