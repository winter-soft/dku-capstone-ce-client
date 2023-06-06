import React from "react";
import Input from "../common/Input";
import GenderButton from "./GenderButton";
import AuthNumber from "./AuthNumber";
import AuthConfirm from "./AuthConfirm";

const SignupForm = ({data}) => {
  return (
    <div className="mt30">
      <Input type="text" placeholder="이름" value={data.name}></Input>
      <GenderButton/>
      <Input type="text" placeholder="이메일" value={data.email}></Input>
      <Input type="text" placeholder="나이"></Input>
      <AuthNumber placeholder="번호" text="인증받기"></AuthNumber>
      <AuthConfirm placeholder="인증번호"></AuthConfirm>
    </div>
  );
};

export default SignupForm;