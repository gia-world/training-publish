import React, { Component } from "react";

class Counter extends Component {
  // constructor(props){
  //     super(props);
  //     // state 초깃값 설정
  //     this.state={
  //         number:0,
  //         fixedNumber:0
  //     }
  // }
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          // 버튼 클릭 시 호출할 함수
          onClick={() => {
            // //this.setState를 사용하여 state에 새로운 값 넣기
            // this.setState({ number: number + 1 });
            // this.setState({ number: this.state.number + 1 });
            // setState를 사용한다고 해서 state값이 바로 바뀌지 않음 (비동기적 처리)

            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            // 위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
            // 아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
