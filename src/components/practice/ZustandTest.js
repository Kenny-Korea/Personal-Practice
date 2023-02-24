import React from "react";
import useStore from "./store";

const ZustandTest = () => {
  const { count } = useStore();

  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          console.log(count);
        }}
      >
        console
      </button>
    </>
  );
};

export default ZustandTest;
