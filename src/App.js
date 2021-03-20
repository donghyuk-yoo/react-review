import React, { Component } from "react";
import Counter from "./components/Counter";
import EventPractice from "./components/EventPractice";
import MyComponent from "./components/MyComponent";
import Say from "./components/Say";
import "./App.css";
import ValidationSample from "./components/ValidationSample";
import ScrollBox from "./components/ScrollBox";
import IterationSample from "./components/IterationSample";

class App extends Component {
  render() {
    const name = "React";
    // undefined값을 return해서는 안된다. 단 jsx안에서는 허용된다.
    const noting = undefined;
    // 리액트에서 DOM요소에 스타일을 적용할 때는 문자열이 아니 객체형태로 넣어주어야 함(카멜 표기법)
    // 미리 스타일 객체 선언

    return (
      <>
        <h1 className="title">review</h1>
        <h1 className="sub-title">React</h1>

        <div className="navigation">
          <button>props</button>
          <button>state</button>
          <button>evnet1</button>
          <button>evnet2</button>
          <button>ref1</button>
          <button>ref2</button>
          <button>map</button>
        </div>

        <section className="section">
          {/* 부모 컴포넌트인 App컴포넌트에서 자식 컴포넌트인 MyComponent에게 props전달 */}
          <MyComponent name={"React"} favoriteNumber={23} />
        </section>

        <section className="section section__state">
          <Counter />
        </section>

        <section className="section section__event1">
          <Say />
        </section>

        <section className="section section__event2">
          <EventPractice />
        </section>

        <section className="section section__ref">
          <ValidationSample />
        </section>

        <section className="section section__ref2">
          <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
          <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
        </section>

        <section className="section section__component">
          <IterationSample />
        </section>
      </>
    );
  }
}

export default App;
