import React from "react";
import '../css/Signup.css';
import SignupForm from "../components/signup/SignupForm";
import TopText from "../components/common/TopText";
import {getItemByKey} from "../common";

const Apply = () => {
  return (
    <div className="App signup">
      <TopText text="지원정보"></TopText>
      <SignupForm data={getItemByKey('user')}/>
    </div>
  );
};

export default Apply;