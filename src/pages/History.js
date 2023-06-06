import React from "react";
import '../css/Job.css';
import Header from "../components/common/Header";
import BottomMenu from "../components/common/BottomMenu";

const History = () => {
  return (
    <div className="App">
      <Header/>
      <BottomMenu activeMenu="history"/>
    </div>
  );
};

export default History;