import React, { useReducer } from "react";

// useReducer의 장점, 상태업데이트 로직을 컴포넌트 바깥으로 빼낸다.
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <>
      <div>
        <p>
          현재 카운터 값은 <b>{state.value}</b> 입니다.
        </p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      </div>
    </>
  );
}

export default CounterReducer;
