import React from "react";
import Counter from "./Counter";
import MyComponent from "./MyComponent";
import Say from "./Say";

function App() {
  const name = "React";
  // undefined값을 return해서는 안된다. 단 jsx안에서는 허용된다.
  const noting = undefined;
  const colorBlue = {
    color: "blue",
    fontSize: "3rem",
    background: "yellow",
  };

  return (
    <>
      <MyComponent name={"React"} favoriteNumber={23}>
        <span style={colorBlue}>리액트{name}</span>
      </MyComponent>
      <div>{noting || "undefined"}</div>
      <Counter />
      <Say />
    </>
  );
}

export default App;
