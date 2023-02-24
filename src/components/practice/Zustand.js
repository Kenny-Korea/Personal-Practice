import React from "react";
import ZustandTest from "./ZustandTest";
import useStore from "./store";

// const useStore = create(() => ({
//   count: 0,
// }));

const Zustand = () => {
  const { count } = useStore();
  return (
    <>
      <hr />
      <h1>Zustand</h1>
      <p>설명: 상태 관리 라이브러리 zustand(수쉬탄드t)</p>
      <div>숫자: {count}</div>
      <button
        onClick={() => {
          useStore.setState({ count: count + 1 });
          console.log(count);
        }}
      >
        +
      </button>
      <hr />
      <p>
        설명: 아래 값은 다른 컴포넌트에서 표출되는 값임 (Zustand를 이용해 상태
        관리중)
      </p>
      <ZustandTest />
    </>
  );
};

export default Zustand;
