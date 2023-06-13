import React from "react";
import '../css/Job.css';
import Header from "../components/common/Header";
import BottomMenu from "../components/common/BottomMenu";
import CurrentJob from "../components/main/CurrentJob";
import Loading from "../components/common/Loading";

const Education = () => {
  return (
    <div className="App">
      <Loading/>
      <Header/>
      <CurrentJob title="직무별로 나눠 보는 요즘 채용"/>
      <BottomMenu activeMenu="education"/>
    </div>
  );
};

export default Education;