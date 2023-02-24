import React, { useEffect, useRef, useState } from "react";
import { database } from "../../firebase";
import "../../css/board.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Board = () => {
  const [boardList, setBoardList] = useState([]);
  const [title, setTitle] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    async function fetchData() {
      let copy = [...boardList];
      await database
        .collection("board")
        .get()
        .then((result) => {
          result.forEach((doc) => {
            console.log(doc.data());
            copy.push(doc.data());
          });
        });
      setBoardList(copy);
    }
    fetchData();
  }, []);

  const addBoard = (data) => {
    // database.collection("board").doc("list3").set(boardList[2]);
    database.collection("board").doc("item5").set(data);
  };

  return (
    <>
      <hr />
      <h1>Board</h1>
      <p>설명: Firebase를 사용하여 기본적인 게시판 만들기</p>
      <hr />
      <table className="board-table">
        <tr>
          <td className="board-td">번호</td>
          <td className="board-td">글제목</td>
          <td className="board-td">작성자</td>
          <td className="board-td">작성일</td>
          <td className="board-td">조회수</td>
        </tr>
        {boardList.map((a, i) => {
          return (
            <tr key={a.id}>
              <td className="board-td">{a.id}</td>
              <td className="board-td">{a.title}</td>
              <td className="board-td">{a.writer}</td>
              <td className="board-td">{a.regDate}</td>
              <td className="board-td">{a.count}</td>
            </tr>
          );
        })}
      </table>
      <hr />
      <div>
        <input type="text" style={{ width: "500px" }} ref={inputRef} />
        <button
          onClick={(e) => {
            let data = {
              id: 5,
              title: inputRef.current.value,
              writer: "kmkim4238",
              regDate: "2022/09/02",
              count: 7,
            };
            addBoard(data);
            console.log("test");
            inputRef.current.value = "";
          }}
        >
          submit
        </button>
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Stack spacing={2}>
          <Pagination
            count={5}
            color="primary"
            showFirstButton={true}
            showLastButton={true}
          />
        </Stack>
      </div>
    </>
  );
};

export default Board;
