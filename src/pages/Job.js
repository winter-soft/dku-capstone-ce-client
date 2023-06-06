import React from "react";
import '../css/Job.css';
import Header from "../components/common/Header";
import BottomMenu from "../components/common/BottomMenu";

const Job = () => {
  return (
    <div className="App">
      <Header/>
      <BottomMenu activeMenu="job"/>
    </div>
  );
};

export default Job;