import React, { useState } from "react";
import "../../css/mypage.css";
import OpenedClassView from "./MyPageComponents/OpenedClassView";
import QuickView from "./MyPageComponents/QuickView";
import SideBar from "./MyPageComponents/SideBar";
import TakenClassView from "./MyPageComponents/TakenClassView";

const Mypage = () => {
  const [tab, setTab] = useState(0);

  return (
    <>
      <div className="mypage-banner">mypage</div>
      <div className="mypage-quickview-wrapper">
        <QuickView />
        {/* <div className="mypage-quickview-container"></div> */}
      </div>
      <div className="mypage-container">
        <div className="mypage-sidebar-wrapper">
          <SideBar setTab={setTab} />
        </div>
        <div className="mypage-content-wrapper">
          {[<TakenClassView />, <OpenedClassView />][tab]}
        </div>
      </div>
    </>
  );
};

export default Mypage;
