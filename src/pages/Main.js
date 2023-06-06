import React from "react";
import '../css/Main.css';
import Header from "../components/common/Header";
import BottomMenu from "../components/common/BottomMenu";
import Slider from "../components/main/Slider";
import RoundButton from "../components/common/RoundButton";
import AroundJob from "../components/main/AroundJob";
import InterestJob from "../components/main/InterestJob";
import CurrentJob from "../components/main/CurrentJob";

const Main = () => {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <RoundButton text="직무 추천 받으러 가기"/>
      <AroundJob/>
      <InterestJob/>
      <CurrentJob/>
      <BottomMenu activeMenu="main"/>
    </div>
  );
};

export default Main;