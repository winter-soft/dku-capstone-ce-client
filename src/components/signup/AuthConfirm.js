import React from "react";
import Input from "../common/Input";

const AuthConfirm = ({placeholder}) => {
  return (
    <div className="authNumberBox">
      <Input type="number" placeholder={placeholder} id="authNumber"></Input>
      <label htmlFor="authNumber">2:32</label>
    </div>
  );
}

export default AuthConfirm;