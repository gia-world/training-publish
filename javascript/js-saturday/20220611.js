{
  //* this
  const a = () => {
    console.log(this);
  };
  const b = {
    test: {
      a() {
        //test
        const b = () => {
          console.log(this); //나는 화살표함수라서 디스를 받지 않아
        };
        b();
      },
    },
  };
  b.test.a();

  //   const testObj = {
  //     name: "gia",
  //     sayMyName() {
  //       console.timeLog(`my name is ${this.name}`);
  //       // 내가 속한 testObj를 가리키기 위해
  //     },
  //   };

  // 안 좋은 예
  const name1 = "gia";
  function sayMyName() {
    console.timeLog(`my name is ${name1}`);
  }
}
{
  //* 객체 지향적 프로그래밍의 관점
  const 지아방 = {
    지아: {
      체력: 100,
    },
    가구: {
      침대: "시몬스",
      옷장: "이케아",
    },
    지저분한요소: {
      쓰레기: 3,
      먼지: "10그람",
    },
    더어지르기() {
      console.log(`현재 지아 체력: ${this.지아.체력}
        현재 지아방 지저분한 요소: 쓰레기 ${this.지저분한요소.쓰레기}, 먼지 ${this.지저분한요소.먼지}`);
      this.지아.체력 -= 1;
      this.지저분한요소.쓰레기 += 1;
      console.log(`방을 더 어질러버렸습니다!
      현재 지아 체력: ${this.지아.체력}
      현재 지아방 지저분한 요소: 쓰레기 ${this.지저분한요소.쓰레기}, 먼지 ${this.지저분한요소.먼지}`);
    },
    방전체청소() {
      this.지저분한요소.먼지 = 0;
      this.지저분한요소.쓰레기 = 0;
    },
  };
  지아방.더어지르기();

  //* 클래스 기본 문법
  // 객체로 묶은 것을 찍어낼 수 있음
  class Human {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    sayMyName() {}
  }
  const person1 = new Human("gia", 34);
  const person2 = new Human("ji", 33);
  console.log(person1);
  console.log(person2);

  const 지아의역사 = () => {
    const result = [];
    for (let index = 0; index < 99; index++) {
      result.push([new Human("지아", index)]);
    }
    return result;
  };
  console.log(지아의역사());
}
{
  //* 실행컨텍스트
  const name = "aa";
  const b = {
    name: "aa",
  };
  // 전역코드 : name, b
  // b.name x

  const testF = () => {
    const a = () => {};
    // a는 아직 존재하지 않지만 식별자와 종류는 알고있다.
  };

  const avengers = function (nb1, nb2) {
    const obs = ["iron man", "thor"];
    console.log(`Avengers are ${obs}, and ${nb1}, ${nb2} joined`);
    console.log(`Avengers are ${obs}, and ${[...arguments]} joined`);
    console.log(arguments);
  };
  avengers("spiderman", "black panther", "miss marvel");

  //*소스코드의 평가 (런타임)
  //실행컨텍스트를 생성
  // 1. 변수 함수 등의 선언문만 먼저 실행
  // 2. 그렇게 실행된 변수나 함수 식별자를 키 값으로 씀
  // 3. 실행컨텍스트가 관리하는 렉시컬 환경의 환경 레코드에 등록
  // 렉시컬 환경 : 실행할 스코프 범위 안에 있는 변수와 함수를 프로퍼티로 저장하는 특별한 객체
  //* 소스코드의 실행
  //평가가 끝나면,
  // 1. 식별자 키 값이 있는지 확인 (선언되었는지)
  // 2. 있으면 할당
}
