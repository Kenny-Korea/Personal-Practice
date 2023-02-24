import React, { useEffect, useRef, useState } from "react";
import "../../css/scrollevent.css";

const ScrollEvent = () => {
  const [height, setHeight] = useState("");
  const handleHeight = () => {
    // document객체의 pageYOffset로 지정할 경우, 동작하지 않음
    setHeight(window.scrollY);
  };
  const scrollRef = useRef();
  useEffect(() => {
    console.log("Test");
    if (height > 500) {
      scrollRef.current.style.opacity = "1";
    } else {
      scrollRef.current.style.opacity = "0";
      scrollRef.current.style.transition = "opacity 0.5s";
    }
  }, [height]);
  useEffect(() => {
    const watch = () => {
      // document객체의 pageYOffset로 지정해도 동작함
      window.addEventListener("scroll", handleHeight);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleHeight);
    };
  });

  return (
    <>
      <hr />
      <h1>Scroll Event</h1>
      <p>설명: mouse scroll event 연습</p>
      <hr />
      <div className="scrollEvent-wrapper">
        <div className="fixed-div" ref={scrollRef}></div>
      </div>
    </>
  );
};

export default ScrollEvent;
