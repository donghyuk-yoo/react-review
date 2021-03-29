import React, { useState, useReducer } from "react";
import Counter from "./Counter";
import EventPractice from "./EventPractice";
import MyComponent from "./MyComponent";
import Say from "./Say";
import ValidationSample from "./ValidationSample";
import IterationSample from "./IterationSample";
import ScrollBox2 from "./ScrollBox2";
import Info from "./Info";
import CounterReducer from "./CounterReducer";
import InfoReducer from "./InfoReducer";
import Average from "./Average";
import SassComponent from "../SassComponent";
import CSSModule from "../components/CSSModule";
import StyledComponent from "./StyledComponent";

// props 컴포넌트 렌더링 상태를 관리하는 함수
// 하나의 컴포넌트만을, 그것도 하나의 상태만 관리할 때는 useReducer보다 useState가 더 깔끔하다.
// useReducer는 여러 상태일 때와 여러 객체값을 관리할 때 사용
function reducer(state, action) {
  // 아래의 action.value(태그의 속성값)와는 달리 state.value(객체)는 문자열화 되지 않는다.
  switch (action.type) {
    case "change":
      if (state.value === false) {
        return { value: true };
      } else {
        return { value: false };
      }
    default:
      return state;
  }
}

// 여러 컴포넌트 렌더링 상태 관리 함수
function btnReducer(state, action) {
  // action.value값은 boolean이 아닌 문자열로 저장된다. 태그의 속성값은 모두 문자열로 저장?
  // JSON.parse(태그)로 boolean화 시킨다.
  // 비교시에는 JSON.parse(객체)로 boolean화 시키거나, action.value === 'false'로 아예 문자열로 비교해주면 된다.
  return {
    ...state,
    [action.name]: !JSON.parse(action.value),
  };
}

const ChangeColor = (styleProps) => {
  if (styleProps === true) {
    const Color = {
      color: "red",
    };
    return Color;
  }
};

function Navigation() {
  // props 컴포넌트 하나만을 useReducer로 상태관리
  const [state, dispatch] = useReducer(reducer, {
    value: false,
  });
  const [btnState, btnDispatch] = useReducer(btnReducer, {
    navState: false,
    navEvent1: false,
    event2: false,
    ref1: false,
    ref2: false,
  });
  // 비구조화로 간결하게, navState는 비구조화 없이 사용해봄.
  const { navEvent1, event2, ref1, ref2 } = btnState;

  // 아래 컴포넌트들은 useState에서 useReducer 관리로 변경됨
  // const [NavState, setNavState] = useState(false);
  // const [event1, setevent1] = useState(false);
  // const [event2, setevent2] = useState(false);
  // const [ref1, setref1] = useState(false);
  // const [ref2, setref2] = useState(false);

  // useState로 컴포넌트 상태관리, 컴포넌트 개수만큼 선언
  const [component, setcomponent] = useState(false);
  const [navUseEffect, setNavUseEffect] = useState(false);
  const [NavReducer, setNavReducer] = useState(false);
  const [useMemo, setUseMemo] = useState(false);
  const [Sass, setSass] = useState(false);
  const [cssModule, setcssModule] = useState(false);
  const [styledComponent, setStyledComponent] = useState(false);

  const onClick = (e) => {
    btnDispatch(e.target);
  };

  return (
    <>
      <h1 className="title">review</h1>
      <h1 className="sub-title">React</h1>

      <div className="navigation chapter1">
        {/* style의 ChangeColor함수가 렌더링될 때마다 렌더링되는 컴포넌트 개수만큼 실행된다. 방지법? */}
        <button onClick={() => dispatch({ type: "change" })} style={ChangeColor(state.value)}>
          props
        </button>
        <button name="navState" value={btnState.navState} onClick={onClick} style={ChangeColor(btnState.navState)}>
          state
        </button>
        <button name="navEvent1" value={navEvent1} onClick={onClick} style={ChangeColor(navEvent1)}>
          event1
        </button>
        <button name="event2" value={event2} onClick={onClick} style={ChangeColor(event2)}>
          event2
        </button>
        <button name="ref1" value={ref1} onClick={onClick} style={ChangeColor(ref1)}>
          ref1
        </button>
        <button name="ref2" value={ref2} onClick={onClick} style={ChangeColor(ref2)}>
          ref2
        </button>
        <button onClick={() => setcomponent(!component)} style={ChangeColor(component)}>
          CRUD
        </button>
        <button onClick={() => setNavUseEffect(!navUseEffect)} style={ChangeColor(navUseEffect)}>
          useEffect
        </button>
        <button onClick={() => setNavReducer(!NavReducer)} style={ChangeColor(NavReducer)}>
          useReducer
        </button>
        <button onClick={() => setUseMemo(!useMemo)} style={ChangeColor(useMemo)}>
          useMemo
        </button>
      </div>

      <div className="navigation chapter2">
        <button onClick={() => setSass(!Sass)} style={ChangeColor(Sass)}>
          Sass
        </button>
        <button onClick={() => setcssModule(!cssModule)} style={ChangeColor(cssModule)}>
          cssModule
        </button>
        <button onClick={() => setStyledComponent(!styledComponent)} style={ChangeColor(styledComponent)}>
          StyledComponent
        </button>
      </div>

      {/* props 부모 컴포넌트인 App컴포넌트에서 자식 컴포넌트인 MyComponent에게 props전달 */}
      {state.value && <MyComponent name={"React"} favoriteNumber={23} />}
      {btnState.navState && <Counter />}
      {navEvent1 && <Say />}
      {event2 && <EventPractice />}
      {ref1 && <ValidationSample />}
      {ref2 && <ScrollBox2 />}
      {component && <IterationSample />}
      {navUseEffect && <Info />}
      {NavReducer && <CounterReducer />}
      {NavReducer && <InfoReducer />}
      {useMemo && <Average />}
      {Sass && <SassComponent />}
      {cssModule && <CSSModule />}
      {styledComponent && <StyledComponent />}
    </>
  );
}

export default Navigation;
