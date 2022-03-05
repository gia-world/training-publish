// const Hello=function(){
//     <p>Hello</p>;
// }
// const Hello=()=>{
//     <p>Hello</p>;
// }
// export default Hello;

import World from "./World";

export default function Hello() {
  return (
    <div>
      <h1>Hello</h1>
      <World />
      <World />
    </div>
  );
}
