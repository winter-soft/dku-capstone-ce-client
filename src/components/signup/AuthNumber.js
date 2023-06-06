import React from "react";
import Input from "../common/Input";

const AuthNumber = ({placeholder, text}) => {
  return (
    <div className="authBox">
      <Input type="text" placeholder={`${placeholder}`}></Input>
      <button className="choiceBtn authBtn">{text}</button>
    </div>
  );
}

export default AuthNumber;