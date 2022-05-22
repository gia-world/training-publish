import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";
import { useState } from "react";

export default function Day() {
  //dummy.words
  // const day = 2;
  // const day=useParams().day;
  const { day } = useParams();
  // const wordList = dummy.words.filter((word) => word.day === Number(day));
  const [words, setWords] = useState([]);

  const a = useParams();
  console.log(a);
  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
