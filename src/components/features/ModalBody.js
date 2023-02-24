import React from "react";
import "../../css/modalbody.css";

const ModalBody = ({ modal, setModal, userInfo, setUserInfo }) => {
  return (
    <>
      <div className="modalbody-outside">
        <div className="modalbody-wrapper">
          <div className="modalbody-title">
            <h1>Modal Body</h1>
          </div>
          <div className="modalbody-content">
            <p>Id: {userInfo[0]}</p>
            <p>Pw: {userInfo[1]}</p>
            <p>Nickname: {userInfo[2]}</p>
            <hr />
            <p>상기 정보로 저장하시겠습니까?</p>
          </div>
          <div className="modalbody-bottom">
            <button className="modal-button">확인</button>
            <button
              className="modal-button"
              onClick={() => {
                setModal(!modal);
                setUserInfo([]);
              }}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBody;
