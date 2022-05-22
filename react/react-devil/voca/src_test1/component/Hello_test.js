// const Hello=function(){
//     <p>Hello</p>;
// }
// const Hello=()=>{
//     <p>Hello</p>;
// }
// export default Hello;

// import World from "./World";

export default function Hello() {
  function showName() {
    console.log("Mike");
  }
  function showAge(age) {
    console.log(age);
  }
  function showText(txt) {
    console.log(txt);
  }
  return (
    <div>
      <h1>Hello</h1>
      {/* <World /> */}
      <button onClick={showName}>Show name</button>
      <button
        onClick={() => {
          showAge(10);
        }}
      >
        Show age
      </button>
      <input
        type="text"
        onChange={(e) => {
          //  console.log(e.target.value);
          const txt = e.target.value;
          showText(txt);
        }}
      />
    </div>
  );
}
