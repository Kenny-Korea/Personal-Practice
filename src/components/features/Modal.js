import React, { useRef, useState } from "react";
import "../../css/modal.css";
import ModalBody from "./ModalBody";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const refId = useRef();
  const refPw = useRef();
  const refNickname = useRef();

  return (
    <>
      <hr />
      <h1>Modal</h1>
      <p>설명 : 모달창 생성하기</p>
      <hr />
      <div>
        <input type="text" placeholder="id" ref={refId} required />
        <input type="text" placeholder="pw" ref={refPw} required />
        <input type="text" placeholder="nickname" ref={refNickname} required />
        <button
          onClick={() => {
            console.log(refId.current.value);
            userInfo.push(refId.current.value);
            userInfo.push(refPw.current.value);
            userInfo.push(refNickname.current.value);
            setModal(!modal);
          }}
        >
          submit
        </button>
        {modal && (
          <ModalBody
            modal={modal}
            setModal={setModal}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        )}
      </div>
    </>
  );
};

export default Modal;
