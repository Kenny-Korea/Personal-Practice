import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import OpacityControlBar from "./features/OpacityControlBar";
import TodoApp from "./features/TodoApp";
import "../css/main.css";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <hr />
      <div className="main-main-div">
        <div className="main-sub-div">
          <h4 className="main-sub-title">Lecture</h4>
          <ul></ul>
        </div>
        <div className="main-sub-div">
          <h4 className="main-sub-title">Features</h4>

          <ul>
            <li
              onClick={() => {
                navigate("/features/opacitycontrolbar");
              }}
            >
              Opacity Control Bar
            </li>
            <li
              onClick={() => {
                navigate("/features/todoapp");
              }}
            >
              Todo App
            </li>
            <li
              onClick={() => {
                navigate("/features/imageupload");
              }}
            >
              Image Upload
            </li>
            <li
              onClick={() => {
                navigate("/features/chart");
              }}
            >
              Chart
            </li>
            <li
              onClick={() => {
                navigate("/features/exceldownload");
              }}
            >
              Excel Download
            </li>
            <li
              onClick={() => {
                navigate("/features/localstorage");
              }}
            >
              Local Storage
            </li>
            <li
              onClick={() => {
                navigate("/features/doughnutchart");
              }}
            >
              Doughnut Chart
            </li>
            <li
              onClick={() => {
                navigate("/features/adminpage");
              }}
            >
              Admin Page
            </li>
            <li
              onClick={() => {
                navigate("/features/mypage");
              }}
            >
              My Page
            </li>
            <li
              onClick={() => {
                navigate("/features/scrollevent");
              }}
            >
              Scroll Event
            </li>
            <li
              onClick={() => {
                navigate("/features/stickybox");
              }}
            >
              Sticky Box
            </li>
            <li
              onClick={() => {
                navigate("/features/modal");
              }}
            >
              Modal
            </li>
          </ul>
        </div>
        <div className="main-sub-div">
          <h4 className="main-sub-title">Modified Features</h4>
          <ul></ul>
        </div>
        <div className="main-sub-div">
          <h4 className="main-sub-title">Firebase</h4>
          <ul>
            <li
              onClick={() => {
                navigate("/firebase/crud_practice");
              }}
            >
              CRUD Practice
            </li>
            <li
              onClick={() => {
                navigate("/firebase/board");
              }}
            >
              Board
            </li>
            <li
              onClick={() => {
                navigate("/practice/reactquery");
              }}
            >
              React Query
            </li>
            <li
              onClick={() => {
                navigate("/practice/zustand");
              }}
            >
              Zustand
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
