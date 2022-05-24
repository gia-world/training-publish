import React, { useState } from "react";

const IterationSample = () => {
  // const names=['눈사람','얼음','눈','바람']
  // const nameList=names.map((name,index)=><li key={index}>{name}</li>)
  const [names, setNames] = useState([
    { id: 1, text: "snowman" },
    { id: 2, text: "ice" },
    { id: 3, text: "snow" },
    { id: 4, text: "wind" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      // push는 기존 배열 자체를 변경, concat은 새로운 배열을 생성
      //리액트 컴포넌트의 성능 최적화를 위해 불변성 유지할 것.
      // 불변성 유지 : 기존 상태를 그대로 두면서 새로운 값을 상태로 설정
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
