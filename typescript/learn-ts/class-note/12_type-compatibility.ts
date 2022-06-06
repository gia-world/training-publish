{
  //특정 타입이 다른 타입에 잘 맞는지 점검

  //*structual typing : 코드 구조 관점에서 타입이 서로 호환되는지 여부를 판단

  //**인터페이스
  interface Developer {
    name: string;
    skill: string;
  }
  interface Person {
    name: string;
  }
  class Person1 {
    name: string;
  }
  let developer: Developer;
  let person: Person;
  //   developer = person; //error
  //   developer = new Person1(); //error
  // 우측의 타입이 더 많은 속성을 갖거나 구조적으로 컸을때만 호환이 가능

  //**함수
  let add = function (a: number) {
    // ...
  };
  let sum = function (a: number, b: number) {
    // ...
  };
  add = sum; //error
  sum = add; //working

  //**제네릭
  interface Empty<T> {
    //...
  }
  let empty1: Empty<string>;
  let empty2: Empty<number>;
  empty1 = empty2;
  empty2 = empty1;

  interface NotEmpty<T> {
    data: T;
  }
  let notempty1: NotEmpty<string>;
  let notempty2: NotEmpty<number>;
  //   notempty1 = notempty2; //error
  // 구조적인 타입이 다를 경우 호환되지 않음
}
