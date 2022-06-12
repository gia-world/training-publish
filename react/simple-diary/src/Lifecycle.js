import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("mount");
    return () => {
      //unmount 시점에 실행
      console.log("unmount");
    };
  }, []);
  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  //   const [count, setCount] = useState(0);
  //   const [text, setText] = useState("");

  //   useEffect(() => {
  //     console.log("mount!");
  //   }, []);

  //   useEffect(() => {
  //     console.log("update");
  //   });

  //   useEffect(() => {
  //     console.log(`count is updated : ${count}`);
  //     if (count > 5) {
  //       alert("count가 5를 초과했습니다. 1로 초기화 합니다");
  //       setCount(1);
  //     }
  //   }, [count]);
  //   useEffect(() => {
  //     console.log(`text is updated : ${text}`);
  //   }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div> */}
    </div>
  );
};

export default Lifecycle;
