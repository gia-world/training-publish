// * 즉시 실행 함수

// 익명 즉시 실행
(function () {
  var a = 3;
  var b = 5;
  return a * b;
})();

// * 재귀함수
let count = 0;
const test = () => {
  if (count < 50) {
    count++;
    console.log(count);
    test(); // 함수 내부에서 본인을 다시 부름
  }
};
test();

// * 중첩함수
function outer() {
  var x = 1;
  function inner() {
    var y = 2;
    console.log(x + y);
  }
  inner();
}
outer();

// * 콜백 함수
const testEl = document.querySelector("a");
testEl.addEventListener("click", () => {
  //클릭할 때마다 함수 내부 세계가 재창조
  const a = "ss";
  console.log(a);
});

// * 순수함수
const sum = (a, b) => a + b;
// 값이 변하지 않고, 외부의 영향을 받지 않음

// * 비순수 함수
let count1 = 0;
const sum2 = (a, b) => {
  count1++;
  return a + b + count1;
};
// 외부 상태에 따라 반환값이 달라짐, 외부 상태에 의존

