import React, { Component } from "react";
import Counter from "./components/Counter";
import EventPractice from "./components/EventPractice";
import MyComponent from "./components/MyComponent";
import Say from "./components/Say";
import "./App.css";
import ValidationSample from "./components/ValidationSample";
import ScrollBox from "./components/ScrollBox";
import IterationSample from "./components/IterationSample";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    const name = "React";
    // undefined값을 return해서는 안된다. 단 jsx안에서는 허용된다.
    const noting = undefined;
    // 리액트에서 DOM요소에 스타일을 적용할 때는 문자열이 아니 객체형태로 넣어주어야 함(카멜 표기법)
    // 미리 스타일 객체 선언

    return (
      <>
        <Navigation />
        {/* props 부모 컴포넌트인 App컴포넌트에서 자식 컴포넌트인 MyComponent에게 props전달 */}
        <MyComponent name={"React"} favoriteNumber={23} />
        {/* state */}
        <Counter />
        {/* event1 */}
        <Say />
        {/* event2 */}
        <EventPractice />
        {/* ref1 */}
        <ValidationSample />
        {/* ref2 컴포넌트에 ref달고 내부 메서드 사용 */}
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <div style={{ borderBottom: "0.1rem solid #000", paddingLeft: "1rem" }}>
          <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
        </div>
        {/* map, concat, filter, Spread Operator(...object) */}
        <IterationSample />
      </>
    );
  }
}

export default App;
