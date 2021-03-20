import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    // scrollTop : 세로 스크롤바 위치(0~350)
    // scrollHeight: 스크롤이 있는 박스 안의 div높이(650)
    // clientHeight: 스크롤이 있는 박스의 높이(300)
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <>
        <section className="section section__ref2">
          <h1 className="summary">ref2</h1>
          <div
            style={style}
            ref={(ref) => {
              this.box = ref;
            }}
          >
            <div style={innerStyle} />
          </div>
        </section>
      </>
    );
  }
}

export default ScrollBox;
