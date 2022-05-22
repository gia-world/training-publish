//## 호이스팅

console.log(add(10, 2)); //실행
// console.log(sub(10, 2)); //실행x (sub is not a function)

function add(x, y) {
  return x + y;
} // 함수 선언문

var sub = function (x, y) {
  return x + y;
}; //함수 표현식 -> 권장
console.log(sub(10, 2)); //실행 12
console.log(sub(10, 2, 3)); //실행 12 : 세번째 인자는 무시?!
