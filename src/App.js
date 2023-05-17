import './App.css';
import {useEffect} from "react";

function App() {

  // 사용자 접속 시 사용자의 뷰포트 높이 계산후 css 변수에 저장
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="App Login">
      <div className="Login-title">
        <p className="Login-title-sub">
          교육부터 채용까지<br/>
          경력단절 여성들을 위한 구인구직 어플리케이션
        </p>
        <p>주부의<br/>직업.</p>
      </div>
      <div className="Login-icon">
        <img src="img/login-icon.png" alt=""/>
      </div>
      <div className="Login-buttons">
        <div>
          <button className="kakao" type="button">
            <img src="img/kakao_logo.png"/>
            카카오로 로그인
          </button>
          <button className="naver" type="button">
            <img src="img/naver_logo.png"/>
            네이버로 로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
