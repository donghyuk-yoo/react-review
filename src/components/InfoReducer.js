import React from "react";
import useInputs from "./useInputs";

function InfoReducer() {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <>
      <section className="section section__InfoReducer">
        <h1 className="summary">useReducer input</h1>
        <div>
          <div>
            <input name="name" value={name} onChange={onChange} />
            <input name="nickname" value={nickname} onChange={onChange} />
          </div>
          <div>
            <div>
              <b>이름:</b> {name}
            </div>
            <div>
              <b>닉네임: </b>
              {nickname}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoReducer;
