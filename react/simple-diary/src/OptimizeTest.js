import React, { useEffect, useState } from "react";

// const Textview = React.memo(({ text }) => {
//   useEffect(() => {
//     console.log(`update :: Text:${text}`);
//   });
//   return <div>{text}</div>;
// });

// const Countview = React.memo(({ count }) => {
//   useEffect(() => {
//     console.log(`update :: Count:${count}`);
//   });
//   return <div>{count}</div>;
// });

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA update :: count: ${count}`);
  });
  return <div>{count}</div>;
});
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB update :: count: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  // return true // 이전 프롭스, 현재 프롭스가 같다 -> no rerender
  // return false // 다르다 -> rerender
  // if (prevProps.obj.count === nextProps.obj.count) {
  //   return true;
  // }
  // return false;
  return prevProps.obj.count === nextProps.obj.count;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  // const [count, setCount] = useState(1);
  // const [text, setText] = useState("");

  // return (
  //   <div style={{ padding: 50 }}>
  //     <div>
  //       <h2>count</h2>
  //       <Countview count={count} />
  //       <button onClick={() => setCount(count + 1)}>+</button>
  //     </div>
  //     <div>
  //       <h2>text</h2>
  //       <Textview text={text} />
  //       <input value={text} onChange={(e) => setText(e.target.value)} />
  //     </div>
  //   </div>
  // );

  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A</button>
      </div>
      <div>
        <h2>counter B</h2>
        {/* <CounterB obj={obj} /> */}
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
