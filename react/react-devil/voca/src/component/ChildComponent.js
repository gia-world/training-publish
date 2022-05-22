import React from "react";

// const ChildComponent = (props) => {
//   console.log(props);
//   return (
//     <div>
//       {props.name && props.name !== "noname" && (
//         <div>{props.name}님이시군요.</div>
//       )}
//       {props.name === "noname" && <div>hi noname</div>}
//     </div>
//   );
// };
const ChildComponent = ({ name }) => {
  return (
    <div>
      {name && name !== "noname" && <div>{name}님이시군요.</div>}
      {name === "noname" && <div>hi noname</div>}
    </div>
  );
};
export default ChildComponent;
