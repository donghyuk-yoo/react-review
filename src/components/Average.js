import React, { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };
  // useMemo
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <section className="section section__Average">
        <div>
          {/* 등록할 때만 getAverage함수가 호출되어야하나 input 내용이 수정될 때마다 함수가 호출된다. */}
          <input value={number} onChange={onChange} />
          <button onClick={onInsert}>등록</button>
          <ul>
            {list.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
          <div>
            {/* useMemo */}
            <b>평균값:</b> {avg}
            {/* 기존 */}
            {/* {getAverage(list)} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Average;
