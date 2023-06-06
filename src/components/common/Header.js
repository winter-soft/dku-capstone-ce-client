import React from "react";
import {useNavigate} from 'react-router-dom';


const Header = ({hideBackBtn}) => {
  const backBtnStyle = hideBackBtn ? 'displayNone' : '';
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="header">
      <span className={`backBtn ${backBtnStyle}`} onClick={goBack}>
        <ion-icon name="chevron-back-outline"></ion-icon>
        {/*<ion-icon name="arrow-back-outline"></ion-icon>*/}
      </span>
      <span className="logoText">주부의 직업.</span>
      <span className="icon"><ion-icon name="notifications-outline"></ion-icon></span>
    </div>
  );
}

export default Header;