// # 객체

const obj1 = {}; //객체1
const obj2 = {}; //객체2
console.log({} === {}); //false
//객체리터럴 {} 을 만들 때마다 새로운 객체 생성, 매번 선언될 때마다 다르다.
console.log(obj1 === obj2); //false

// 메모리 영역

const obj3 = {
  name: "gia",
  age: 35,
};

// obj3 : @a88 (객체) -> @a100~@a200 (객체의 범위)
// obj3.name : @a100(name) -> gia

// obj1 : @a89 (객체) -> @a201~@a300 (객체의 범위)
// obj2 : @a90 (객체) -> @a301~@a400 (객체의 범위)
// 똑같이 {} 이어도 주소값이 다름

//코어자바스크립트 1~20 참고

// ## 객체는 왜 사용할까?

const name = "min";
const age = 32;
const getAgeMin = () => {
  return `${name}의 나이: ${age}`;
};
console.log(getAgeMin());

const min = {
  name: "min", //프로퍼티 -> 키:값value
  age: 32, //프로퍼티
  getName: function () {
    //메서드
    return `${this.name}의 나이: ${this.age}`;
  },
  family: {
    father: {
      name: "아빠",
      age: 60,
      getName: function () {
        return `${this.name}의 나이: ${this.age}`;
      },
    },
    mother: {
      name: "엄마",
      age: 56,
      getName: function () {
        return `${this.name}의 나이: ${this.age}`;
      },
    },
  },
};
console.log(min.getName());
console.log(min.family.father);
console.log(min.family.father.getName());

//함수와 메서드의 차이
//객체 안에 함수 정의하면 메서드
// 키: 함수 -> 메서드

// 프로퍼티 키 동적 생성 : [] 이용
var obj = {};
var key = "hello";
obj[key] = "world"; //{hello : "world"}
// hello라는 key에 world라는 value를 할당해라
// obj.key = "world"; // {key : "world"}
console.log(obj);

for (let index = 0; index < 20; index++) {
  obj[`key${index}`] = `value${index}`;
  // obj.index = index; -> 접근 : 인덱스라는 키 하나에 인덱스라는 값만 계속 변경
}
console.log(obj);

// [] 를 이용한 접근도 가능
console.log(min["family"]["father"]["age"]); //60

// 프로퍼티 동적 생성
var person = {
  name: "Lee",
};
person.age = 20;
// age라는 프로퍼티가 존재하지 않으므로 person객체 내부에 age 프로퍼티가 동적 생성, 값이 할당된다.
console.log(person);

delete person.age; // 프로퍼티 삭제
console.log(person);

//프로퍼티 생성 시
// 해당 프로퍼티가 존재하지 않으면 생성
// 있으면 새로운 값 할당
//1. obj.key = 'value';
// key에 문자열만
//2. obj[key]='value';
// key에 변수를 받을 수 있음, 응용 가능
