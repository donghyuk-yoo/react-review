import React from "react";
import PropTypes from "prop-types";

// 함수 파라미터 부분에서 비구조화 할당(구조 분해)
const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <>
      <div>
        props값은 {name} <br />
        children값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    </>
  );
};

MyComponent.defaultProps = {
  data2: "props 기본값",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
