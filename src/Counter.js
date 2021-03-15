import React, { Component } from "react";

class Counter extends Component {
  // state를 constructor에서 꺼내기
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }); // this.setState를 통해 state에 새로운 값을 넣을 수 있다.
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
