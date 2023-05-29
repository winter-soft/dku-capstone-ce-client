import React from "react";
import '../css/Signup.css';
import BottomNextButton from "../components/BottomNextButton";
import SignupForm from "../components/signup/SignupForm";
import TopText from "../components/TopText";

const SignUpInfo = () => {
  return (
    <div className="App signup">
      <TopText text={["문자인증 1번만 하면", <br/>, "가입이 완료돼요!"]}></TopText>
      <SignupForm/>
      <BottomNextButton text="다음"></BottomNextButton>
    </div>
  );
};

export default SignUpInfo;