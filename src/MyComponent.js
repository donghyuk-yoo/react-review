import React from "react";

const MyComponent = (props) => {
  return (
    <>
      <div>props 받기 : {props.data}</div>;
      <div>props 받기 : {props.data2}</div>;
    </>
  );
};

MyComponent.defaultProps = {
  data2: "props 기본값",
};

export default MyComponent;
