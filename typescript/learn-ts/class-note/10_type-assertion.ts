{
  //* 타입 단언
  let a;
  a = 20;
  a = "a";
  let b = a as string;

  // DOM API 조작
  //   let div = document.querySelector("div");
  //   if (div) {
  //     div.innerText;
  //   }
  let div = document.querySelector("div") as HTMLDivElement;
  div.innerText;
}
