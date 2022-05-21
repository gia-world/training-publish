// * 프로토 타입

function a() {
  // 클래스 포함, constructor
}

() => {
  // non-constructor, 클래스 불포함
  // 가급적 권장
  // 생성자를 이용해 찍어낼거면 class 사용해라
};


// ** 생성자 함수
function Person(name) {
  //   return {
  //     name: "gia",
  //     sayMyName: function () {
  //       console.log(this.name);
  //     },
  //   };
  this.name = name;
} //선언됨과 동시에 프로토타입을 가짐 (객체구조)
// 첫글자 대문자 = 클래스처럼 사용 = 생성자

// ** 생성자 함수가 생성한 모든 인스턴스가 공유해서 사용할 수 있도록
// 공통의 구조화
Person.prototype.sayMyName = function () {
  console.log(this.name);
};

// ** 인스턴스 생성
const personResult1 = new Person("지아1"); //{name:"gia"}
const personResult2 = new Person("지아2"); //{name:"gia"}
const personResult3 = new Person("지아3"); //{name:"gia"}

console.log(personResult3.sayMyName()); //지아3
console.log(personResult1.prototype); // 생성할때 사용. 접근 불가
console.log(personResult1.__proto__); // 읽을때 사용. 접근자 프로퍼티