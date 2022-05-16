import React, { useState } from "react";

const EventPractice = () => {
  //   const [username, setUsername] = useState("");
  //   const [message, setMessage] = useState("");

  //   const onChangeUsername = (e) => {
  //     setUsername(e.target.value);
  //   };
  //   const onChangeMessage = (e) => {
  //     // console.log(e.target.value)
  //     setMessage(e.target.value);
  //   };

  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  
  const onChange = (e) => {
    const nextForm = {
      ...form, //기존의 form 내용을 가져온 뒤
      [e.target.name]: e.target.value, //원하는 값 덮어 씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    //   setMessage("");
    //   setUsername("");
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>EventPractice</h1>
      <input type="text" name="username" placeholder="username" value={username} onChange={onChange} />
      <input type="text" name="message" placeholder="enter anything" value={message} onChange={onChange} onKeyPress={onKeyPress} />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
