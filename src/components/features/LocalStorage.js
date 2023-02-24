import React, { useState } from "react";

const LocalStorage = () => {
  const [item, setItem] = useState([
    { id: 1, name: "icecream" },
    { id: 2, name: "candy" },
    { id: 3, name: "snack" },
    { id: 4, name: "bisquit" },
    { id: 5, name: "gum" },
    { id: 6, name: "chocolate" },
    { id: 7, name: "coffee" },
    { id: 8, name: "bacchus" },
  ]);
  const [basket, setBasket] = useState([]);

  const onSave = (id) => {
    const watchedItem = item.find((a) => {
      return a.id === id;
    });
    basket.push(watchedItem);
    localStorage.setItem("watched", JSON.stringify(basket));
  };
  return (
    <>
      <hr />
      <h1>Local Storage - 최근 본 상품</h1>
      <p>설명: local storage를 활용한 최근 본 상품 탭 만들기</p>
      <hr />
      {item.map((a, i) => {
        return (
          <div
            style={{ backgroundColor: "pink" }}
            key={a.id}
            onClick={() => {
              onSave(a.id);
            }}
          >
            <hr />
            <p>{a.id}</p>
            <p>{a.name}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default LocalStorage;
