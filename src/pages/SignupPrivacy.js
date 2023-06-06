import React from "react";
import '../css/Signup.css';
import TopText from "../components/common/TopText";
import TopSmallText from "../components/common/TopSmallText";
import Privacy from "../components/signup/Privacy";
import ToggleButton from "../components/common/ToggleButton";
import {registerStage3API} from "../fetch";
import {getObjectBySessionStorage, saveItemToSessionStorage} from "../common";

const SignupPrivacy = () => {
  const user = getObjectBySessionStorage('user');
  const handleRegisterButtonClick = () => {
    // API 호출 등의 로직 추가
    saveDataToServer({
      platformId: user.platformId,
      platformType: user.platformType,
      email: user.email,
    });
  };

  const saveDataToServer = async (body) => {
    const response = async () => {
      return await registerStage3API(body);
    }

    response().then(body => {
      saveItemToSessionStorage("token", body.data.token);
      window.location.href = "/main";
      // window.location.href = "/main";
    });
  };

  return (
    <div className="App signup">
      <TopText text={["개인정보처리방침에", <br/>, "동의해주세요 💼"]}></TopText>
      <TopSmallText text={["주부의 직업에서는 암호화를 통해 ", <br/>, "고객님의 정보를 안전하게 보관합니다."]}></TopSmallText>
      <Privacy/>
      <ToggleButton text="개인정보 수집 및 이용 "/>
      <button className="bottomNextBtn" onClick={handleRegisterButtonClick}>
        확인
      </button>
    </div>
  );
};

export default SignupPrivacy;