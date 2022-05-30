{
  enum Shoes {
    Nike = "나이키",
    Adidas = "아디다스",
  }
  //* 초기화를 따로 하지 않으면 자동으로 숫자형 값으로 입력됨
  let myShoes = Shoes.Nike;
  console.log(myShoes);

  //예제
  enum Answer {
    Yes = "Y",
    No = "N",
  }
  function askQuestion(answer: Answer) {
    // if (answer === 'yes'){
    //     console.log('correct')
    // }
    // if (answer === 'no'){
    //     console.log('incorrect')
    // }
    if (answer === Answer.Yes) {
      console.log("correct");
    }
    if (answer === Answer.No) {
      console.log("incorrect");
    }
  }
  askQuestion(Answer.Yes);
  // askQuestion("Yes"); // 타입오류
  // askQuestion("예스"); //타입오류
}
