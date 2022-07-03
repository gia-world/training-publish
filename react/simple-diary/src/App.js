import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
// import OptimizeTest from "./OptimizeTest";
// import Lifecycle from "./Lifecycle";

// const dummyList = [
//   {
//     id: 1,
//     author: "Gia1",
//     content: "Hello world 1",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "Gia2",
//     content: "Hello world 2",
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "Gia3",
//     content: "Hello world 3",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
// ];

const App = () => {
  // function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    // console.log(res);
    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    // console.log(initData);
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData((data) => [newItem, ...data]);
  }, []);

  const onRemove = (targetID) => {
    // console.log(`${targetID}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetID);
    // console.log(newDiaryList);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  const getDiaryAnalysis = useMemo(() => {
    // console.log("일기 분석 시작");
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      {/* <OptimizeTest /> */}
      {/* <Lifecycle /> */}
      <DiaryEditor onCreate={onCreate} />
      <p>total : {data.length}</p>
      <p>number of good day : {goodCount}</p>
      <p>number of bad day : {badCount}</p>
      <p>Ratio of good and bad day : {goodRatio}</p>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};

export default App;
