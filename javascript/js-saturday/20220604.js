{
  //* this
  // 인프런 코어자바스크립트 실행컨텍스트&this 강의 보기
  const a = {
    name: "gia",
    sayName: function () {
      this.age = 30;
      console.log(this);
      const test = () => {
        console.log(this);
      };
      test();
    },
  };
  a.sayName(); // {name: 'gia', age: 30, sayName: ƒ} *2
  // 화살표함수는 상단의 this를 따라감

  const b = {
    name: "gia",
    sayName: () => {
      this.age = 30;
      console.log(this);
      const test = () => {
        console.log(this);
      };
      test();
    },
  };
  b.sayName(); // Window {0: Window, 1: global, window: Window, self: Window, document: document, name: '', location: Location, …} *2

  //*this 바인딩
  let name1 = "a";
  const f = () => {
    console.log(name1, this);
    // [[[['a']]]]
  };
  f(); //윈도우
  name1 = "b";
}
