import React, { useState } from "react";
import "../../css/adminpage.css";
import Accordion from "react-bootstrap/Accordion";
import classData from "./AdminPageComponents/classData";
import userData from "./AdminPageComponents/eventData";
import eventData from "./AdminPageComponents/eventData";
import Main from "./AdminPageComponents/Main";
import SideBarQuickView from "./AdminPageComponents/SideBarQuickView";
import SalesView from "./AdminPageComponents/SalesView";
import SalesViewTest from "./AdminPageComponents/SalesViewTest";
import ClassView from "./AdminPageComponents/ClassView";

const AdminPage = ({ classData, userData, eventData }) => {
  const [tab, setTab] = useState(0);
  return (
    <>
      <hr />
      <div className="title-wrapper">
        <h1
          onClick={() => {
            setTab(0);
          }}
        >
          Admin Page (for BearBom)
        </h1>
        <p>설명 : 관리자 페이지</p>
      </div>
      <hr />
      <div className="page-wrapper">
        <div className="sidebar-wrapper">
          <h3>관리자 페이지</h3>
          <SideBarQuickView />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>매출 관리</Accordion.Header>
              <Accordion.Body
                onClick={() => {
                  setTab(1);
                }}
              >
                - 매출 내역 조회
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(2);
                }}
              >
                - 기간별 매출 조회
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>클래스 관리</Accordion.Header>
              <Accordion.Body
                onClick={() => {
                  setTab(3);
                }}
              >
                - 클래스 조회
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(4);
                }}
              >
                - 클래스 추가/수정
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>고객 관리</Accordion.Header>
              <Accordion.Body
                onClick={() => {
                  setTab(5);
                }}
              >
                - 고객 조회
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(6);
                }}
              >
                - 고객 정보 관리
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(7);
                }}
              >
                - 블랙리스트 관리
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>이벤트 관리</Accordion.Header>
              <Accordion.Body
                onClick={() => {
                  setTab(8);
                }}
              >
                - 이벤트 조회
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(9);
                }}
              >
                - 이벤트 등록
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>고객센터 관리</Accordion.Header>
              <Accordion.Body
                onClick={() => {
                  setTab(10);
                }}
              >
                - 공지사항 조회
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(11);
                }}
              >
                - 공지사항 등록
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(12);
                }}
              >
                - FAQ 조회/수정
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(13);
                }}
              >
                - 고객문의 조회
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="content-wrapper">
          {
            [
              <Main />,
              <SalesViewTest setTab={setTab} />,
              <div>아직 안만듦</div>,
              <ClassView />,
            ][tab]
          }
        </div>
      </div>
    </>
  );
};

export default AdminPage;
