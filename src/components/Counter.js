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
      <section className="section section__state">
        <div>
          <h1 className="summary">state</h1>
          <h1>{number}</h1>
          <h2>바뀌지 않는 값 : {fixedNumber}</h2>
          <button
            onClick={() => {
              this.setState({ number: number + 1 }); // this.setState를 통해 state에 새로운 값을 넣을 수 있다.
              // 객체 대신 함수 인자 전달, 비동기처리로 인한 state 값 업데이트 지연 방지
              this.setState((prevState) => {
                return {
                  number: prevState.number + 1,
                };
              });
              this.setState({ number: number + 1 }, () => {
                console.log("this.setState가 끝난 후 특정 작업 실행");
                console.log(this.state);
              });
            }}
          >
            +1
          </button>
        </div>
      </section>
    );
  }
}

export default Counter;
