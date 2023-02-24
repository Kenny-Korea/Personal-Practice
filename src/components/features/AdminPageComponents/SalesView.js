import React, { useEffect, useRef, useState } from "react";
import "../../../css/salesview.css";
import salesData from "./salesData";
import { CSVLink } from "react-csv";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import excelDownload from "../../../images/excelDownload.png";

const SalesView = ({ setTab }) => {
  const sortedData = [...salesData].sort((a, b) => b.idx - a.idx);
  const [rawData] = useState(sortedData);
  // data의 초깃값을 salesData로 설정하게 되면, rawData와 참조값이 같게 되면서 splice메소드 사용하여 data 변경 시, rawData의 값도 변경되는 문제 있음
  // --> 배열 복사를 통해 참조값이 다르도록 설정
  // const [data, setData] = useState([...salesData]);
  const [data, setData] = useState([...sortedData]);

  const [currentPageData, setCurrentPageData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [inputValue, setInputValue] = useState("");

  const filterInputRef = useRef();
  const filterSelectRef = useRef();

  // 1. 필터 내용에 따라 data를 변경하는 함수
  const filteringData = (value, option) => {
    // setData를 이용해 변경하면 useEffect가 호출되므로 배열 메소드를 이용해 변경
    // data 초기화
    data.splice(0, data.length);
    // concat 메소드는 새로운 배열을 반환하므로, newData 변수에 저장
    const newData = data.concat(rawData);
    if (value === "") {
      let copy = [...rawData];
      setData(copy);
    } else if (option === "all") {
      let copy = newData.filter((a) => {
        let array = [];
        return a.userId === value;
      });
    } else {
      let copy = newData.filter((a) => {
        return a[option] === value;
      });
      setData(copy);
    }
  };
  // 2. data가 바뀔 때마다, currentPageData 변경하고, paging 함수 실행
  useEffect(() => {
    setCurrentPageData(data.slice(0, 10));
    paging();
  }, [data]);

  // 3. data의 개수에 따라 페이지 수 변경하는 함수
  const paging = () => {
    // Math.floor 범위가 /10 하기 이전까지로만 지정돼서 안됐던 경험 있음
    let count = Math.floor(
      data.findLastIndex((a) => {
        return a.idx >= 0;
      }) / 10
    );
    setPageCount(count + 1);
  };

  // 4. 클릭한 페이지에 따라 currentPageData를 변경해주는 함수
  const changeCurrentPageData = (pageNum) => {
    setCurrentPageData(data.slice(10 * pageNum - 10, 10 * pageNum));
  };

  let $selectedButton;

  return (
    <>
      <h1
        onClick={() => {
          // 탭 새로고침이 안됨 ㅠ
          setTab("");
          setTab(1);
        }}
      >
        Sales View
      </h1>
      <hr />
      <div className="sales-table-wrapper">
        <div className="sales-filter-wrapper">
          {/* <button onClick={() => {}}>조회</button> */}
          {/* <select name="duration">
            <option value="3년">3년</option>
            <option value="1년">1년</option>
            <option value="6개월">6개월</option>
            <option value="3개월">3개월</option>
            <option value="1개월">1개월</option>
            <option value="1주일">1주일</option>
            <option value="1일">1일</option>
          </select> */}
          <select name="duration" ref={filterSelectRef}>
            {/* 전체 필터로 검색 시, 구매자, 판매자, 강의명 모든 조건에서 검색할 수 있도록 처리해야 하나 아직 못함 */}
            <option value="all">전체</option>
            <option value="userId">구매자</option>
            <option value="lecturerId">판매자</option>
            <option value="className">강의명</option>
          </select>
          <input
            type="text"
            ref={filterInputRef}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              filteringData(
                filterInputRef.current.value,
                filterSelectRef.current.value
              );
            }}
          >
            검색
          </button>
          <CSVLink data={data}>
            <div style={{ textDecoration: "none" }}>
              <img src={excelDownload} style={{ marginLeft: "1rem" }} />
            </div>
          </CSVLink>
        </div>
        <br />

        <table className="salesTable">
          <tr>
            <td className="salesTd salesTable-title veryShort">번호</td>
            <td className="salesTd salesTable-title long">클래스명</td>
            <td className="salesTd salesTable-title medium">매출</td>
            <td className="salesTd salesTable-title medium">매출이익</td>
            <td className="salesTd salesTable-title short">수량</td>
            <td className="salesTd salesTable-title short">구매자</td>
            <td className="salesTd salesTable-title short">판매자</td>
            <td className="salesTd salesTable-title medium">구매일자</td>
          </tr>

          {currentPageData.map((a, i) => {
            return (
              <tr key={a.idx}>
                <td className="salesTd">{a.idx}</td>
                <td className="salesTd">{a.className}</td>
                <td className="salesTd">{parseInt(a.price)}</td>
                <td className="salesTd">{parseInt(a.price / 11)}</td>
                <td className="salesTd">{a.count}</td>
                <td className="salesTd">{a.userId}</td>
                <td className="salesTd">{a.lecturerId}</td>
                <td className="salesTd">
                  {new Date(a.dateOfPurchase).toLocaleDateString()}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="pagination-wrapper">
        <Stack spacing={1}>
          <Pagination
            boundaryCount={5}
            count={pageCount}
            color="primary"
            defaultPage={1}
            showFirstButton={true}
            showLastButton={true}
            // 2번째 인자가 current page를 받는 인자임
            onChange={(e, page) => {
              changeCurrentPageData(page);
            }}
          />
        </Stack>
      </div>
    </>
  );
};

export default SalesView;
