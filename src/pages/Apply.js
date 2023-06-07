import React, {useEffect} from "react";
import '../css/Signup.css';
import SignupForm from "../components/signup/SignupForm";
import TopText from "../components/common/TopText";
import {authenticate} from "../fetch";
import {getObjectBySessionStorage, saveItemToSessionStorage, saveObjectToSessionStorage} from "../common";

const Apply = () => {
  useEffect(() => {
    const code = getCodeFromUrl();

    async function fetchData() {
      const isUser = await checkSignUp(code);
      if (isUser) {
        saveItemToSessionStorage("token", getObjectBySessionStorage('user').token);
        window.location.href = "/main";
      }
    }

    fetchData();
  }, []);

  const getCodeFromUrl = () => {
    const location = window.location;
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get('code');
  }

  const checkSignUp = async (code) => {
    const response = await authenticate(code);
    saveObjectToSessionStorage('user', response.data);
    return response.data.token;
  }

  return (
    <div className="App signup">
      <TopText text={["문자인증 1번만 하면", <br/>, "가입이 완료돼요!"]}></TopText>
      <SignupForm data={getObjectBySessionStorage('user')}/>
    </div>
  );
};

export default Apply;