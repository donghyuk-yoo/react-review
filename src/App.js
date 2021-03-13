import React from "react";
import MyComponent from "./MyComponent";

function App() {
  const name = "React";
  const noting = undefined;
  const colorBlue = {
    color: "blue",
    fontSize: "3rem",
    background: "yellow",
  };

  return (
    <>
      <div>
        {name === "React" ? (
          <h1>{name}-review</h1>
        ) : (
          <h1>리액트가 아님</h1>
        )}
      </div>
      <h2>working well</h2>
      <div>{name === "React" && <h1>React</h1>}</div>
      <div>{noting || "noting = undefined"}</div>
      <div style={{ color: "red", fontSize: "2rem" }}>
        color: red
      </div>
      <div style={colorBlue}>color: blue</div>
      <MyComponent data={"props 받음"} />
    </>
  );
}

export default App;
