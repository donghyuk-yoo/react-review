import React from "react";
import styled, { css } from "styled-components";

// 미디어쿼리 작업 함수화
const sizes = {
  desktop: 1024,
  tablet: 768,
};
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const Box = styled.div`
  /*  props로 넣어 준 값을 직접 전달 가능 */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;

  /* styled-component에서 미디어 쿼리(반응형) */
  /* @media (max-width: 768px) {
    width: 100%;
  } */

  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`}
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* & 문자 사용하여 Sass처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* inverted값이 true일 때 스타일 부여 */
  /* 단순 변수 형태가 아닌 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우 css불러옴 */
  /* props를 사용해야 하는 경우(템플릿 리터럴 필수)에도 마찬가지 */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}

  & + button {
    margin-left: 1rem;
  }
`;

function StyledComponent() {
  return (
    <section className="section section__StyledComponent">
      <h1 className="summary">StyledComponent</h1>
      <Box color="black">
        <Button>Hi</Button>
        <Button inverted={true}>테두리만</Button>
      </Box>
    </section>
  );
}

export default StyledComponent;
