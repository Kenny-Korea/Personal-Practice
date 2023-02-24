import React, { useState } from "react";
import axios, { Axios } from "axios";
import { database } from "../../firebase";

const CRUD_practice = () => {
  const [data1, setData1] = useState([{ id: 2, name: "banana", price: 20000 }]);
  let data;

  const getPractice = async () => {
    await database
      .collection("product")
      .get()
      .then((result) => {
        console.log(result);
        result.forEach((doc) => {
          console.log(doc.data());
        });
      });
    // console.log(data);
  };
  const postPractice = async () => {
    await database
      .collection("product")
      .doc("item2")
      .set(...data1);
  };
  const addPractice = async () => {
    await database.collection("product").doc("item1");
  };
  return (
    <>
      <hr />
      <h1>CRUD Practice</h1>
      <p>설명: Firebase를 이용한 기본적인 CRUD Test</p>
      <hr />
      <button onClick={getPractice}>get</button>
      <button onClick={postPractice}>post</button>
    </>
  );
};

export default CRUD_practice;
