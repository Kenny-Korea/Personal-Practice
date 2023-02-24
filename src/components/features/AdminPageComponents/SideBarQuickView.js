import React from "react";
import "../../../css/sidebarquickview.css";
import adminProfileImage from "../../../images/adminProfileImage.png";
import styled from "styled-components";

const RedCircle = styled.div`
  background: red;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 10px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  // padding: 0;
`;

const SideBarQuickView = () => {
  return (
    <>
      <div className="sidebar-quickview-wrapper">
        <div className="sidebar-quickview-left">
          <div className="sidebar-quickview-left-image">
            <p>Admin님 환영합니다.</p>
            <div className="profile-image-div">
              <img
                src={adminProfileImage}
                alt="adminProfileImage"
                className="profile-image"
              />
            </div>
            <div className="profile-image-description"></div>
          </div>
          <div className="sidebar-quickview-left-content">
            <div></div>
          </div>
        </div>
        <div className="sidebar-quickview-right">
          <div className="sidebar-quickview-right-item">
            문의
            <RedCircle></RedCircle>
          </div>
          <div className="sidebar-quickview-right-item">승인</div>
          <div className="sidebar-quickview-right-item">몰라</div>
          <div className="sidebar-quickview-right-item">알아</div>
        </div>
      </div>
    </>
  );
};

export default SideBarQuickView;
