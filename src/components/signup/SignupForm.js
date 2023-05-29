import React from "react";
import Input from "../Input";
import GenderButton from "./GenderButton";
import AuthNumber from "./AuthNumber";
import AuthConfirm from "./AuthConfirm";

const SignupForm = () => {
  return (
    <div className="mt30">
      <Input type="text" placeholder="이름"></Input>
      <GenderButton/>
      <Input type="text" placeholder="이메일"></Input>
      <Input type="text" placeholder="나이"></Input>
      <AuthNumber placeholder="번호" text="인증받기"></AuthNumber>
      <AuthConfirm placeholder="인증번호"></AuthConfirm>
    </div>
  );
};

export default SignupForm;