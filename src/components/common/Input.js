import React from "react";

const Input = ({type, placeholder, value}) => {
  return (
    <div>
      <input type={type} className="customInput" placeholder={`${placeholder}을 입력해주세요`} value={value}/>
    </div>
  );
}

export default Input;