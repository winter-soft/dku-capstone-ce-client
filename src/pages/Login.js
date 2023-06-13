import React, {useEffect, useState} from "react";
import SnsButton from "../components/common/SnsButton";
import '../css/Login.css';
import {kakaoLoginPage, tokenValid} from "../fetch";

const Login = () => {
  const [kakaoLoginPageUrl, setKakaoLoginPageUrl] = useState('');
  useEffect(() => {
    const fetchLoginPage = async () => {
      const page = await kakaoLoginPage();
      setKakaoLoginPageUrl(page.data.loginPage);
    }

    async function checkLogin() {
      const response = await tokenValid();
      if (response.data) {
        window.location.href = "/main";
      }
    }

    fetchLoginPage().catch(e => {
      console.log(e);
    });
    
    checkLogin().catch(e => {
      console.log("first init");
    });
  }, []);

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
        <SnsButton linkTo={kakaoLoginPageUrl} text="카카오"/>
        <SnsButton linkTo="/signUpMajor" text="네이버"/>
      </div>
    </div>
  );
};

export default Login;