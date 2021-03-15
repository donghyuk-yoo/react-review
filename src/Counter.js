import React, { Component } from "react";

class Counter extends Component {
  // constructor 컴포넌트의 생성자 메서드. 클래스형 컴포넌트에서 constructor 작성시 반드시 super(props)를 호출해 주어야한다.
  // 이 함수 호출시 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 conponent 클래스가 지닌 생성자 함수를 호출해 준다.
  constructor(props) {
    super(props);
    // state의 초깃값 설정, 컴포넌트의 state는 객체 형식이어야 한다.
    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
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
