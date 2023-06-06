import React from "react";
import {Link} from "react-router-dom";

const SnsButton = ({linkTo, text}) => {
  const type = text === '카카오' ? 'kakao' : 'naver';

  return (
    <div>
      <Link to={linkTo}>
        <button className={`snsButton ${type}`}>
          <img src={`../../img/${type}.png`} alt="sns 이미지"/>
          {text}로 로그인하기
        </button>
      </Link>
    </div>
  );
}

export default SnsButton;