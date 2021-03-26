import React, { useEffect, useState } from "react";

function Info() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  // 렌더링될 때마다 특정 작업 수행
  useEffect(() => {
    // console.log("렌더링 완료");
    // console.log({
    //   name,
    //   nickname,
    // });
  });

  // 마운트될 때만 실행
  useEffect(() => {
    // console.log("마운트될 때만 실행");
  }, []);

  // 특정 값이 업데이트될 때만 실행
  useEffect(() => {
    // console.log("name값이 업데이트될 때만 실행");
  }, [name]);

  // 뒷정리하기, 컴포넌트 언마운트되기 전이나 업데이트되기 직전에 수행
  useEffect(() => {
    // 마운트될 때
    console.log("컴포넌트 마운트");
    console.log(name);
    // 언마운트될 때
    return () => {
      console.log("컴포넌트 언마운트");
      console.log(name);
    };
  });

  // 뒷정리하기, 오직 언마운트될 때만 뒷정리 함수 호출
  // useEffect(() => {
  //   console.log("컴포넌트 마운트");
  //   console.log(name);
  //   return () => {
  //     console.log("컴포넌트 언마운트");
  //     console.log(name);
  //   };
  // }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      <section className="section section__useEffect">
        <h1 className="summary">useEffect</h1>
        <span>
          <input type="text" value={name} onChange={onChangeName} placeholder="이름" />
        </span>
        <span>
          <input type="text" value={nickname} onChange={onChangeNickname} placeholder="닉네임" />
        </span>
        <div>이름: {name}</div>
        <div>닉네임: {nickname}</div>
      </section>
    </>
  );
}

export default Info;
