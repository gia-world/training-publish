// interface Person{
//     name:string;
//     age:number
// }
type Person = {
  name: string;
  age: number;
};

var gia: Person = {
  name: "gia",
  age: 35,
};

type MyString = string;
var str1: MyString = "hello";

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}
