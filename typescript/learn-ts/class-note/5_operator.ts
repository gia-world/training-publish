{
  {
    //* Union type
    let seho: string | number | boolean;
    //*Intersection type
    let capt: string & number & boolean;

    // function logMsg(value: string){
    //     console.log(value)
    // }
    // logMsg('hello')
    // logMsg(100) // 오류

    function logMsg(value: string | number) {
      console.log(value);
      // 타입가드
      if (typeof value === "number") {
        value.toLocaleString();
      }
      if (typeof value === "string") {
        value.length;
      }
      throw new TypeError("value must be string or number");
    }
    logMsg("hello");
    logMsg(100);

    interface Developer1 {
      name: string;
      skill: string;
    }

    interface Person1 {
      name: string;
      age: number;
    }

    // function askSomeone(someone: Developer1 | Person1) {
    //   someone.name;
    //   // someone.skill //오류
    //   // someone.age //오류
    // }

    // askSomeone({name:'디벨로퍼',skill:'웹개발'})
    // askSomeone({name:'캡틴',age:100})

    function askSomeone1(someone: Developer1 & Person1) {
      someone.name;
      someone.skill;
      someone.age;
    }

    askSomeone1({ name: "디벨로퍼", skill: "웹개발", age: 35 });
  }
}
