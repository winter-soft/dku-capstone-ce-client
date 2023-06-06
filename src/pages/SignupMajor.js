import React, {useState} from "react";
import '../css/Signup.css';
import TopText from "../components/common/TopText";
import TopSmallText from "../components/common/TopSmallText";
import MajorButton from "../components/signup/MajorButton";
import {getObjectBySessionStorage} from "../common";
import {registerStage2API} from "../fetch";

const SignupMajor = () => {
  const user = getObjectBySessionStorage('user');
  const [preference, setPreference] = useState("");

  const handleButtonClick = (title) => {
    // 중복 여부 체크
    if (preference.includes(title)) {
      setPreference(preference.filter((item) => item !== title));
    } else {
      setPreference([...preference, title]);
    }
  };

  const handleNextButtonClick = () => {
    const joinedPreferences = preference.join(", ");
    setPreference(joinedPreferences);

    // API 호출 등의 로직 추가
    saveDataToServer({
      platformId: user.platformId,
      platformType: user.platformType,
      email: user.email,
      preference: joinedPreferences,
    });
  };


  const saveDataToServer = async (body) => {
    const response = async () => {
      return await registerStage2API(body);
    }

    response().then(data => {
      window.location.href = "/signUpPrivacy";
    });
  };

  return (
    <div className="App signup">
      <TopText text={["경력 또는 관심이 있는", <br/>, "직종을 선택해 주세요 😁"]}></TopText>
      <TopSmallText text={["선택해 주시면 저희가", <br/>, "스마트하게 회사를 추천해 드릴께요."]}></TopSmallText>
      <div className="majorBtnBox">
        <MajorButton
          title={"입주관리매니저"}
          content={["CS업무, 입주민과의", <br/>, "의견 조율과 갈등 해결"]}
          onClick={() => handleButtonClick("입주관리매니저")}
        />
        <MajorButton
          title={"모니터 요원"}
          content={["주제에 맞는 보고서", <br/>, "작성 및 검사"]}
          onClick={() => handleButtonClick("모니터 요원")}
        />
        <MajorButton
          title={"체험단"}
          content={["기업 상품 후기 작성", <br/>, "또는 홍보대사"]}
          onClick={() => handleButtonClick("체험단")}
        />
        <MajorButton
          title={"좌담회"}
          content={["제품에 대한 다양한", <br/>, "의견과 견해 제출"]}
          onClick={() => handleButtonClick("좌담회")}
        />
      </div>
      <button className="bottomNextBtn" onClick={handleNextButtonClick}>
        다음
      </button>
    </div>
  );
};

export default SignupMajor;