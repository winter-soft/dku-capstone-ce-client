import React from "react";
import '../css/Signup.css';
import BottomNextButton from "../components/BottomNextButton";
import TopText from "../components/TopText";
import TopSmallText from "../components/TopSmallText";
import MajorButtons from "../components/signup/MajorButtons";

const SignupMajor = () => {
  return (
    <div className="App signup">
      <TopText text={["경력 또는 관심이 있는", <br/>, "직종을 선택해 주세요 😁"]}></TopText>
      <TopSmallText text={["선택해 주시면 저희가", <br/>, "스마트하게 회사를 추천해 드릴께요."]}></TopSmallText>
      <MajorButtons/>
      <BottomNextButton text="다음" linkTo="/signupPrivacy"></BottomNextButton>
    </div>
  );
};

export default SignupMajor;