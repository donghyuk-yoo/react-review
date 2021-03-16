import React from "react";
import Counter from "./Counter";
import EventPractice from "./EventPractice";
import MyComponent from "./MyComponent";
import Say from "./Say";
import "./App.css";

function App() {
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
      <h1 className="title">React</h1>
      <h1 className="sub-title">review</h1>

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
        <div>{noting || "undefined"}</div>
      </section>

      <section className="section setion__state">
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
    </>
  );
}

export default App;
