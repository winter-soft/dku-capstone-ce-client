import React from "react";
import '../css/Job.css';
import Header from "../components/common/Header";
import JobContent from "../components/job/JobContent";
import BottomDoubleButtons from "../components/common/BottomDoubleButtons";
import ShareButton from "../components/common/ShareButton";

const Job = () => {
  const imgExampleUrl = 'https://webzine.kccworld.co.kr/data/cn/87/7.jpg';

  return (
    <div className="App">
      <Header/>
      <img src={imgExampleUrl} alt="" className="jobImg"/>
      <ShareButton/>
      <JobContent/>
      <BottomDoubleButtons/>
    </div>
  );
};

export default Job;