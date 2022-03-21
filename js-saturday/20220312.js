// ## while 문
const limit = 50;
let current = 0;
while (current < limit) {
  console.log("work");
  current++;
  console.log("limit:", limit, "curret:", current);
}

//예제
const $el = document.querySelector(".start");
let currentEl = $el;

//innerText의 값이 2가 아닐때 계속 돌게하기
while (currentEl.innerText !== 2) {
  currentEl = currentEl.parentElement;
}

//주의점
while ("무조건트루") {
  console.log("무한루프");
}

// ## 레이블문 (중첩 for문 일때 사용, 개념만 이해하기)
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) break outer;
  }
} // 여기로 탈출한다.

//## continue문
const arr = [1, 2, 3, 4, 5, 6, 8];
for (let index = 0; index < array.length; index++) {
  if (arr[index] < 5) {
    continue;
    //바로 다시 처음으로 돌아감
    console.log("컨티뉴 아래에 있어요"); // 실행 안됨
  }
  console.log(arr[index]);
  // 5,6,8만 찍힘
}

// ## 타입변환
console.log("" == undefined); //false

if ("") {
  //falsy
  console.log("not working");
} else {
  console.log("working");
}

//암묵적 타입변환 implicit coercion
console.log("가격은" + 52000 + 20000 + "원입니다"); //가격은 5200020000원입니다.
console.log("가격은" + (52000 + 20000) + "원입니다"); //가격은 72000원입니다.
// 실수가 자주 발생할 수 있음
console.log("가격은" + Number(52000 + 20000) + "원입니다"); //가격은 72000원입니다.

const productPrice = 52000;
console.log(typeof productPrice.toString()); //string

//falsy: false, undefined, null, 0, -0, NaN, ""
//truthy: falsy값 6개 이외의 모든 값

//명시적 타입변환
//문자열 타입으로
//string 생성자 함수
String(1); // "1"
String(NaN); //"NaN"
String(true); //"true"

//숫자타입으로
parseInt("내나이 100살"); //NaN
parseInt("1000.01235"); // 1000 (type number)

//불리언타입으로
Boolean(""); //false
Boolean(null); //false
Boolean("false"); //true

// ## 단축평가
"cat" && "dog"; //"dog"
// "cat" -> truty
// "cat" && 00 -> 캣이 있다면 00이야

let myPet;
const myPetName = myPet && "츠키"; //undefined
const myPetName = myPet || "츠키"; //츠키
// myPet || 00 -> mypet이 없으면 기본값이 00이야

let myPet = "고양이";
const myPetName = myPet && "츠키"; //츠키

const userName = "민해";
const msg = userName || "고객";
console.log(`어서오세요 ${msg}님`);
// userName 이 null 이거나 falsy면 고객님 출력
// user name 값이 있으면 값 출력

const guys = [
  { name: "YD", money: 500000 },
  { name: "Bill", money: 400000 },
  { name: "Andy", money: 300000 },
  { name: "Roky", money: 200000 },
];
const richNames = guys
  .filter((man) => man.money > 300000)
  .map((man) => man.name);
console.log(richNames); // ["YD", "Bill"]
