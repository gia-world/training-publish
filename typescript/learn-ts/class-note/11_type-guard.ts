{
  //* 타입단언으로만 사용할 때 문제점(w/o 타입가드)
  interface Developer {
    name: string;
    skill: string;
  }
  interface Person {
    name: string;
    age: number;
  }

  function introduce(): Developer | Person {
    return { name: "Tony", age: 33, skill: "Iron Making" };
  }
  let tony = introduce();
  //   console.log(tony.skill) // 공통된 프로퍼티만 접근 가능
  console.log(tony.name);

  if ((tony as Developer).skill) {
    let skill = (tony as Developer).skill;
    console.log(skill);
  } else if ((tony as Person).age) {
    let age = (tony as Person).age;
    console.log(age);
  }

  //* 타입 가드 정의
  function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
  }
  if (isDeveloper(tony)) {
    console.log(tony.skill);
  } else {
    console.log(tony.age);
  }
}
