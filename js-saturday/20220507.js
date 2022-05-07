// * object 생성자 함수

const a = function () {};
const person = new a();
console.log(person); // a {}

//함수 앞에 new 를 붙이면 "객체"를 반환한다.
// 생성자 함수는 첫글자를 대문자로 사용
// 인스턴스instance: 생성자 함수에 의해 생성된 객체

const strObj = new String("Lee");
console.log(strObj); // String {"Lee"}
console.log(typeof strObj); //object
console.log(Array.isArray(strObj)); //false
