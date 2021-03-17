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
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({ id: nextId, text: inputText });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onRemove = (id) => {
    const RemoveNames = names.filter((name) => name.id !== id);
    setNames(RemoveNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id}>
      {name.text}
      <button onClick={() => onRemove(name.id)}>제거</button>
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
