import React from "react";
import '../css/Job.css';
import Header from "../components/common/Header";
import BottomMenu from "../components/common/BottomMenu";
import CurrentJob from "../components/main/CurrentJob";

const Education = () => {
  return (
    <div className="App">
      <Header/>
      <CurrentJob title="직무별로 나눠 보는 요즘 채용"/>
      <BottomMenu activeMenu="education"/>
    </div>
  );
};

export default Education;