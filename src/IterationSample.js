import React, { useState } from "react";

const IterationSample = () => {
  // 데이터 배열
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  // 텍스트를 입력할 수 있는 input의 상태
  const [inputText, setInputText] = useState("");
  const [updateInputText, setUpdateInputText] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onUpdateChange = (e) => setUpdateInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({ id: nextId, text: inputText });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onRemove = (id) => {
    const removeNames = names.filter((name) => name.id !== id);
    setNames(removeNames);
  };
  const onUpdate = (id) => {
    setShowInput(true);

    if (updateInputText !== "") {
      const updateNames = names.map((name) => (name.id === id ? { ...name, text: updateInputText } : name));
      setNames(updateNames);
      setUpdateInputText("");
      setShowInput(false);
    }
  };
  const onKeyPress = (id, e) => {
    if (e.key === "Enter") {
      onUpdate(id);
    }
  };
  const onCansle = () => {
    setShowInput(false);
  };

  const nameList = names.map((name) => (
    <li key={name.id} style={{ display: "flex" }}>
      <div style={{ display: "flex", backgroundColor: "lightgrey" }}>
        <div style={{ display: "flex", flex: "1", width: "10rem" }}>{name.text}</div>
        {showInput ? <input value={updateInputText} onChange={onUpdateChange} onKeyPress={(e) => onKeyPress(name.id, e)} placeholder="수정할 값" /> : ""}

        {/* 화살표함수 미사용시 선언과 동시에 바로 실행되어 예상하지 않은 결과가 나온다. */}
        <button onClick={() => onUpdate(name.id)}>수정</button>
        {showInput ? <button onClick={onCansle}>취소</button> : <button onClick={() => onRemove(name.id)}>제거</button>}
      </div>
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
