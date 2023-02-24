import React, { useEffect, useState } from "react";

const DoughnutChart = () => {
  const [data, setData] = useState([9, 1]);
  const [array, setArray] = useState([]);
  useEffect(() => {
    let sum = data.reduce((a, b) => {
      return a + b;
    });
    let test = data.map((a) => {
      return a / sum;
    });
    setArray(test);
    console.log(array);
  }, []);

  // circle 태그의 strokeDasharray 속성에 넣어줄 함수 생성
  // return (2 * Math.PI * 90 * 0.75 + " " + 2 * Math.PI * 90 * 0.25 + " "); 과 같이 생성되어야 함
  // 데이터가 여러개 들어갈 수 있도록 map메소드 사용한 다음, ... rest parameter 사용하여 배열을 풀어줌
  const graphInputData = () => {
    return [
      ...array.map((a, i) => {
        return 2 * Math.PI * 90 * array[i] + " ";
      }),
    ];
  };
  return (
    <>
      {/* https://tecoble.techcourse.co.kr/post/2021-11-10-making-donut-chart-react/ 사이트에서 도넛 만들기 참조*/}
      <hr />
      <h1>Doughnut Chart</h1>
      <p>설명: 도넛 모양 차트 만들기</p>
      <hr />
      <div>
        <div style={{ width: "200px", height: "200px" }}>
          <svg viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#ddddda"
              strokeWidth="20"
            />
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#7697a0"
              strokeWidth="20"
              animation="2s ease"
              strokeDasharray={
                // 2 * Math.PI * 90 * 0.25
                graphInputData()
              }
              // strokeDasharray={`${2 * Math.PI * 90 * array[0]} ${
              //   2 * Math.PI * 90 * array[1]
              // }`}
              strokeDashoffset={2 * Math.PI * 90 * 0.25}
            />
          </svg>
        </div>
        <hr />
        <p>
          도넛 차트 참조:
          https://tecoble.techcourse.co.kr/post/2021-11-10-making-donut-chart-react/
        </p>
      </div>
    </>
  );
};

export default DoughnutChart;
