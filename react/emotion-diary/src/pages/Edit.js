import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log("id: ", id);
  const mode = searchParams.get("mode");
  console.log("mode: ", mode);
  return (
    <div>
      <h1>Edit</h1>
      <p>This is Edit</p>
      <button onClick={() => setSearchParams({ who: "gia" })}>QS 바꾸기</button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
