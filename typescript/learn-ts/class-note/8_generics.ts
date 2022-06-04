{
  // // function logText(text) {
  // //   console.log(text);
  // //   return text;
  // // }

  // // 암묵적으로 any로 작동
  // // logText(10); // 10
  // // logText("하이"); //하이
  // // logText(true); // true

  // function logText<T>(text: T): T {
  //   console.log(text);
  //   return text;
  // }

  // logText("hi");
  // //함수를 호출할 때 파라미터의 타입을 지정하면서 넘김
  // // 파라미터의 타입은 문자열이고, 그 타입을 가지고 넘어감
  // // 자동으로 제네릭은 스트링으로 추론됨

  // logText<string>("hi");
  // // 파라미터의 타입을 넘길때 스트링이라고 제네릭 지정

  // //*
  // function logText1(text: string) {
  //   console.log(text);
  //   text.split("").reverse().join("");
  //   return text;
  // }
  // logText1(10); // error
  // logText1("하이"); //하이
  // logText1(true); // error

  // function logNumber(num: number) {
  //   console.log(num);
  //   return num;
  // }

  // logNumber(10);
  // logNumber("a"); // error
  // logNumber(true); // error

  // function logText2(text: string | number) {
  //   console.log(text);
  //   return text;
  // }
  // const aa = logText2(10);
  // aa.split(""); //error, string과 number 모두 충족하는 메서드만 가능
  // logText2("a");
  //

  function logText<T>(text: T): T {
    console.log(text);
    return text;
  }
  const str2 = logText<string>("abc");
  str2.split("");
  const login = logText<boolean>(true);

  //* 인터페이스에 제네릭을 선언하는 방법
  interface Dropdown {
    value: string;
    selected: boolean;
  }

  // const obj: Dropdown = { value: 10, selected: false }; // value에 숫자 x
  const obj: Dropdown = { value: "abc", selected: false };

  interface Dropdown2<T> {
    value: T;
    selected: boolean;
  }
  // const obj2:Dropdown2<number>={value:'abc',selected:false} //error
  const obj2: Dropdown2<string> = { value: "abc", selected: false };
  //인터페이스에 제네릭을 선언해서 내부 요소의 타입을 선언 시점에 지정할 수 있다

  //* 제네릭의 타입 제한
  function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) {
      console.log(text);
    });
    return text;
  }
  logTextLength<string>(["hi", "abc"]);

  //* 제네릭 타입제한 2 - 정의된 타입 이용하기
  interface LengthType {
    length: number;
  }
  function logTextLength1<T extends LengthType>(text: T): T {
    // interface에 있는 건 무조건 받아온다.
    text.length;
    return text;
  }

  logTextLength1("a"); //문자열은 length를 가지고 있기때문에 수용
  // logTextLength1(10); // error, number는 length를 가지고 있지않음
  logTextLength1({ length: 10 }); //length 속성이 들어간 객체도 수용가능

  //* 제네릭 타입 제한 3 - keyof
  interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
  }
  function getShoppingItemOption<T extends keyof ShoppingItem>(
    itemOption: T
  ): T {
    // interface의 key 중에 한가지만 들어올 수 있다
    return itemOption;
  }
  // getShoppingItemOption(10);
  // getShoppingItemOption<string>("a");
  getShoppingItemOption("name");
}
