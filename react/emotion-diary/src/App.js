import React, { useEffect, useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import MyButton from "./components/MyButton";
// import MyHeader from "./components/MyHeader";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      // const newItem = { ...action.data };
      // newState = [newItem, ...state];
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  localStorage.setItem('diary',JSON.stringify(newState))
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(()=>{
    const localData=localStorage.getItem('diary')
    if(localData){
      const diaryList=JSON.parse(localData).sort((a,b)=>parseInt(b.id)-parseInt(a.id)) //내림차순 정렬
      dataId.current=parseInt(diaryList[0].id)+1

      dispatch({type:'INIT',data:diaryList})
    }
  },[])

  const dataId = useRef(0);
  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };
  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  // const env=process.env;
  // env.PUBLIC_URL=env.PUBLIC_URL||'';
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
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
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
              {/* <Route path="/diary/" element={<Diary />} /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
