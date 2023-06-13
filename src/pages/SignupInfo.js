import React from "react";
import '../css/Signup.css';
import SignupForm from "../components/signup/SignupForm";
import Loading from "../components/common/Loading";

const SignupInfo = () => {
  return (
    <div className="App signup">
      <Loading/>
      <SignupForm/>
    </div>
  );
};

export default SignupInfo;