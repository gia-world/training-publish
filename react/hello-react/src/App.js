import React, { Component } from "react";
import IterationSample from "./IterationSample";
// import ScrollBox from "./ScrollBox";
// import EventPractice from './EventPractice'
// import ValidationSample from './ValidationSample'
// import Counter from './Counter'
// import Say from './Say'
// import MyComponent from './MyComponent'

class App extends Component {
  render() {
    return (
      // <MyComponent name="React" favNum={1}>리액트</MyComponent>
      // <Counter/>
      // <Say/>
      // <EventPractice/>
      // <ValidationSample/>
      // <div>
      //   <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      //   {/*
      //   <button onClick={this.scrollBox.scrollBottom}>맨 밑으로</button>
      //   처음 렌더링될 때 this.scrollBox =undefined -> 오류 발생
      //   아래와 같이 작성 시, 버튼을 누를 때는 이미 한번 렌더링 해서 this.scrollBox를 설정한 시점
      //   */}
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      // </div>
      <IterationSample/>
    );
  }
}

export default App;
