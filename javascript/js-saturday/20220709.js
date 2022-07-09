{
  class 새 {
    constructor(name) {
      this.name = name;
      this.leg = 2;
    }
    fly() {
      console.log("fly");
    }
  }

  class 참새 extends 새 {
    constructor(...args) {
      {
        super(...args);
      }
      this.leg = 3;
      this.털색 = "brown";
    }
  }
  const 참새1 = new 참새("참새");
  console.log(참새1);
  console.log(참새1.__proto__ === 새.prototype);

  const children = [];
  const getChildren = (limit) => {
    for (let index = 0; index < limit; index++) {
      children.push({ age: 12, name: "xx", height: Math.floor(150 * Math.random()) });
    }
  };
  getChildren(40);
  console.log(children);

  // 대상을 추상화해서 필요한 것만 뽑아냄
  class child {
    constructor(name, height) {
      this.name = name;
      this.height = height;
    }
  }
}

{
  //super를 참조하면 슈퍼클래스의 메서드를 호출할 수 있다
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    hi() {
      console.log("hi from super");
    }
  }
  class Student extends Person {
    constructor(...args) {
      {
        super(...args);
      }
    }
    hi() {
      console.log("hi from sutudent");
      super.hi();
    }
  }
  const a1 = new Student("aaa", "32");
  a1.hi();
  console.log(a1);
  console.log(a1.hi());
}
