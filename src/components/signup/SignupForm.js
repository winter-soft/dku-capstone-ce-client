import React, {useState} from "react";
import {getObjectBySessionStorage} from "../../common";
import {registerAPI} from "../../fetch";

const SignupForm = ({data}) => {
  const user = getObjectBySessionStorage('user');
  const [inputs, setInputs] = useState({
    nickName: data.nickName || "",
    gender: "",
    email: data.email || "",
    age: "",
    phoneNumber: "",
    platformId: "",
    platformType: "",
  });

  const [selectedGender, setSelectedGender] = useState("");

  const {nickName, gender, email, age, phoneNumber} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleGenderChange = (e) => {
    const {value} = e.target;

    setSelectedGender(value);

    setInputs((prevInputs) => ({
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

    // 값이 모두 입력되었을 때 API 호출
    console.log("이름:", nickName);
    console.log("성별:", gender);
    console.log("이메일:", email);
    console.log("나이:", age);
    console.log("전화번호:", phoneNumber);

    const updatedInputs = {
      nickName,
      gender,
      email,
      phoneNumber,
      platformId: user.platformId,
      platformType: user.platformType,
    };

    const response = async () => {
      return await registerAPI(updatedInputs);
    }

    response().then(data => {
      window.location.href = "/signUpMajor"
    });
  };


  return (
    <div className="mt30">
      <input
        type="text"
        name="nickName"
        className="customInput"
        placeholder="이름을 입력해주세요"
        value={nickName}
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
        value={email}
        onChange={onChange}
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
