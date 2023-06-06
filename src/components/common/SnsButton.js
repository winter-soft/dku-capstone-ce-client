import React from "react";
import {Link} from "react-router-dom";

const SnsButton = ({type}) => {
  const isKakao = type === 'kakao';
  const buttonText = isKakao ? '카카오' : '네이버';
  const linkPage = isKakao ? '' : '/signupInfo';

  // TODO 1. 추후 config 파일 분리
  const REST_API_KEY = '47540ee45372a33d6c8800d07a2a6446';
  const REDIRECT_URL = 'http://jubujob.itkoo.kr';
  const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  //TODO 2. 임시 테스트 코드
  const loginWithSNS = () => {
    if (isKakao) {
      window.location.href = kakaoLoginUrl
    }
  }

  return (
    <div>
      <Link to={linkPage}>
        <button className={`snsButton ${type}`} onClick={loginWithSNS}>
          <img src={`../../img/${type}.png`} alt="sns 이미지"/>
          {buttonText}로 로그인하기
        </button>
      </Link>
    </div>
  );
}

export default SnsButton;