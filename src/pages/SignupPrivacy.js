import React from "react";
import '../css/Signup.css';
import BottomNextButton from "../components/BottomNextButton";
import TopText from "../components/TopText";
import TopSmallText from "../components/TopSmallText";
import Privacy from "../components/signup/Privacy";
import ToggleButton from "../components/ToggleButton";

const SignupPrivacy = () => {
  return (
    <div className="App signup">
      <TopText text={["개인정보처리방침에", <br/>, "동의해주세요 💼"]}></TopText>
      <TopSmallText text={["주부의 직업에서는 암호화를 통해 ", <br/>, "고객님의 정보를 안전하게 보관합니다."]}></TopSmallText>
      <Privacy/>
      <ToggleButton text="개인정보 수집 및 이용 "/>
      <BottomNextButton text="확인" linkTo="/signupMajor"></BottomNextButton>
    </div>
  );
};

export default SignupPrivacy;