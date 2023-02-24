import React, { useRef, useState } from "react";
import "../../css/opacityControlBar.css";

const OpacityControlBar = () => {
  const [range, setRange] = useState([0, 1.0]);
  const [opacity, setOpacity] = useState(0.5);
  // const opacityRef = useRef(50);
  return (
    <>
      <hr />
      <h1>Opacity Control Bar</h1>
      <p>설명: 투명도 조절하는 바</p>
      <hr />
      <div style={{ display: "flex", padding: "10px" }}>
        <div>{range[0]}</div>
        <input
          type="range"
          // value={opacity}
          min={range[0]}
          max={range[1]}
          step="0.1"
          onChange={(e) => {
            setOpacity(e.target.value);
          }}
        />
        <div>{range[1]}</div>
      </div>
      <div
        className="box"
        style={{
          opacity: opacity,
          color: opacity <= 0.2 ? "black" : "white",
          fontSize: "10rem",
        }}
      >
        {opacity}
      </div>
    </>
  );
};

export default OpacityControlBar;
