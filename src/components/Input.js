import React from "react";

const Input = ({type, placeholder}) => {
  return (
    <div>
      <input type={type} className="customInput" placeholder={`${placeholder}을 입력해주세요`}/>
    </div>
  );
}

export default Input;