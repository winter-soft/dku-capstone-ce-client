import React, {useEffect} from "react";
import '../css/Main.css';
import Header from "../components/common/Header";
import BottomMenu from "../components/common/BottomMenu";
import Slider from "../components/main/Slider";
import RoundButton from "../components/common/RoundButton";
import AroundJob from "../components/main/AroundJob";
import CurrentJob from "../components/main/CurrentJob";
import {announceAPI, tokenValid} from "../fetch";
import {getItemBySessionStorage, saveUserToSession} from "../common";
import RecommendJob from "../components/main/RecommendJob";

const Main = () => {
  const token = getItemBySessionStorage('token');

  useEffect(() => {
    const saveUser = async (token) => {
      return await tokenValid(token);
    }

    saveUser(token)
      .then(response => {
        saveUserToSession(response);
        console.log(announceAPI(token, 2));
      });

  }, []);

  return (
    <div className="App">
      <Header hideBackBtn={true}/>
      <Slider/>
      <RoundButton text="직무 추천 받으러 가기"/>
      <AroundJob/>
      <RecommendJob title="내 관심분야에요"/>
      <CurrentJob title="직무별로 나눠 보는 요즘 채용"/>
      <BottomMenu activeMenu="main"/>
    </div>
  );
};

export default Main;