import { useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import MyButton from "./components/MyButton";
// import MyHeader from "./components/MyHeader";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

//프로젝트 기초공사2 6:30
const reducer = (state, action) => {
  let newState = [];
  switch ((action, type)) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = { ...action.data };
      newState=[newItem,...state];
      break;
    }
    case 'REMOVE':{newState=state.filter((it)=>it.id!==action.targetId)
      break;
    }
    case 'EDIT':{
      newState=state.map((it)=>it.id===action.data.id?{...action.date}:it);
      break;
    }
    default:
      return state;
  }
  return newState;
};

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId=useRef(0)
  //CREATE
  //REMOVE
  //EDIT

  // const env=process.env;
  // env.PUBLIC_URL=env.PUBLIC_URL||'';
  return (
    <BrowserRouter>
      <div className="App">
        {/* <MyHeader headText={"App"} left={<MyButton text={"left"} onClick={() => alert("left clicked")} />} right={<MyButton text={"right"} onClick={() => alert("right clicked")} />} />
        <h2>App.js</h2> */}
        {/* <MyButton text={"button"} onClick={() => alert("button clicked")} type={"positive"} />
        <MyButton text={"button"} onClick={() => alert("button clicked")} type={"negative"} />
        <MyButton text={"button"} onClick={() => alert("button clicked")} /> */}
        {/* <img src={process.env.PUBLIC_URL+`/assets/emotion1.png`}/>
        <img src={process.env.PUBLIC_URL+`/assets/emotion2.png`}/>
        <img src={process.env.PUBLIC_URL+`/assets/emotion3.png`}/>
        <img src={process.env.PUBLIC_URL+`/assets/emotion4.png`}/>
        <img src={process.env.PUBLIC_URL+`/assets/emotion5.png`}/> */}
        {/* process.env 어느 위치에 있든 퍼블릭 폴더 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
          {/* <Route path="/diary/" element={<Diary />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
