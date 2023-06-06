import React, {useEffect} from "react";
import '../css/Signup.css';
import BottomNextButton from "../components/common/BottomNextButton";
import SignupForm from "../components/signup/SignupForm";
import TopText from "../components/common/TopText";
import {authenticate} from "../fetch";

const SignupInfo = () => {
  useEffect(() => {
    console.log("!!!1!!!!!!!!!!!!!!!!");
    const location = window.location;
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    registerCheck(code);
  }, []);

  const registerCheck = async (code) => {
    try {
      const response = await authenticate(code);
      const data = response.data;
      if (data.platformId) {
        sessionStorage.setItem('platformId', data.platformId)
        sessionStorage.setItem('platformType', data.platformType)
      } else if (data.token) {
        sessionStorage.setItem('token', data.token)
        window.location.href = '/signupMajor';
      } else {
        throw DOMException;
      }
    } catch (error) {
      // alert("올바르지 못한 코드 값 입니다.")
      // window.location.href = '/';
    }
  }

  return (
    <div className="App signup">
      <TopText text={["문자인증 1번만 하면", <br/>, "가입이 완료돼요!"]}></TopText>
      <SignupForm/>
      <BottomNextButton text="다음" linkTo="/signupMajor"></BottomNextButton>
    </div>
  );
};

export default SignupInfo;