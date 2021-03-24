import React, { useRef } from "react";
import ScrollBox from "./ScrollBox";

function ScrollBox2() {
  // useRef는 현재 컴포넌트 내에서만
  const scrollBox = useRef(null);

  return (
    <>
      <ScrollBox ref={scrollBox} />
      <div style={{ borderBottom: "0.1rem solid #000", paddingLeft: "1rem" }}>
        <button onClick={() => scrollBox.current.scrollToBottom()}>맨 밑으로</button>
      </div>
    </>
  );
}

export default ScrollBox2;
