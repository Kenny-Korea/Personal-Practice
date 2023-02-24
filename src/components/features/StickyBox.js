import React from "react";

const StickyBox = () => {
  return (
    <>
      <hr />
      <h1>Sticky Box</h1>
      <p>설명: sticky한 box 만들기</p>
      <hr />
      <div
        style={{ backgroundColor: "beige", width: "100%", height: "1000px" }}
      >
        <div
          style={{
            position: "sticky",
            top: "80px",
            width: "100px",
            height: "100px",
            backgroundColor: "red",
          }}
        ></div>
      </div>
    </>
  );
};

export default StickyBox;
