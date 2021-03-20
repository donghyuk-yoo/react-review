import React, { useState } from "react";

const EventPractice = () => {
  // const [username, setUserName] = useState("");
  // const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  // 비구조화 할당
  const { username, message } = form;

  // const onChangeUserName = (e) => setUserName(e.target.value);
  // const onChangeMessage = (e) => setMessage(e.target.value);
  const onChange = (e) => {
    const newForm = {
      // onChange에서 하나의 form state를 다루지만, form의 상태인 객체 속성이 2개 이상일 때, input도 같은 개수이다.
      // input이 2개 이상이라 내용을 각각 받으므로 매 이벤트마다 setter함수만 사용시 마지막 input때 한 개 이상의 값이 undefined가 된다.
      // 여기서는 후에 입력받은 {username: undefined message: 입력받은 값}이
      // 전에 입력받은 {username: 입력받은 값 message: undefined}를 덮어쓰며
      // username값이 결국 undefined로 저장된다.
      // 스프레드 연산자로 기존 form 내용을 이 자리에 복사한 뒤
      ...form,
      // 새로운 값(변경된 값)을 덮어씌운다.
      [e.target.name]: e.target.value,
    };
    // console.log(e.target.value);
    // console.log(newForm);
    setForm(newForm);
  };
  const onClick = () => {
    /* 비구조화 없이 객체값 참조 또는 비구조화 할당으로 참조 */
    alert(username + " : " + form.message);
    setForm({
      username: "",
      message: "",
    });
    // console.log("state :" + form.username);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      {/* 비구조화 없이 객체값 참조 또는 비구조화 할당으로 참조 */}
      <input type="text" name="username" placeholder="사용자 이름" value={form.username} onChange={onChange} />
      <input type="text" name="message" placeholder="메세지" value={message} onChange={onChange} onKeyPress={onKeyPress} />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
