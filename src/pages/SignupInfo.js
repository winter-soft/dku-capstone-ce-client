import React, {useEffect, useState} from "react";
import '../css/Signup.css';
import BottomNextButton from "../components/common/BottomNextButton";
import SignupForm from "../components/signup/SignupForm";
import TopText from "../components/common/TopText";
import {authenticate} from "../fetch";

const SignupInfo = () => {
  useEffect(async () => {
    const location = window.location;
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    await registerCheck(code);
  }, []);

  const [user, setUserData] = useState();

  const registerCheck = async (code) => {
    try {
      const response = await authenticate(code);
      setUserData(response.data);

      if (user.platformId) { // 회원가입
        sessionStorage.setItem('email', user.platformId)
        sessionStorage.setItem('nickName', user.nickName)
        sessionStorage.setItem('platformId', user.platformId)
        sessionStorage.setItem('platformType', user.platformType)
        sessionStorage.setItem('profileImageUrl', user.profileImageUrl)
        sessionStorage.setItem('registerStage', user.registerStage)
        sessionStorage.setItem('role', user.role)
      } else if (user.token) { // 가입한 유저
        sessionStorage.setItem('token', user.token)
        window.location.href = '/main';
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
      <SignupForm data={user}/>
      <BottomNextButton text="다음" linkTo="/signupMajor"></BottomNextButton>
    </div>
  );
};

export default SignupInfo;