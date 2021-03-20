import React, { Component } from "react";
import "../style/ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input2.focus();
  };

  render() {
    return (
      <div>
        <div>0000이면 success</div>
        {/* 리액트에서 DOM 접근없이 state로 input 검증, vanilla-js와 jQuery에서는 DOM에 접근해야 한다. */}
        {/* 검증버튼 클릭시 focus가 input에 남아있지 않는다. ref로 DOM에 접근해 focus를 다시 돌려주는 작업, 콜백함수 방식 */}
        <input
          ref={(ref) => (this.input2 = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.validated ? "success" : "failure") : ""}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
