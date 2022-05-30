// // function logText(text) {
// //   console.log(text);
// //   return text;
// // }

// // 암묵적으로 any로 작동
// // logText(10); // 10
// // logText("하이"); //하이
// // logText(true); // true

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText("hi");
// //함수를 호출할 때 파라미터의 타입을 지정하면서 넘김
// // 파라미터의 타입은 문자열이고, 그 타입을 가지고 넘어감
// // 자동으로 제네릭은 스트링으로 추론됨

// logText<string>("hi");
// // 파라미터의 타입을 넘길때 스트링이라고 제네릭 지정

// //*
// function logText1(text: string) {
//   console.log(text);
//   text.split("").reverse().join("");
//   return text;
// }
// logText1(10); // error
// logText1("하이"); //하이
// logText1(true); // error

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// logNumber(10);
// logNumber("a"); // error
// logNumber(true); // error

// function logText2(text: string | number) {
//   console.log(text);
//   return text;
// }
// const aa = logText2(10);
// aa.split(""); //error, string과 number 모두 충족하는 메서드만 가능
// logText2("a");
//

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
const str2 = logText<string>("abc");
str2.split("");
const login = logText<boolean>(true);
