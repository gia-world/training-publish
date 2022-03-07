import { useState } from "react";
import UserName from "./UserName";

export default function Hello({ age }) {
  // console.log(props);
  const [name, setName] = useState("Mike");
  // const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인" : "미성년자";

  return (
    <div>
      <h2 id="name">
        {name}({age}) : {msg}
      </h2>
      <UserName name={name} />
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
          // setAge(age + 1);
        }}
      >
        Change
      </button>
    </div>
  );
}
