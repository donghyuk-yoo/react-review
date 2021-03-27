import React from "react";
import styles from "../CSSModule.module.css";

function CSSModule() {
  return (
    // 템플릿 리터럴(백틱)으로 문자열을 합해 여러 클래스 적용
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      hi, i'm <span className="something">CSS Module</span>
    </div>
  );
}

export default CSSModule;
