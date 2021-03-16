import React, { useState } from "react";

const Say = () => {
  // 클래스형 state의 초깃값과 달리 반드시 객체가 아니어도 된다. 값의 형태는 자유
  const [message, setMessage] = useState("");
  // useState()는 한 컴포넌트에서 여러번 사용 가능
  const [color, setColor] = useState("");

  const onClickEnter = () => {
    setMessage("안녕하세요");
  };
  const onClickClose = () => {
    setMessage("안녕히 가세요");
  };

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickClose}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={() => setColor("red")} style={{ color: "red" }}>
        빨간색
      </button>
      <button onClick={() => setColor("green")} style={{ color: "green" }}>
        초록색
      </button>
      <button onClick={() => setColor("blue")} style={{ color: "blue" }}>
        파란색
      </button>
    </>
  );
};

export default Say;
