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
      <MyComponent name={"React"} favoriteNumber={23}>
        리액트
      </MyComponent>
    </>
  );
}

export default App;
