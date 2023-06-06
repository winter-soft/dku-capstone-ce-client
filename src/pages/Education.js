import React from "react";
import '../css/Job.css';
import Header from "../components/common/Header";
import BottomMenu from "../components/common/BottomMenu";

const Education = () => {
  return (
    <div className="App">
      <Header/>
      <BottomMenu activeMenu="education"/>
    </div>
  );
};

export default Education;