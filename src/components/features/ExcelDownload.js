import React, { useState } from "react";
import { CSVLink } from "react-csv";

const ExcelDownload = () => {
  const [data, setData] = useState([
    { id: 1, text: "giyiwo" },
    { id: 2, text: "babo" },
  ]);
  console.log(data);
  return (
    <>
      <hr />
      <h1>Excel Download</h1>
      <p>설명 : React CSV를 활용한 엑셀 다운로드 구현</p>
      <hr />
      <CSVLink data={data}>Excel Download</CSVLink>
      {data.map((a, i) => {
        return (
          <div key={a.id} style={{ backgroundColor: "pink" }}>
            <hr />

            <p>id: {a.id}</p>
            <p>text: {a.text}</p>
            <hr />
          </div>
        );
      })}
      <p>npm install react-csv</p>
    </>
  );
};

export default ExcelDownload;
