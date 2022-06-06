{
  //* 타입 추론 기본 1
  let a = 10;
  let b = "abc";
  function getC(c = 10) {
    var d = "hi";
    return c + d;
  }

  //* 타입 추론 기본 2
  interface Dropdown<T> {
    value: T;
    title: string;
  }
  let shoppingItem: Dropdown<string> = {
    value: "abc",
    title: "hello",
  };
}
{
  //* 타입 추론 기본 3
  interface Dropdown<T> {
    value: T;
    title: string;
  }
  interface DetailedDropdown<K> extends Dropdown<K> {
    // 관행적으로 T를 컨벤션으로 사용하나 구분을 주기 위해 K로
    description: string;
    tag: K;
  }
  let detailedItem: DetailedDropdown<string> = {
    //   let detailedItem: DetailedDropdown<number> = { // error
    title: "abc",
    description: "ab",
    value: "aa",
    tag: "aa",
  };
}
{
  //* Best Common Type
  // 모든 값을 유니언으로 묶어 나간다
  let arr = [1, 2, true, "a"];
}
