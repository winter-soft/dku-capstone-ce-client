import React from "react";
import '../css/Job.css';
import Header from "../components/common/Header";
import InterestJob from "../components/main/InterestJob";
import AroundJob from "../components/main/AroundJob";
import BottomMenu from "../components/common/BottomMenu";
import {getItemByKey} from "../common";
import RecommendJob from "../components/main/RecommendJob";

const Jobs = () => {
  const nickName = getItemByKey("nickName");
  return (
    <div className="App">
      <Header/>
      <RecommendJob title={`${nickName}님께 추천드려요!`}/>
      <AroundJob/>
      <InterestJob title="내 관심분야에요"/>
      <div className="pageBottomPadding"></div>
      <BottomMenu activeMenu="jobs"/>
    </div>
  );
};

export default Jobs;