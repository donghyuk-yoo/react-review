import React, { Component } from "react";
import PropTypes from "prop-types";

// 함수 파라미터 부분에서 비구조화 할당(구조 분해)

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    const noting = undefined;

    return (
      <div>
        props값은 {name} <br />
        children값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
        {/* 값이 undefined일 때 보여줄 문자열 */}
        <div>{noting || "undefined"}</div>
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
