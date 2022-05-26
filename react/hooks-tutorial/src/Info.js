import React, { useState, useEffect, useReducer } from "react";


function reducer(state,action){
  return{
    ...state,
    [action.name]:action.value
  }
}

const Info = () => {
  // const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");

  // //   useEffect(() => {
  // //     console.log("렌더링이 완료되었습니다");

  // //     console.log({
  // //       name,
  // //       nickname,
  // //     });
  // //   });

  // // useEffect(()=>{
  // //     console.log('마운트될 때만 실행됩니다.')
  // // },[])

  // // useEffect(()=>{
  // //     console.log(name)
  // // },[name])

  // useEffect(() => {
  //   console.log("effect");
  //   console.log(name);
  //   return () => {
  //     console.log("cleanup");
  //     console.log(name);
  //   };
  // }, []);

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };

  const [state, dispatch] = useReducer(reducer, {
    name:'',
    nickname:''
  })
  const {name,nickname}=state;
  const onChange=e=>{
    dispatch(e.target)
  }

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
        {/* <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} /> */}
      </div>
      <p>
        <strong>name:</strong> {name}
      </p>
      <p>
        <strong>nickname: </strong> {nickname}
      </p>
    </div>
  );
};

export default Info;
