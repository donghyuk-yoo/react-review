import React, { useState } from "react";
import Counter from "./Counter";
import EventPractice from "./EventPractice";
import MyComponent from "./MyComponent";
import Say from "./Say";
import ValidationSample from "./ValidationSample";
import IterationSample from "./IterationSample";
import ScrollBox2 from "./ScrollBox2";
import Info from "./Info";

function Navigation() {
  const [props, setProps] = useState(false);
  const [state, setState] = useState(false);
  const [event1, setevent1] = useState(false);
  const [event2, setevent2] = useState(false);
  const [ref1, setref1] = useState(false);
  const [ref2, setref2] = useState(false);
  const [component, setcomponent] = useState(false);
  const [useEffect, setUseEffect] = useState(false);

  const ChangeColor = (p) => {
    if (p === true) {
      const Color = {
        color: "red",
      };

      return Color;
    }
  };

  return (
    <>
      <h1 className="title">review</h1>
      <h1 className="sub-title">React</h1>

      <div className="navigation">
        <button onClick={() => setProps(!props)} style={ChangeColor(props)}>
          props
        </button>
        <button onClick={() => setState(!state)} style={ChangeColor(state)}>
          state
        </button>
        <button onClick={() => setevent1(!event1)} style={ChangeColor(event1)}>
          event1
        </button>
        <button onClick={() => setevent2(!event2)} style={ChangeColor(event2)}>
          event2
        </button>
        <button onClick={() => setref1(!ref1)} style={ChangeColor(ref1)}>
          ref1
        </button>
        <button onClick={() => setref2(!ref2)} style={ChangeColor(ref2)}>
          ref2
        </button>
        <button onClick={() => setcomponent(!component)} style={ChangeColor(component)}>
          CRUD
        </button>
        <button onClick={() => setUseEffect(!useEffect)} style={ChangeColor(useEffect)}>
          useEffect
        </button>
      </div>

      {/* props 부모 컴포넌트인 App컴포넌트에서 자식 컴포넌트인 MyComponent에게 props전달 */}
      {props && <MyComponent name={"React"} favoriteNumber={23} />}
      {state && <Counter />}
      {event1 && <Say />}
      {event2 && <EventPractice />}
      {ref1 && <ValidationSample />}
      {ref2 && <ScrollBox2 />}
      {component && <IterationSample />}
      {useEffect && <Info />}
    </>
  );
}

export default Navigation;
