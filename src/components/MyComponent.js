import React, { Component } from "react";
import PropTypes from "prop-types";

// 함수 파라미터 부분에서 비구조화 할당(구조 분해)

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    const noting = undefined;
    const colorBlue = {
      color: "blue",
      fontSize: "3rem",
      background: "yellow",
    };

    return (
      <section className="section">
        <div>
          {/* 현 컴포넌트에는 css파일이 import되어있지 않지만 부모 컴포넌트에 import되어있어 문제x */}
          <h1 className="summary">props</h1>
          props값은 {name} <br />
          children값은 {children}
          입니다.
          <br />
          제가 좋아하는 숫자는 {favoriteNumber}입니다.
          {/* 값이 undefined일 때 보여줄 문자열 */}
          <div>{noting || "undefined"}</div>
          {/* 태그는 항상 닫혀야 한다. */}
          <br />
          {/* 인라인 스타일링 */}
          <span style={{ color: "red" }}>리액트</span>
          {/* 미리 선언된 스타일 객체 style값으로 지정 */}
          <span style={colorBlue}>리액트{name}</span>
        </div>
      </section>
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
