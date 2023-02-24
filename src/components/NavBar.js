import React, { useState } from "react";
import "../css/navbar.css";

const NavBar = () => {
  const [color, setColor] = useState([
    "#4A707A",
    "#7697A0",
    "#94B0B7",
    "#C2C8C5",
    "#DDDDDA",
    "#f8f8f8",
  ]);
  return (
    <>
      <div className="navbar-wrapper">
        {color.map((a, i) => {
          return (
            <div
              className="navbar-item"
              style={{ backgroundColor: `${color[i]}` }}
              key={a}
            >
              {color[i]}
            </div>
          );
        })}
        {/* 아래는 DOM요소에 직접 접근해서 만들어 봤는데, 안됨 */}
        {/* <div
          className="navbar-item"
          style={{
            backgroundColor:
              document.documentElement.querySelectorAll(".navbar-item")[4]
                .innerHTML,
          }}
        >
          #DDDDDA
        </div> */}
      </div>
    </>
  );
};

export default NavBar;
