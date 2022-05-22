// !! 스코프 (변수의 유효범위)
// 스코프 체이닝 : 제일 가까운 것부터 체크해서 올라감

import Footer from "../react-crash/react-task-tracker/src/components/Footer";

// ! 블록레벨스코프 ( const, let )
// const, let은 초기화가 안되서 오류가 뜬다. missing initializer in const declaration
const a = 10; //글로벌
{
  const b = 11; // 블록 내부
  {
    const c = 12; //블록 내부의 내부
    const b = 20;
    {
      const a = 1; // 블록 내부의 내부의 내부
      console.log(a); // 1
    }
  }
  const a = 1;
}

// ! 함수레벨 스코프 ( var ) : 함수 내부에서만
function aa() {
  // 이 위치에서 var name; 호이스팅
  function aa_1() {
    console.log(a_name);
  }
  aa_1(); // undefined
  var a_name = "Gia";
  aa_1(); // Gia
}
aa();

// ! name space issue = 스코프가 필요한 이유
// 이름 공간을 선언하여 다른 공간과 구분
var name = "Gia";

const test = () => {
  const name = "Gian";
  const test_1 = (name) => {
    const name = "Giannie"; // 우선순위가 더 높음
    console.log(name); //Giannie
  };
  test_1();
};
test();

// ! 렉시컬 스코프
// 예제
var x = 1;
function foo() {
  var x = 10;
  bar();
}
function bar() {
  console.log(x);
}
foo(); //1
bar(); //1

//예제2
function foo1() {
  function bar1() {
    console.log(x1);
  }
  bar1();
  var x1 = 10;
}
var x1 = 1;
foo1();

// ! 변수의 life cycle
var x2 = "global";
function foo2() {
  console.log(x2);
  var x2 = "local";
}
foo2();

// ! 모듈패턴
var Counter = (function () {
  var num = 0;
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();
console.log(Counter.num) //undefined
console.log(Counter.increase()) //1
console.log(Counter.increase()) //2
console.log(Counter.decrease()) //1
console.log(Counter.decrease()) //0

// ! TDZ : Temporal Dead Zone
// 1. 선언단계 (런타임 이전, 변소 초기화 x)
// 2. TDZ : 변수 참조 x
// 3. 초기화단계
// 4. 할당 단계

//예제
// 선언 실행
// TDX
console.log(foo); // referenceError;foo is not defined

let foo; //초기화 실행
console.log(foo); // undefined

foo = 1; //할당 실행
console.log(foo); //1
