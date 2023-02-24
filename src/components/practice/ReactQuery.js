import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { database } from "../../firebase";
import useStore from "./store.js";

const ReactQuery = () => {
  const { count } = useStore();
  let [rawData, setRawData] = useState([]);
  let result = useQuery("request", () => {
    axios
      .get(
        "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/test.json"
      )
      .then((response) => {
        console.log(response.data);
      });
  });

  let result2 = useQuery("request2", () => {
    database
      .collection("board")
      .get()
      .then((response) => {
        response.forEach((doc) => {
          console.log(doc.data());
        });
      });
  });

  return (
    <>
      <hr />
      <h1>React Query</h1>
      <p>설명: 리액트쿼리 사용</p>
      <hr />
      {count}
      <input
        type="text"
        onChange={(e) => {
          useStore.setState({ count: e.target.value });
        }}
      />
      {result.isLoading && "Loading"}
      {result.error && "Error"}
      {result.data && "completed"}
      <button
        onClick={() => {
          console.log(result);
        }}
      >
        click
      </button>
    </>
  );
};

export default ReactQuery;
