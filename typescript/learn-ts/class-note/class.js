//* ES6 이전
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var capt = new Person("캡틴", 100);

//* ES2015 (ES6)부터 사용되는 문법
class Person {
  //클래스 로직
  //역할: 인스턴스를 만들어줌
  constructor(name, age) {
    //초기화 메서드
    console.log("생성되었습니다.");
    this.name = name;
    this.age = age;
  }
}

var gia = new Person("gia", 30); // 생성되었습니다.
console.log(gia); // Person { name: 'gia', age: 30 }
