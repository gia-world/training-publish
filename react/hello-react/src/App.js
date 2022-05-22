import React from "react";
import ScrollBox from "./ScrollBox";
// import EventPractice from './EventPractice'
// import ValidationSample from './ValidationSample'
// import Counter from './Counter'
// import Say from './Say'
// import MyComponent from './MyComponent'

const App = () => {
  return (
    // <MyComponent name="React" favNum={1}>리액트</MyComponent>
    // <Counter/>
    // <Say/>
    // <EventPractice/>
    // <ValidationSample/>
    <div>
      <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
    </div>
  );
};

export default App;
