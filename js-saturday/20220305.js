// ## 논리합 (or)
const var1 = true; //100번 돌려서 10% 트루가 예상 됨
const var2 = false; // 100번 돌려서 90% 트루가 예상됨
const var3 = false; // 100번 돌려서 1% 트루가 예상됨

const result = var2 || var1 || var3;
// 조건 1,2,3 중에 하나라도 있다면-트루라면, 동작해라.
// 논리합 = 둘중에 하나면 트루라면 트루,
// 여러개인 경우 앞에서 이미 계산 끝남

if (result) {
  console.log("if문 동작");
}

// ## 논리곱 (AND)
const var1 = true; //100번 돌려서 10% 트루가 예상 됨
const var2 = false; // 100번 돌려서 90% 트루가 예상됨
const var3 = false; // 100번 돌려서 1% 트루가 예상됨

const result = var1 && var2 && var3;

if (var1 === false) {
  if (var2 === false) {
    if (var3 === false) {
      console.log("if문 작동");
    }
  }
}

if (result) {
  console.log("if문 동작");
}

// ## 논리부정연산자
if (!false) {
  console.log("if문 동작"); //working
}

// 0을 false로 취급하기도 한다 -> !0 ==true

//## 단축평가
const cat = null;
const myName = cat && "츠키"; // 캣이 있어야 이름이 츠키다.
// 캣이 null 이면 false로 반환
// 캣이 트루면 츠키 반환

//## typeof 연산자
const myName = 123456;
console.log(typeof myName); //"number"
if (typeof myName === "number") {
  console.log("이름에 문자를 입력해주세요.");
} //-> validate 유효성 검사

//자바스크립트에서 typeof null은 object로 읽힌다.
// 값이 null 타입인지 확인하려면 === 사용하기

// ## 연산자의 부수효과
let count = 0;
count++;
count--;
count = 10;
// 이렇게 기존의 값에 영향을 준다.

// ## 연산자 우선 순위
const sum = (a: any, b: any): any => {
  return a + b;
};
const resultSum = sum(sum(sum(1, 2), sum(1, 2)), sum(1, 2), sum(1, 2));

// ## switch 문
const currentName = "hello";

if (currentName === "Gia") {
  console.log("산");
} else if (currentName === "Gio") {
  console.log("바다");
} else if (currentName === "Giannie") {
  console.log("강");
} else {
  console.log("집");
}
// 이미 내가 받을 값이 무엇인지 혹은 여러개인것을 알고 있을 때 표현방식
switch (currentName) {
  case "Gia":
    console.log("산");
    break;
  case "Gio":
    console.log("바다");
    break;
  case "Giannie":
    console.log("강");
    break;

  default:
    throw new Error(); // 고의로 에러 내기
    console.log("집");
    break;
}

// ## 반복문
for (let index = 0; index < 10; index++) {
  console.log(
    `현재 index : ${index}
    index < 10 조건: ${index < 10 ? "true" : "false"}
    루프 후 값 : ${index > 10 ? index + 1 : "종료"}
    `
  );
}

const people = [
  { id: "oo1", age: 33, eyes: true },
  { id: "oo2", age: 33, eyes: true },
  { id: "oo3", age: 33, eyes: true },
  { id: "oo4", age: 33, eyes: true },
  { id: "oo5", age: 33, eyes: true },
  //...
];

for (let i = 0; i < people.length; i++) {
  //people.length = 7
  people[i].hobby = i;
  console.log("people[i].id");
}

// index 선택하면 같은 값 다 잡힐때 다음 값으로 넘어가는 방법?
