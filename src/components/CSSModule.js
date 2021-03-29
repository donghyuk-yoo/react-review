import React from "react";
import styles from "../CSSModule.module.scss";

function CSSModule() {
  return (
    // 템플릿 리터럴(백틱)으로 문자열을 합해 여러 클래스 적용
    // 템플릿 리터럴 문법 미사용시
    // className={[styles.wrapper, styles.inverted].join(' ')}
    <section className="section section__cssModule">
      <h1 className="summary">cssModule</h1>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        hi, i'm <span className="something">CSS Module</span>
      </div>
    </section>
  );
}

export default CSSModule;
