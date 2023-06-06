import React from "react";
import '../css/Job.css';
import Header from "../components/common/Header";
import BottomMenu from "../components/common/BottomMenu";
import CenterText from "../components/common/CenterText";

const History = () => {
  return (
    <div className="App">
      <Header/>
      <CenterText text="회사에 지원하신 내역이 없습니다."/>
      <BottomMenu activeMenu="history"/>
    </div>
  );
};

export default History;