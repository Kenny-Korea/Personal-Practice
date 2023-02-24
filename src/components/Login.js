import React, { useState } from "react";
import "../css/login.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState("");

  const signup = async () => {
    const auth = getAuth();
    console.log(auth);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
  };
  return (
    <>
      <hr />
      <h1>로그인</h1>
      <p>설명: 파이어베이스를 활용한 로그인 기능 구현</p>
      <hr />
      <div className="login-wrapper">
        <table>
          <tr>
            <td>아이디</td>
            <td>
              <input type="text" className="login-input" />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="text" className="login-input" />
            </td>
          </tr>
        </table>
        <hr />
        <div className="login-buttons-wrapper">
          <button onClick={signup}>로그인</button>
          <button>회원가입</button>
        </div>
      </div>
    </>
  );
};

export default Login;
