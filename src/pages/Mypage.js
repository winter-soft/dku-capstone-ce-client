import React from "react";
import '../css/Job.css';
import Header from "../components/common/Header";
import BottomMenu from "../components/common/BottomMenu";

const Mypage = () => {
  return (
    <div className="App">
      <Header/>
      <BottomMenu activeMenu="mypage"/>
    </div>
  );
};

export default Mypage;