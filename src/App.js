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
    const colorBlue = {
      color: "blue",
      fontSize: "3rem",
      background: "yellow",
    };

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
          <h1 className="summary">props</h1>
          {/* 부모 컴포넌트인 App컴포넌트에서 자식 컴포넌트인 MyComponent에게 props전달 */}
          <MyComponent name={"React"} favoriteNumber={23}>
            {/* 미리 선언된 스타일 객체 style값으로 지정 */}
            <span style={colorBlue}>리액트{name}</span>
            {/* 태그는 항상 닫혀야 한다. */}
            <br />
            {/* 인라인 스타일링 */}
            <span style={{ color: "red" }}>리액트</span>
          </MyComponent>
          {/* 값이 undefined일 때 보여줄 문자열 */}
          <div>{noting || "undefined"}</div>
        </section>

        <section className="section section__state">
          <h1 className="summary">state</h1>
          <Counter />
        </section>

        <section className="section setion__event1">
          <h1 className="summary">event1</h1>
          <Say />
        </section>

        <section className="section setion__event2">
          <h1 className="summary">event2</h1>
          <EventPractice />
        </section>

        <section className="section section__ref">
          <h1 className="summary">ref1</h1>
          <ValidationSample />
        </section>

        <section className="section section__ref2">
          <h1 className="summary">ref2</h1>
          <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
          <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
        </section>

        <section className="section section__component">
          <h1 className="summary">컴포넌트 반복 map</h1>
          <IterationSample />
        </section>
      </>
    );
  }
}

export default App;
