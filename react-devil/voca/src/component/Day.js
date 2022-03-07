import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day() {
  //dummy.words
  const day = 2;
  const wordList = dummy.words.filter((word) => word.day === day);

  const a = useParams();
  console.log(a);
  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
