import React from "react";
import "./SassComponent.scss";

function SassComponent() {
  return (
    <section className="section section__SassComponent">
      <h1 className="summary">Sass</h1>
      <div className="SassComponent">
        <div className="box red" />
        <div className="box orange" />
        <div className="box yellow" />
        <div className="box green" />
        <div className="box blue" />
        <div className="box indigo" />
        <div className="box violet" />
      </div>
    </section>
  );
}

export default SassComponent;
