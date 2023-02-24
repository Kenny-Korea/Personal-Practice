import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import OpacityControlBar from "./components/features/OpacityControlBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoApp from "./components/features/TodoApp";
import Main from "./components/Main";
import ImageUpload from "./components/features/ImageUpload";
import Chart from "./components/features/Chart";
import ExcelDownload from "./components/features/ExcelDownload";
import LocalStorage from "./components/features/LocalStorage";
import DoughnutChart from "./components/features/DoughnutChart";
import AdminPage from "./components/features/AdminPage";
import ScrollEvent from "./components/features/ScrollEvent";
import NavBar from "./components/NavBar";
import StickyBox from "./components/features/StickyBox";
import CRUD_practice from "./components/firebase/CRUD_practice";
import { database } from "./firebase";
import Board from "./components/firebase/Board";
import SpeedDialButton from "./components/features/SpeedDialButton";
import Mypage from "./components/features/MyPage";
import Modal from "./components/features/Modal";
import ReactQuery from "./components/practice/ReactQuery";
import Login from "./components/Login";
import Zustand from "./components/practice/Zustand";

const App = () => {
  const [navBar, setNavBar] = useState(false);

  return (
    <>
      <Header navBar={navBar} setNavBar={setNavBar} />
      {navBar ? <NavBar /> : null}
      <div className="main-wrapper">
        <Routes>
          <Route path="user/login" element={<Login />} />
          <Route index element={<Main />} />
          <Route
            path="features/opacitycontrolbar"
            element={<OpacityControlBar />}
          />
          <Route path="features/todoapp" element={<TodoApp />} />
          <Route path="features/imageupload" element={<ImageUpload />} />
          <Route path="features/chart" element={<Chart />} />
          <Route path="features/exceldownload" element={<ExcelDownload />} />
          <Route path="features/localstorage" element={<LocalStorage />} />
          <Route path="features/doughnutchart" element={<DoughnutChart />} />
          <Route path="features/scrollevent" element={<ScrollEvent />} />
          <Route path="features/stickybox" element={<StickyBox />} />
          <Route path="features/mypage" element={<Mypage />} />
          <Route path="features/modal" element={<Modal />} />
          <Route path="firebase/crud_practice" element={<CRUD_practice />} />
          <Route path="firebase/board" element={<Board />} />
          <Route path="practice/reactquery" element={<ReactQuery />} />
          <Route path="practice/zustand" element={<Zustand />} />
        </Routes>
      </div>
      <Routes>
        <Route path="features/adminpage/" element={<AdminPage />} />
        {/* <Route path="/*" element={<div>Page 404</div>} /> */}
      </Routes>
      <SpeedDialButton />
      <Footer />
    </>
  );
};

export default App;
