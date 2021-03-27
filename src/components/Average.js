import React, { useState, useMemo, useCallback } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // useCallback, 빈배열: 컴포넌트가 렌더링될 때 만들었던 함수 계속 재사용(렌더링때마다 새로운 함수 생성으로 인한 렌더링 성능 저하 방지)
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  // useCallback, 배열안 값에 따라 인풋 내용이 바뀌거나 새로운 항목이 추가될 때 새로 만들어진 함수 사용
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
    },
    // number나 list가 바뀌없을 때만 함수 생성
    [number, list]
  );
  // useMemo, 특정값이 바뀔 때만 연산실행
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <section className="section section__Average">
        <h1 className="summary">useMemo</h1>
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
            {/* useMemo 값이 바뀔 때만 연산실행*/}
            <b>평균값:</b> {avg}
            {/* 기존, 불필요하게 함수가 계속 호출된다. */}
            {/* {getAverage(list)} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Average;
