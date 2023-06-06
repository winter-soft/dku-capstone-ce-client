import React from "react";
import SnsButton from "../components/common/SnsButton";
import '../css/Login.css';

const Login = () => {
  return (
    <div className="login">
      <p className="description">
        교육부터 채용까지<br/>
        경력단절 여성들을 위한 구인구직 어플리케이션
      </p>
      <p className="title">
        주부의<br/>
        직업.
      </p>
      <div className="loginIcon"></div>
      <div className="snsButtons">
        <SnsButton type="kakao"/>
        <SnsButton type="naver"/>
      </div>
    </div>
  );
};

export default Login;