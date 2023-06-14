import React, {useEffect, useState} from "react";
import {saveItem, saveRegisterInfoToSession} from "../../common";
import {authenticate, registerStage1API} from "../../fetch";

const SignupForm = () => {
  const [user, setUser] = useState({
    profileImageUrl: "",
    nickName: "",
    email: "",
    gender: "",
    age: "",
    phoneNumber: "",
    platformId: "",
    platformType: "",
  });
  const {nickName, gender, email, age, phoneNumber} = user;
  const [selectedGender, setSelectedGender] = useState("");

  useEffect(() => {
    async function fetchUserData(code) {
      const response = await authenticate(code);
      const token = response.data.token;
      if (token) {
        saveItem("token", token);
        window.location.href = "/main";
      } else {
        saveRegisterInfoToSession(response.data);
        if (response.data.registerStage === 1) {
          window.location.href = "/signupMajor";
        } else if (response.data.registerStage === 1) {
          window.location.href = "/signupPrivacy";
        }
        return response.data;
      }
    }

    fetchUserData(getCodeFromUrl()).then(r => setUser(r));

  }, []);

  const onChange = (e) => {
    const {name, value} = e.target;

    setUser((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };


  const handleGenderChange = (e) => {
    const {value} = e.target;

    setSelectedGender(value);

    setUser((prevInputs) => ({
      ...prevInputs,
      gender: value,
    }));
  };

  const handleSubmit = () => {
    // 각 항목 유효성 검사
    if (!nickName || !gender || !email || !age || !phoneNumber) {
      alert("모든 값을 입력해주세요.");
      return;
    }

    const updatedInputs = {
      nickName,
      gender,
      email,
      phoneNumber,
      platformId: user.platformId,
      platformType: user.platformType,
    };

    const response = async () => {
      return await registerStage1API(updatedInputs);
    }

    response().then(data => {
      window.location.href = "/signUpMajor"
    });
  };


  const getCodeFromUrl = () => {
    const location = window.location;
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get('code');
  }

  return (
    <div className="">
      <div className="signupTitle">
        안녕하세요! {user.nickName}님 :) <br/>
        <span>
          문자 인증 후 가입이 완료돼요!
        </span>
      </div>
      <img src={user.profileImageUrl} alt="" className="signupProfile"/>
      <input
        type="text"
        name="nickName"
        className="customInput"
        placeholder="이름을 입력해주세요"
        value={user.nickName}
        onChange={onChange}
      />
      <button
        type="button"
        name="gender"
        value="MALE"
        className={`choiceBtn mgRight4 ${selectedGender === "MALE" ? "active" : ""}`}
        onClick={handleGenderChange}
      >
        남자
      </button>
      <button
        type="button"
        name="gender"
        value="FEMALE"
        className={`choiceBtn ${selectedGender === "FEMALE" ? "active" : ""}`}
        onClick={handleGenderChange}
      >
        여자
      </button>
      <input
        type="text"
        name="email"
        className="customInput"
        placeholder="이메일을 입력해주세요"
        value={user.email}
      />
      <input
        type="text"
        name="age"
        className="customInput"
        placeholder="나이를 입력해주세요"
        onChange={onChange}
      />
      <div className="authBox">
        <input
          type="text"
          name="phoneNumber"
          className="customInput"
          placeholder="전화번호를 입력해주세요"
          onChange={onChange}
        />
        <button className="choiceBtn authBtn">인증</button>
      </div>
      <input
        type="text"
        name="authNum"
        className="customInput"
        placeholder="인증번호를 입력해주세요"
        onChange={onChange}
      />
      <button className="bottomNextBtn" onClick={handleSubmit}>다음</button>
    </div>
  );
};

export default SignupForm;
